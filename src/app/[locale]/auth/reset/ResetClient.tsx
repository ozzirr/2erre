'use client';

import {useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {getBrowserClient} from '@/lib/supabase';

export default function ResetClient() {
  const t = useTranslations('auth');
  const locale = useLocale();
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err' | 'unconfigured'>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') ?? '');
    setState('sending');
    const supabase = await getBrowserClient();
    if (!supabase) {
      setState('unconfigured');
      return;
    }
    const redirectTo = `${window.location.origin}/${locale}/auth/update`;
    const {error} = await supabase.auth.resetPasswordForEmail(email, {redirectTo});
    if (error) {
      setMsg(error.message);
      setState('err');
    } else {
      setState('ok');
    }
  }

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-md mx-auto px-6">
        <div className="card p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-strong)]">
            {t('reset.title')}
          </h1>
          <p className="mt-2 text-[var(--color-text-soft)]">{t('reset.subtitle')}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="label">{t('fields.email')}</label>
              <input name="email" type="email" required className="field" />
            </div>
            <button type="submit" disabled={state === 'sending'} className="btn btn-primary w-full">
              {t('reset.submit')} →
            </button>
          </form>

          {state === 'unconfigured' && (
            <p className="mt-4 text-sm text-[var(--color-amber)]">{t('unconfigured')}</p>
          )}
          {state === 'err' && <p className="mt-4 text-sm text-[var(--color-danger)]">{msg}</p>}
          {state === 'ok' && (
            <p className="mt-4 text-sm text-[var(--color-accent)]">{t('reset.sent')}</p>
          )}

          <div className="mt-6 pt-6 border-t border-[var(--color-line)] text-sm">
            <Link href="/auth/login" className="text-[var(--color-accent)] hover:underline">
              {t('reset.back')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
