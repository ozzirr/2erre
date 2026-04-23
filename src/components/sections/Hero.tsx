'use client';

import {useEffect, useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Particles from '@/components/Particles';

export default function Hero() {
  const t = useTranslations('hero');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const replay = () => setAnimationKey((value) => value + 1);
    window.addEventListener('hero:replay', replay);
    return () => window.removeEventListener('hero:replay', replay);
  }, []);

  function scrollToServices(e: React.MouseEvent<HTMLAnchorElement>) {
    const services = document.getElementById('servizi');
    if (!services) return;
    e.preventDefault();
    services.scrollIntoView({behavior: 'smooth', block: 'start'});
    history.replaceState(null, '', '#servizi');
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden h-[calc(100svh-5.5rem)] md:h-[calc(100svh-6rem)]"
    >
      <div className="bg-dots" aria-hidden />
      <div className="hidden md:block">
        <Particles />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-64 w-[36rem] max-w-[92vw] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.14),transparent_68%)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex h-[calc(100svh-5.5rem)] max-w-6xl flex-col items-center justify-center px-6 pb-6 pt-8 text-center md:h-[calc(100svh-6rem)] md:pb-8 md:pt-10">
        <div key={animationKey} className="hero-reveal flex flex-col items-center">
          <Image
            src="/brand/logo_2erre.png"
            alt="2erre SRL"
            width={340}
            height={92}
            priority
            className="mb-8 h-16 w-auto opacity-95 sm:h-20 md:mb-10 md:h-24"
          />

          <h1 className="max-w-6xl text-[3.25rem] font-semibold tracking-tight leading-[0.94] text-[var(--color-text-strong)] sm:text-[4.25rem] md:text-[5.5rem] lg:text-[7rem]">
            <span>{t('titlePre')} </span>
            <span className="gradient-text">{t('titleAccent')}</span>
            <br />
            <span className="text-display leading-none">{t('titleSuffix')}</span>
          </h1>

          <p className="mt-7 max-w-[46rem] text-lg leading-relaxed text-[var(--color-text-soft)] sm:text-xl md:mt-8 md:text-2xl">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/contatti"
              className="btn btn-light min-w-[15rem] uppercase tracking-[0.15em] text-sm font-semibold !px-8 !py-5 sm:min-w-[16rem]"
            >
              {t('ctaPrimary')} <span aria-hidden>→</span>
            </Link>
            <Link
              href="/#servizi"
              onClick={scrollToServices}
              className="px-3 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--color-text-soft)] transition hover:text-[var(--color-text-strong)]"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
