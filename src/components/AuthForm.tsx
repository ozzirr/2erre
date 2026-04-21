'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link, useRouter} from '@/i18n/navigation';
import {getBrowserClient} from '@/lib/supabase';

export default function AuthForm({mode}: {mode: 'login' | 'signup'}) {
  const t = useTranslations('auth');
  const router = useRouter();
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err' | 'unconfigured'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') ?? '');
    const password = String(fd.get('password') ?? '');
    setState('sending');
    const supabase = await getBrowserClient();
    if (!supabase) {
      setState('unconfigured');
      return;
    }
    const {error} =
      mode === 'login'
        ? await supabase.auth.signInWithPassword({email, password})
        : await supabase.auth.signUp({email, password});
    if (error) {
      setErrorMsg(error.message);
      setState('err');
    } else {
      setState('ok');
      router.push('/dashboard');
      router.refresh();
    }
  }

  const m = mode === 'login' ? 'login' : 'signup';

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-md mx-auto px-6">
        <div className="card p-8">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text-strong)]">
            {t(`${m}.title`)}
          </h1>
          <p className="mt-2 text-[var(--color-text-soft)]">{t(`${m}.subtitle`)}</p>

          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div>
              <label className="label">{t('fields.email')}</label>
              <input name="email" type="email" required className="field" />
            </div>
            <div>
              <label className="label">{t('fields.password')}</label>
              <input name="password" type="password" required minLength={8} className="field" />
            </div>
            <button type="submit" disabled={state === 'sending'} className="btn btn-primary w-full">
              {t(`${m}.submit`)} →
            </button>
            {mode === 'login' && (
              <div className="text-right">
                <Link href="/auth/reset" className="text-xs text-[var(--color-text-soft)] hover:text-[var(--color-accent)]">
                  {t('login.forgot')}
                </Link>
              </div>
            )}
          </form>

          {state === 'unconfigured' && (
            <p className="mt-4 text-sm text-[var(--color-amber)]">{t('unconfigured')}</p>
          )}
          {state === 'err' && (
            <p className="mt-4 text-sm text-[var(--color-danger)]">{errorMsg}</p>
          )}
          {state === 'ok' && (
            <p className="mt-4 text-sm text-[var(--color-accent)]">✓</p>
          )}

          <div className="mt-6 pt-6 border-t border-[var(--color-line)] text-sm text-[var(--color-text-soft)]">
            {mode === 'login' ? (
              <>
                {t('login.noAccount')}{' '}
                <Link href="/auth/signup" className="text-[var(--color-accent)] hover:underline">
                  {t('login.signupLink')}
                </Link>
              </>
            ) : (
              <>
                {t('signup.hasAccount')}{' '}
                <Link href="/auth/login" className="text-[var(--color-accent)] hover:underline">
                  {t('signup.loginLink')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
