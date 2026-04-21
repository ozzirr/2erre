import type {LegalDoc} from '@/lib/legal';

export default function LegalDocView({doc, locale}: {doc: LegalDoc; locale: string}) {
  const updatedLabel = locale === 'it' ? 'Ultimo aggiornamento' : 'Last updated';
  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)]">
          {updatedLabel}: {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }).format(new Date(doc.updated))}
        </div>
        <h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-strong)]">
          {doc.title}
        </h1>
        <p className="mt-6 text-[var(--color-text-soft)] leading-relaxed">{doc.intro}</p>

        <div className="mt-12 space-y-10">
          {doc.sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-xl font-semibold text-[var(--color-text-strong)]">{s.heading}</h2>
              <div className="mt-3 space-y-3 text-[var(--color-text-soft)] leading-[1.75]">
                {s.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
