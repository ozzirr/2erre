import {getTranslations} from 'next-intl/server';
import SectionHeader from '@/components/ui/SectionHeader';

const KEYS = ['projects', 'clients', 'years'] as const;

export default async function Stats() {
  const t = await getTranslations('stats');
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow={t('eyebrow')} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {KEYS.map((k) => (
            <div key={k} className="card p-8 text-center">
              <div className="text-5xl md:text-6xl font-semibold tracking-tight gradient-text">
                {t(`items.${k}.value`)}
              </div>
              <div className="mt-3 text-sm uppercase tracking-wider text-[var(--color-text-soft)]">
                {t(`items.${k}.label`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
