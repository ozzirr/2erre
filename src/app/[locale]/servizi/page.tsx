import {setRequestLocale} from 'next-intl/server';
import Services from '@/components/sections/Services';
import ContactForm from '@/components/sections/ContactForm';

export default async function ServiziPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return (
    <div className="pt-20">
      <Services />
      <ContactForm />
    </div>
  );
}
