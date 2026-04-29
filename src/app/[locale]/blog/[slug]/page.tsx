import {notFound} from 'next/navigation';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import {getPost, posts, type Locale} from '@/lib/blog';

export function generateStaticParams() {
  return posts.flatMap((p) => [
    {locale: 'it', slug: p.slug},
    {locale: 'en', slug: p.slug}
  ]);
}

export default async function PostPage({
  params
}: {
  params: Promise<{locale: string; slug: string}>;
}) {
  const {locale, slug} = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');
  const post = getPost(slug, locale as Locale);
  if (!post) notFound();

  return (
    <article className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/blog" className="text-sm text-[var(--color-text-soft)] hover:text-[var(--color-accent)]">
          {t('back')}
        </Link>
        <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--color-text-dim)]">
          <span className="text-[var(--color-accent)]">{post.tag}</span>
          <span>·</span>
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            }).format(new Date(post.date))}
          </time>
          <span>·</span>
          <span>{t('readingTime', {min: post.readingMin})}</span>
        </div>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-strong)] leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-text-soft)]">{post.excerpt}</p>

        <div className="mt-12 space-y-10 text-[var(--color-text-soft)] leading-[1.75]">
          {post.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-strong)]">
                  {section.heading}
                </h2>
              )}
              {section.paragraphs.map((para, paragraphIndex) => (
                <p key={paragraphIndex}>{para}</p>
              ))}
            </section>
          ))}
        </div>

        {post.faq && post.faq.length > 0 && (
          <div className="mt-14 border-t border-[var(--color-line)] pt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-strong)]">
              FAQ
            </h2>
            <div className="mt-6 space-y-5">
              {post.faq.map((item) => (
                <div key={item.q} className="card p-5">
                  <h3 className="font-semibold text-[var(--color-text-strong)]">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-soft)]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
