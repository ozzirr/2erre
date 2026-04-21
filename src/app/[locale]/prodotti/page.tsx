import {setRequestLocale} from 'next-intl/server';
import Products from '@/components/sections/Products';
import NewsletterInline from '@/components/sections/NewsletterInline';

export default async function ProdottiPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-20">
      <Products />
      <NewsletterInline />
    </div>
  );
}
