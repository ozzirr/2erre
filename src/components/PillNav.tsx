'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {getBrowserClient} from '@/lib/supabase';
import LangSwitcher from './LangSwitcher';

export default function PillNav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let unsub: (() => void) | undefined;
    (async () => {
      const supabase = await getBrowserClient();
      if (!supabase) return;
      const {data} = await supabase.auth.getUser();
      setAuthed(!!data.user);
      const sub = supabase.auth.onAuthStateChange((_evt, session) => {
        setAuthed(!!session?.user);
      });
      unsub = () => sub.data.subscription.unsubscribe();
    })();
    return () => unsub?.();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const links = [
    {href: '/servizi', label: t('services')},
    {href: '/prodotti', label: t('products')},
    {href: '/chi-siamo', label: t('about')},
    {href: '/blog', label: t('blog')},
    {href: '/contatti', label: t('contact')}
  ] as const;

  const authHref = authed ? '/dashboard' : '/auth/login';
  const authLabel = authed ? t('dashboard') : t('login');

  return (
    <>
      <header className="sticky top-4 z-50 flex justify-center px-4">
        <nav
          className={`pill-nav flex items-center gap-1 rounded-full pl-2 pr-2 py-1.5 transition-all ${
            scrolled ? 'shadow-[0_8px_40px_-16px_rgba(0,0,0,0.8)]' : ''
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[var(--color-text-strong)] font-semibold tracking-tight"
          >
            <span className="accent-dot" aria-hidden />
            <span>{t('brand')}</span>
          </Link>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-[0.8125rem] uppercase tracking-wider text-[var(--color-text-soft)] hover:text-[var(--color-text-strong)] transition"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 pl-1">
            <LangSwitcher />
            <Link
              href={authHref}
              className="px-3 py-1.5 rounded-full text-[0.8125rem] uppercase tracking-wider text-[var(--color-text-soft)] hover:text-[var(--color-text-strong)] transition"
            >
              {authLabel}
            </Link>
            <Link href="/contatti" className="btn btn-dark !py-1.5 !px-4 !text-[0.8125rem]">
              {t('cta')}
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2 pl-1">
            <Link href="/contatti" className="btn btn-dark !py-1.5 !px-4 !text-[0.8125rem]">
              {t('contact')}
            </Link>
            <button
              type="button"
              aria-label={open ? t('close') : t('menu')}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="w-9 h-9 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink-1)] flex items-center justify-center text-[var(--color-text-strong)]"
            >
              {open ? <IconClose /> : <IconBurger />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-40 pt-24 px-4 pb-8">
          <div
            className="absolute inset-0 bg-[var(--color-ink-0)]/85 backdrop-blur-xl"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative card p-2 max-w-xl mx-auto">
            <div className="p-4 pb-2 flex justify-center">
              <LangSwitcher verbose />
            </div>
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-4 rounded-2xl text-[var(--color-text-strong)] text-lg hover:bg-[var(--color-ink-1)] transition"
                  >
                    <span>{l.label}</span>
                    <span className="text-[var(--color-text-dim)]">→</span>
                  </Link>
                </li>
              ))}
              <li className="mt-1 pt-1 border-t border-[var(--color-line)]">
                <Link
                  href={authHref}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-4 rounded-2xl text-[var(--color-text-strong)] text-lg hover:bg-[var(--color-ink-1)] transition"
                >
                  <span>{authLabel}</span>
                  <span className="text-[var(--color-accent)]">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function IconBurger() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
