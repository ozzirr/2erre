import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import SectionHeader from '@/components/ui/SectionHeader';
import MiniCube from '@/components/cube/MiniCube';

const ITEMS = [
  {key: 'qr' as const, href: '/tools/qr', enabled: true},
  {key: 'calc' as const, href: '/tools/quote', enabled: true},
  {key: 'paycheck' as const, href: '/tools/paycheck', enabled: true}
];

export default async function Products() {
  const t = await getTranslations('products');

  return (
    <section id="prodotti" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow={t('eyebrow')} subtitle={t('subtitle')} />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {ITEMS.map((it) => (
            <article key={it.key} className="card p-6 flex flex-col">
              <MiniCube
                label={t(`items.${it.key}.name`)}
                badge={it.enabled ? '2erre' : t(`items.${it.key}.badge`)}
              />
              <h3 className="mt-2 text-xl font-semibold text-[var(--color-text-strong)]">
                {t(`items.${it.key}.name`)}{' '}
                <span className="text-display text-[var(--color-accent)] text-base">
                  {t(`items.${it.key}.tagline`)}
                </span>
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-soft)] leading-relaxed flex-1">
                {t(`items.${it.key}.body`)}
              </p>
              <div className="mt-5 pt-5 border-t border-[var(--color-line)]">
                {it.enabled ? (
                  <Link
                    href={it.href}
                    className="inline-flex items-center gap-2 text-[var(--color-text-strong)] text-sm font-medium uppercase tracking-wider hover:text-[var(--color-accent)] transition"
                  >
                    {t(`items.${it.key}.cta`)}
                    <span className="text-[var(--color-accent)]">→</span>
                  </Link>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[var(--color-text-dim)] text-sm uppercase tracking-wider">
                    {t(`items.${it.key}.cta`)}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
