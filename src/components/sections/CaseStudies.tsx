'use client';

import Image from 'next/image';
import {useState} from 'react';
import {useTranslations} from 'next-intl';

const KEYS = ['odora', 'balance', 'generale'] as const;

const UTM = '?utm_source=2erre.online&utm_medium=case-study&utm_campaign=portfolio';

const CASE_META = {
  odora: {
    logoSrc: '/brand/white/logo_odora.webp',
    logoWidth: 230,
    logoHeight: 72,
    logoClassName: 'max-h-20 max-w-[20rem]',
    url: `https://odora.it/${UTM}`
  },
  balance: {
    logoSrc: '/brand/white/logo-balance.webp',
    logoWidth: 252,
    logoHeight: 72,
    logoClassName: 'max-h-20 max-w-[20rem]',
    url: `https://ctrlbalance.com/${UTM}`
  },
  generale: {
    logoSrc: '/brand/white/logo-generale-elettrica-optimized.webp',
    logoWidth: 620,
    logoHeight: 148,
    logoClassName: 'max-h-36 max-w-[36rem] scale-[1.55] origin-left',
    url: `https://generale-elettrica.com/${UTM}`
  }
} as const;

export default function CaseStudies() {
  const t = useTranslations('cases');
  const [active, setActive] = useState<(typeof KEYS)[number]>('odora');
  const meta = CASE_META[active];

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

        <div className="mt-10 card p-8 md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(260px,0.9fr)] lg:gap-14">
            <div className="lg:pr-10 lg:border-r lg:border-[var(--color-line)]">
              <div className="min-h-[3.5rem] flex items-center">
                <Image
                  src={meta.logoSrc}
                  alt={t(`tabs.${active}`)}
                  width={meta.logoWidth}
                  height={meta.logoHeight}
                  className={`h-auto w-auto object-contain opacity-90 ${meta.logoClassName}`}
                />
              </div>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {t('challenge')}
                </div>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text)] md:text-lg">
                  {t(`items.${active}.challenge`)}
                </p>
              </div>

              <div className="mt-10">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {t('solution')}
                </div>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text)] md:text-lg">
                  {t(`items.${active}.solution`)}
                </p>
              </div>

            </div>

            <div className="flex flex-col justify-center lg:pl-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                {t('result')}
              </div>
              <div className="mt-6 text-6xl font-semibold leading-none text-[var(--color-accent)] sm:text-7xl md:text-8xl lg:text-[6.5rem]">
                {t(`items.${active}.result`)}
              </div>
              <div className="mt-4 max-w-xs text-base uppercase tracking-[0.16em] text-[var(--color-text-soft)] md:text-lg">
                {t(`items.${active}.resultLabel`)}
              </div>
              <div className="mt-8">
                <a
                  href={meta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full sm:w-auto uppercase tracking-[0.14em] text-sm"
                >
                  {t('visit', {name: t(`tabs.${active}`)})}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
