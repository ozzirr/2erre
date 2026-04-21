import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import Cube from '@/components/cube/Cube';

export default async function Hero() {
  const t = await getTranslations('hero');

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden />
      <div className="max-w-6xl mx-auto px-6 pt-24 md:pt-32 pb-20 grid items-center gap-12 lg:grid-cols-2">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-text-soft)] border border-[var(--color-line)] rounded-full px-3 py-1.5">
            <span className="accent-dot" aria-hidden /> {t('eyebrow')}
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.02] text-[var(--color-text-strong)]">
            {t('title')}{' '}
            <span className="text-display gradient-text">{t('titleAccent')}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--color-text-soft)] leading-relaxed">
            {t('subtitle')}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contatti" className="btn btn-primary">
              {t('ctaPrimary')} →
            </Link>
            <Link href="/servizi" className="btn btn-ghost">
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(34,211,238,0.25),transparent)] blur-2xl" aria-hidden />
          <Cube />
        </div>
      </div>
    </section>
  );
}
