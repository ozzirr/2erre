'use client';

import {useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {computeQuote, formatEUR, type QuoteInput} from '@/lib/quote';

const TYPES: QuoteInput['type'][] = ['landing', 'website', 'ecommerce', 'webapp', 'mobile', 'ai'];
const COMPLEXITIES: QuoteInput['complexity'][] = ['simple', 'medium', 'complex'];
const URGENCIES: QuoteInput['urgency'][] = ['relaxed', 'normal', 'rush'];
const INTEGRATIONS: QuoteInput['integrations'][] = ['none', 'few', 'many'];

export default function QuoteClient() {
  const t = useTranslations('tools.quote');

  const [type, setType] = useState<QuoteInput['type']>('website');
  const [complexity, setComplexity] = useState<QuoteInput['complexity']>('medium');
  const [urgency, setUrgency] = useState<QuoteInput['urgency']>('normal');
  const [integrations, setIntegrations] = useState<QuoteInput['integrations']>('few');

  const result = useMemo(
    () => computeQuote({type, complexity, urgency, integrations}),
    [type, complexity, urgency, integrations]
  );

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-4">
          2erre · Tools
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-tight">
          {t('title')}
        </h1>
        <p className="mt-3 text-[var(--color-text-soft)]">{t('subtitle')}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="card p-8 space-y-6">
            <Group label={t('fields.type')}>
              <div className="grid grid-cols-2 gap-2">
                {TYPES.map((k) => (
                  <Chip key={k} active={type === k} onClick={() => setType(k)}>
                    {t(`type.${k}`)}
                  </Chip>
                ))}
              </div>
            </Group>

            <Group label={t('fields.complexity')}>
              <div className="flex gap-2">
                {COMPLEXITIES.map((k) => (
                  <Chip key={k} active={complexity === k} onClick={() => setComplexity(k)} flex>
                    {t(`complexity.${k}`)}
                  </Chip>
                ))}
              </div>
            </Group>

            <Group label={t('fields.urgency')}>
              <div className="flex gap-2">
                {URGENCIES.map((k) => (
                  <Chip key={k} active={urgency === k} onClick={() => setUrgency(k)} flex>
                    {t(`urgency.${k}`)}
                  </Chip>
                ))}
              </div>
            </Group>

            <Group label={t('fields.integrations')}>
              <div className="flex gap-2">
                {INTEGRATIONS.map((k) => (
                  <Chip key={k} active={integrations === k} onClick={() => setIntegrations(k)} flex>
                    {t(`integrations.${k}`)}
                  </Chip>
                ))}
              </div>
            </Group>
          </div>

          <div className="card p-8 flex flex-col">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              {t('results.title')}
            </div>
            <div className="mt-4">
              <div className="text-4xl md:text-5xl font-semibold text-[var(--color-text-strong)] leading-tight">
                {formatEUR(result.min)} — {formatEUR(result.max)}
              </div>
              <div className="text-sm text-[var(--color-accent)] uppercase tracking-wider mt-2">
                {t('results.range')}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--color-line)]">
              <div className="text-2xl font-semibold text-[var(--color-text-strong)]">
                {t('results.weeks', {w: result.weeks})}
              </div>
              <div className="text-sm text-[var(--color-text-soft)] mt-1">
                {t('results.duration')}
              </div>
            </div>

            <p className="mt-6 text-sm text-[var(--color-text-soft)] leading-relaxed">
              {t('results.includes')}
            </p>
            <p className="mt-2 text-xs text-[var(--color-text-dim)] leading-relaxed">
              {t('results.disclaimer')}
            </p>

            <Link
              href={{pathname: '/contatti', query: {service: type, range: `${result.min}-${result.max}`}}}
              className="btn btn-primary mt-6"
            >
              {t('next')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Group({label, children}: {label: string; children: React.ReactNode}) {
  return (
    <div>
      <div className="label mb-2">{label}</div>
      {children}
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
  flex
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  flex?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${flex ? 'flex-1 ' : ''}rounded-full px-4 py-2 text-sm border transition ${
        active
          ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/15 text-[var(--color-text-strong)]'
          : 'border-[var(--color-line)] text-[var(--color-text-soft)] hover:text-[var(--color-text-strong)] hover:border-[var(--color-text-soft)]'
      }`}
    >
      {children}
    </button>
  );
}
