import {getTranslations, setRequestLocale} from 'next-intl/server';
import Stats from '@/components/sections/Stats';
import ContactForm from '@/components/sections/ContactForm';

const VALUES = ['v1', 'v2', 'v3'] as const;
const NOTES = ['n1', 'n2', 'n3'] as const;

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <>
      <section className="pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[var(--color-accent)] mb-5">
                {t('eyebrow')}
              </div>
              <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-[0.98]">
                {t('title')}
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="text-xl md:text-2xl text-[var(--color-text)] leading-relaxed">
                {t('body')}
              </p>
              <p className="mt-5 text-base md:text-lg text-[var(--color-text-soft)] leading-relaxed">
                {t('bodySecond')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {NOTES.map((note) => (
              <div key={note} className="border-t border-[var(--color-line)] pt-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
                  {t(`notes.${note}.label`)}
                </div>
                <p className="mt-3 text-lg leading-relaxed text-[var(--color-text-strong)]">
                  {t(`notes.${note}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-18">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8 max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
              {t('valuesEyebrow')}
            </div>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-strong)]">
              {t('valuesTitle')}
            </h2>
          </div>
          <div className="grid gap-4">
            {VALUES.map((v) => (
              <div key={v} className="card p-6 md:grid md:grid-cols-[220px_1fr] md:items-start md:gap-8">
                <div className="text-[var(--color-accent)] text-sm uppercase tracking-[0.18em]">
                  {t(`values.${v}.title`)}
                </div>
                <p className="mt-3 text-[var(--color-text-soft)] leading-relaxed md:mt-0 md:text-lg">
                  {t(`values.${v}.body`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <ContactForm />
    </>
  );
}
