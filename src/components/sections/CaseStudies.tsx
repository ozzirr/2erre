'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

const KEYS = ['odora', 'balance', 'generale'] as const;

export default function CaseStudies() {
  const t = useTranslations('cases');
  const [active, setActive] = useState<(typeof KEYS)[number]>('odora');

  return (
    <section id="casi" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-4">
            {t('eyebrow')}
          </div>
          <p className="text-[var(--color-text-soft)]">{t('subtitle')}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {KEYS.map((k) => (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`px-5 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition ${
                active === k
                  ? 'bg-[var(--color-accent)] text-[var(--color-ink-0)]'
                  : 'border border-[var(--color-line-strong)] text-[var(--color-text-soft)] hover:text-[var(--color-text-strong)]'
              }`}
            >
              {t(`tabs.${k}`)}
            </button>
          ))}
        </div>

        <div className="mt-10 card p-8 md:p-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
              {t('challenge')}
            </div>
            <p className="mt-3 text-[var(--color-text)] leading-relaxed">
              {t(`items.${active}.challenge`)}
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
              {t('solution')}
            </div>
            <p className="mt-3 text-[var(--color-text)] leading-relaxed">
              {t(`items.${active}.solution`)}
            </p>
          </div>
          <div className="md:border-l md:border-[var(--color-line)] md:pl-8">
            <div className="text-xs uppercase tracking-wider text-[var(--color-text-dim)]">
              {t('result')}
            </div>
            <div className="mt-3 text-5xl font-semibold gradient-text">
              {t(`items.${active}.result`)}
            </div>
            <div className="mt-2 text-sm text-[var(--color-text-soft)]">
              {t(`items.${active}.resultLabel`)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
