'use client';

import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import {useRouter} from '@/i18n/navigation';
import {getBrowserClient} from '@/lib/supabase';

export default function UpdateClient() {
  const t = useTranslations('auth');
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // When Supabase arrives from a recovery email, it sets a recovery session.
    // We just wait until client is ready.
    (async () => {
      const supabase = await getBrowserClient();
      if (!supabase) return;
      const {data} = await supabase.auth.getSession();
      setReady(!!data.session);
    })();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get('password') ?? '');
    setState('sending');
    const supabase = await getBrowserClient();
    if (!supabase) return;
    const {error} = await supabase.auth.updateUser({password});
    if (error) {
      setMsg(error.message);
      setState('err');
    } else {
      setState('ok');
      setTimeout(() => router.push('/dashboard'), 1200);
    }
  }

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-md mx-auto px-6">
        <div className="card p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-strong)]">
            {t('update.title')}
          </h1>
          <p className="mt-2 text-[var(--color-text-soft)]">{t('update.subtitle')}</p>

          {!ready && state === 'idle' && (
            <p className="mt-6 text-sm text-[var(--color-amber)]">{t('update.expired')}</p>
          )}

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="label">{t('fields.password')}</label>
              <input name="password" type="password" required minLength={8} className="field" />
            </div>
            <button
              type="submit"
              disabled={state === 'sending' || !ready}
              className="btn btn-primary w-full"
            >
              {t('update.submit')} →
            </button>
          </form>

          {state === 'err' && <p className="mt-4 text-sm text-[var(--color-danger)]">{msg}</p>}
          {state === 'ok' && (
            <p className="mt-4 text-sm text-[var(--color-accent)]">{t('update.ok')}</p>
          )}
        </div>
      </div>
    </section>
  );
}
