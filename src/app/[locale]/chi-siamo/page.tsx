import {getTranslations, setRequestLocale} from 'next-intl/server';
import Stats from '@/components/sections/Stats';
import ContactForm from '@/components/sections/ContactForm';

const VALUES = ['v1', 'v2', 'v3'] as const;

export default async function AboutPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  return (
    <>
      <section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-4">
            {t('eyebrow')}
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-tight">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg text-[var(--color-text-soft)] leading-relaxed">
            {t('body')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--color-text-strong)] mb-8">
            {t('valuesTitle')}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v} className="card p-6">
                <div className="text-[var(--color-accent)] text-sm uppercase tracking-wider">
                  {t(`values.${v}.title`)}
                </div>
                <p className="mt-3 text-[var(--color-text-soft)] leading-relaxed">
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
