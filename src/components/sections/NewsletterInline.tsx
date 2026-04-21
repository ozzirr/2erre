'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function NewsletterInline() {
  const t = useTranslations('newsletter');
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    }).catch(() => null);
    setState(res && res.ok ? 'ok' : 'err');
    if (res && res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="card p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-strong)]">
            {t('title')}
          </h3>
          <p className="mt-3 text-[var(--color-text-soft)]">{t('subtitle')}</p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              name="email"
              type="email"
              required
              placeholder={t('placeholder')}
              className="field flex-1"
            />
            <button className="btn btn-primary" disabled={state === 'sending'}>
              {t('cta')} →
            </button>
          </form>
          {state === 'ok' && (
            <div className="mt-3 text-sm text-[var(--color-accent)]">{t('success')}</div>
          )}
          {state === 'err' && (
            <div className="mt-3 text-sm text-[var(--color-danger)]">{t('error')}</div>
          )}
        </div>
      </div>
    </section>
  );
}
