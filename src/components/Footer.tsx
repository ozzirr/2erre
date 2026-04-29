import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {ReactNode} from 'react';

const NAV_LINKS = [
  {href: '/servizi', key: 'services'},
  {href: '/prodotti', key: 'products'},
  {href: '/chi-siamo', key: 'about'},
  {href: '/blog', key: 'blog'},
  {href: '/contatti', key: 'contact'}
] as const;

const LEGAL_LINKS = [
  {href: '/legal/privacy', key: 'privacy'},
  {href: '/legal/terms', key: 'terms'},
  {href: '/legal/cookies', key: 'cookies'}
] as const;

export default async function Footer() {
  const t = await getTranslations('footer');
  const nav = await getTranslations('nav');
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-[var(--color-line)] bg-[linear-gradient(180deg,rgba(11,18,24,0.78)_0%,rgba(2,3,5,0.98)_48%,rgba(0,0,0,1)_100%)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(39,211,238,0.75),transparent)]" />
      <div className="pointer-events-none absolute bottom-16 left-1/2 hidden -translate-x-1/2 text-[12rem] font-semibold leading-none tracking-normal text-white/[0.025] lg:block">
        2erre
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid gap-5 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:items-stretch">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ink-0)]/55 p-6 shadow-[0_24px_90px_-52px_rgba(39,211,238,0.8)] backdrop-blur-xl md:p-8">
            <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">
                  {t('cta.eyebrow')}
                </div>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text-strong)] md:text-5xl">
                  {t('cta.title')}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-text-soft)]">
                  {t('cta.body')}
                </p>
              </div>
              <Link
                href="/contatti"
                className="btn btn-primary shrink-0 uppercase tracking-[0.14em] !px-6 !py-4 text-sm"
              >
                {t('cta.button')}
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white/[0.03] p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
              {t('contact.label')}
            </div>
            <a
              href="mailto:info@2erre.online"
              className="mt-4 block text-2xl font-semibold tracking-tight text-[var(--color-text-strong)] transition hover:text-[var(--color-accent)]"
            >
              info@2erre.online
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-soft)]">
              {t('contact.body')}
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(160px,0.45fr)_minmax(160px,0.45fr)] md:gap-12">
          <div>
            <Image
              src="/brand/logo_2erre.png"
              alt="2erre SRL"
              width={220}
              height={66}
              className="h-14 w-auto"
            />
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--color-text-soft)]">
              {t('tagline')}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                Web
              </span>
              <span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                App
              </span>
              <span className="rounded-full border border-[var(--color-line)] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[var(--color-text-soft)]">
                AI
              </span>
            </div>
          </div>

          <FooterColumn title={t('columns.nav')}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {nav(link.key)}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title={t('columns.legal')}>
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-link">
                  {t(`links.${link.key}`)}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>
      </div>

      <div className="relative border-t border-[var(--color-line)] bg-black/35">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs uppercase tracking-[0.16em] text-[var(--color-text-dim)] sm:flex-row sm:items-center sm:justify-between">
          {t('copyright', {year})}
          <span>Made in Italy · 2erre.online</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="mb-4 text-xs uppercase tracking-[0.22em] text-[var(--color-text-dim)]">
        {title}
      </div>
      <ul className="space-y-2 text-base text-[var(--color-text-soft)]">
        {children}
      </ul>
    </div>
  );
}
