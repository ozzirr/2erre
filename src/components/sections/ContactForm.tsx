'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    }).catch(() => null);
    setState(res && res.ok ? 'ok' : 'err');
    if (res && res.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <section id="contatti" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="card p-8 md:p-12">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
            {t('eyebrow')}
          </div>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-strong)]">
            {t('title')}
          </h2>
          <p className="mt-3 text-[var(--color-text-soft)]">{t('subtitle')}</p>

          <form onSubmit={handleSubmit} className="mt-10 grid gap-5 md:grid-cols-2">
            <Field name="name" label={t('fields.name')} required />
            <Field name="email" type="email" label={t('fields.email')} required />
            <Field name="phone" label={t('fields.phone')} />
            <Field name="company" label={t('fields.company')} required />
            <Field name="role" label={t('fields.role')} />
            <Field name="website" label={t('fields.website')} />
            <Select name="service" label={t('fields.service')} options={[
              'Consulenza', 'Web & Brand', 'App iOS/Android', 'AI & Automazione'
            ]} required />
            <Select name="size" label={t('fields.size')} options={[
              '1-10', '11-50', '51-200', '200+'
            ]} />
            <Select name="revenue" label={t('fields.revenue')} options={[
              '< 1M', '1-5M', '5-20M', '> 20M'
            ]} />
            <Select name="source" label={t('fields.source')} options={[
              'LinkedIn', 'Google', 'Passaparola', 'Altro'
            ]} />
            <div className="md:col-span-2">
              <label className="label">{t('fields.message')} *</label>
              <textarea name="message" required rows={5} className="field resize-none" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between gap-4 flex-wrap">
              <div className="text-xs text-[var(--color-text-dim)]">
                * {t('required')}
              </div>
              <button type="submit" disabled={state === 'sending'} className="btn btn-primary">
                {state === 'sending' ? t('sending') : `${t('submit')} →`}
              </button>
            </div>
            {state === 'ok' && (
              <div className="md:col-span-2 text-sm text-[var(--color-accent)]">{t('success')}</div>
            )}
            {state === 'err' && (
              <div className="md:col-span-2 text-sm text-[var(--color-danger)]">{t('error')}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({name, label, type = 'text', required}: {name: string; label: string; type?: string; required?: boolean}) {
  return (
    <div>
      <label className="label">{label}{required && ' *'}</label>
      <input name={name} type={type} required={required} className="field" />
    </div>
  );
}

function Select({name, label, options, required}: {name: string; label: string; options: string[]; required?: boolean}) {
  return (
    <div>
      <label className="label">{label}{required && ' *'}</label>
      <select name={name} required={required} className="field" defaultValue="">
        <option value="" disabled>—</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}
