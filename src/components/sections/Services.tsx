import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import SectionHeader from '@/components/ui/SectionHeader';

const ITEMS = ['consulting', 'web', 'apps', 'ai'] as const;

export default async function Services() {
  const t = await getTranslations('services');

  return (
    <section id="servizi" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow={t('eyebrow')} subtitle={t('subtitle')} />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ITEMS.map((key, i) => (
            <article
              key={key}
              className="card p-8 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                    0{i + 1} · Servizio
                  </div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-semibold text-[var(--color-text-strong)]">
                    {t(`items.${key}.title`)}{' '}
                    <span className="text-display text-[var(--color-accent)] text-xl align-baseline">
                      {t(`items.${key}.tagline`)}
                    </span>
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-[var(--color-text-soft)] leading-relaxed max-w-md">
                {t(`items.${key}.body`)}
              </p>
              <div className="mt-6 pt-6 border-t border-[var(--color-line)]">
                <Link
                  href="/contatti"
                  className="inline-flex items-center gap-2 text-[var(--color-text-strong)] text-sm font-medium uppercase tracking-wider hover:text-[var(--color-accent)] transition"
                >
                  {t(`items.${key}.cta`)}
                  <span className="text-[var(--color-accent)]">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
