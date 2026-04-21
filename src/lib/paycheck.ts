// Rough Italian payroll estimator (IRPEF 2024 brackets, simplified).
// Not a substitute for real payroll software. Results are indicative.

export type PaycheckInput = {
  grossAnnual: number;   // RAL
  months: 13 | 14;
  dependents: number;    // children
  spouseDependent: boolean;
};

export type PaycheckOutput = {
  netMonthly: number;
  netAnnual: number;
  irpefAnnual: number;
  inpsAnnual: number;
  employerCost: number;
};

const INPS_EMPLOYEE = 0.0919;
const EMPLOYER_MULT = 1.37;

// Italian IRPEF 2024 brackets (3 brackets)
const BRACKETS: Array<{upto: number; rate: number}> = [
  {upto: 28000, rate: 0.23},
  {upto: 50000, rate: 0.35},
  {upto: Infinity, rate: 0.43}
];

function taxIrpef(taxable: number): number {
  let remaining = taxable;
  let prev = 0;
  let tax = 0;
  for (const b of BRACKETS) {
    const slice = Math.min(remaining, b.upto - prev);
    if (slice <= 0) break;
    tax += slice * b.rate;
    remaining -= slice;
    prev = b.upto;
    if (remaining <= 0) break;
  }
  return tax;
}

// Simplified dependents deduction (detrazioni per carichi)
function dependentsCredit(dependents: number, spouse: boolean): number {
  const perChild = 950;
  const spouseCredit = spouse ? 690 : 0;
  return dependents * perChild + spouseCredit;
}

// Basic employment credit (detrazione da lavoro dipendente) — rough smoothed curve
function employmentCredit(gross: number): number {
  if (gross <= 15000) return 1955;
  if (gross <= 28000) return 1910 - ((gross - 15000) / 13000) * 190;
  if (gross <= 50000) return 1910 - ((gross - 28000) / 22000) * 1910;
  return 0;
}

export function computePaycheck(input: PaycheckInput): PaycheckOutput {
  const gross = Math.max(0, input.grossAnnual);
  const inps = gross * INPS_EMPLOYEE;
  const taxable = Math.max(0, gross - inps);

  const gross_tax = taxIrpef(taxable);
  const credits = dependentsCredit(input.dependents, input.spouseDependent) + employmentCredit(gross);
  const irpef = Math.max(0, gross_tax - credits);

  const netAnnual = Math.max(0, gross - inps - irpef);
  const netMonthly = netAnnual / input.months;
  const employerCost = gross * EMPLOYER_MULT;

  return {
    netMonthly,
    netAnnual,
    irpefAnnual: irpef,
    inpsAnnual: inps,
    employerCost
  };
}

export function formatEUR(n: number, opts: {cents?: boolean} = {}): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: opts.cents ? 2 : 0,
    maximumFractionDigits: opts.cents ? 2 : 0
  }).format(n);
}
