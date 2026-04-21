import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {getPosts, type Locale} from '@/lib/blog';

export default async function BlogPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const posts = getPosts(locale as Locale);

  return (
    <section className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-dim)] mb-4">
          {t('title')}
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-tight">
          {t('title')}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-soft)]">{t('subtitle')}</p>

        <ul className="mt-14 space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="card p-6 md:p-8 block group hover:border-[var(--color-accent)] transition">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
                  <span className="text-[var(--color-accent)]">{p.tag}</span>
                  <span>·</span>
                  <time dateTime={p.date}>{formatDate(p.date, locale as Locale)}</time>
                  <span>·</span>
                  <span>{t('readingTime', {min: p.readingMin})}</span>
                </div>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[var(--color-text-strong)] group-hover:text-[var(--color-accent)] transition">
                  {p.title}
                </h2>
                <p className="mt-2 text-[var(--color-text-soft)] leading-relaxed">{p.excerpt}</p>
                <div className="mt-4 text-sm uppercase tracking-wider text-[var(--color-accent)]">
                  {t('readMore')} →
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function formatDate(iso: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(iso));
}
