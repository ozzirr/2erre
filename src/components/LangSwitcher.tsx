'use client';

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';

const LABELS = {
  short: {it: 'IT', en: 'EN'},
  long: {it: 'Italiano', en: 'English'}
} as const;

export default function LangSwitcher({verbose = false}: {verbose?: boolean}) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: 'it' | 'en') => {
    if (next === locale) return;
    router.replace(pathname, {locale: next});
  };

  const labels = verbose ? LABELS.long : LABELS.short;

  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink-1)] p-0.5 text-[0.8125rem] font-medium">
      {(['it', 'en'] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          className={`${verbose ? 'px-5 py-2 text-sm' : 'px-3 py-1'} rounded-full transition ${
            locale === lang
              ? 'bg-[var(--color-accent)] text-[var(--color-ink-0)]'
              : 'text-[var(--color-text-soft)] hover:text-[var(--color-text)]'
          }`}
          aria-pressed={locale === lang}
        >
          {labels[lang]}
        </button>
      ))}
    </div>
  );
}
