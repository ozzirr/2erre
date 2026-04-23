'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [state, setState] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('sending');
    const formData = new FormData(e.currentTarget);
    const phonePrefix = String(formData.get('phonePrefix') ?? '').trim();
    const phoneLocal = String(formData.get('phoneLocal') ?? '').trim();
    formData.delete('phonePrefix');
    formData.delete('phoneLocal');
    formData.set('phone', [phonePrefix, phoneLocal].filter(Boolean).join(' '));
    const data = Object.fromEntries(formData.entries());
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
            <PhoneField label={t('fields.phone')} />
            <Field name="company" label={t('fields.company')} placeholder={t('fields.companyPlaceholder')} required />
            <Select name="service" label={t('fields.service')} options={[
              'Consulenza', 'Web & Brand', 'App iOS/Android', 'AI & Automazione'
            ]} required />
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

function Field({name, label, type = 'text', placeholder, required}: {name: string; label: string; type?: string; placeholder?: string; required?: boolean}) {
  return (
    <div>
      <label className="label">{label}{required && ' *'}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="field"
        autoComplete={name}
        placeholder={placeholder}
      />
    </div>
  );
}

function PhoneField({label}: {label: string}) {
  const [phonePrefix, setPhonePrefix] = useState('+39');
  const flag = getFlagForPrefix(phonePrefix);

  return (
    <div>
      <label className="label">{label}</label>
      <div className="field flex items-center gap-3 px-3">
        <div className="flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-line-strong)] bg-[var(--color-ink-1)] px-3 py-1.5 text-sm text-[var(--color-text-strong)]">
          <span aria-hidden>{flag}</span>
          <input
            name="phonePrefix"
            type="tel"
            inputMode="tel"
            autoComplete="tel-country-code"
            value={phonePrefix}
            onChange={(e) => setPhonePrefix(e.target.value)}
            aria-label={`${label} prefix`}
            className="w-14 bg-transparent text-sm text-[var(--color-text-strong)] focus:outline-none"
          />
        </div>
        <input
          name="phoneLocal"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="333 123 4567"
          className="min-w-0 flex-1 bg-transparent text-[0.9375rem] text-[var(--color-text)] placeholder:text-[var(--color-text-dim)] focus:outline-none"
        />
      </div>
    </div>
  );
}

function getFlagForPrefix(prefix: string) {
  const normalized = prefix.replace(/\s+/g, '');

  if (normalized.startsWith('+39')) return '🇮🇹';
  if (normalized.startsWith('+1')) return '🇺🇸';
  if (normalized.startsWith('+33')) return '🇫🇷';
  if (normalized.startsWith('+34')) return '🇪🇸';
  if (normalized.startsWith('+44')) return '🇬🇧';
  if (normalized.startsWith('+49')) return '🇩🇪';
  if (normalized.startsWith('+351')) return '🇵🇹';
  if (normalized.startsWith('+41')) return '🇨🇭';
  if (normalized.startsWith('+31')) return '🇳🇱';
  if (normalized.startsWith('+32')) return '🇧🇪';
  if (normalized.startsWith('+43')) return '🇦🇹';

  return '🌍';
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
