import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import Stats from '@/components/sections/Stats';
import CaseStudies from '@/components/sections/CaseStudies';
import ContactForm from '@/components/sections/ContactForm';
import NewsletterInline from '@/components/sections/NewsletterInline';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Services />
      <Products />
      <Stats />
      <CaseStudies />
      <NewsletterInline />
      <ContactForm />
    </>
  );
}
