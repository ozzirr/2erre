export type QuoteInput = {
  type: 'landing' | 'website' | 'ecommerce' | 'webapp' | 'mobile' | 'ai';
  complexity: 'simple' | 'medium' | 'complex';
  urgency: 'relaxed' | 'normal' | 'rush';
  integrations: 'none' | 'few' | 'many';
};

export type QuoteOutput = {
  min: number;
  max: number;
  weeks: number;
};

const BASE: Record<QuoteInput['type'], [number, number, number]> = {
  // [min, max, weeks]
  landing:    [1500, 4000, 2],
  website:    [4000, 12000, 5],
  ecommerce:  [9000, 25000, 8],
  webapp:     [15000, 60000, 12],
  mobile:     [18000, 70000, 14],
  ai:         [6000, 30000, 6]
};

const COMPLEXITY: Record<QuoteInput['complexity'], number> = {
  simple: 0.7,
  medium: 1.0,
  complex: 1.6
};

const URGENCY: Record<QuoteInput['urgency'], {cost: number; weeks: number}> = {
  relaxed: {cost: 0.95, weeks: 1.2},
  normal:  {cost: 1.0,  weeks: 1.0},
  rush:    {cost: 1.3,  weeks: 0.6}
};

const INTEGRATIONS: Record<QuoteInput['integrations'], {cost: number; weeks: number}> = {
  none: {cost: 1.0,  weeks: 1.0},
  few:  {cost: 1.15, weeks: 1.1},
  many: {cost: 1.4,  weeks: 1.3}
};

export function computeQuote(q: QuoteInput): QuoteOutput {
  const [minB, maxB, weeksB] = BASE[q.type];
  const cMult = COMPLEXITY[q.complexity];
  const u = URGENCY[q.urgency];
  const i = INTEGRATIONS[q.integrations];

  const costMult = cMult * u.cost * i.cost;
  const min = Math.round((minB * costMult) / 100) * 100;
  const max = Math.round((maxB * costMult) / 100) * 100;
  const weeks = Math.max(1, Math.round(weeksB * cMult * u.weeks * i.weeks));

  return {min, max, weeks};
}

export function formatEUR(n: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0
  }).format(n);
}
