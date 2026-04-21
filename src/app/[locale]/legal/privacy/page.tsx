import {setRequestLocale} from 'next-intl/server';
import LegalDocView from '@/components/LegalDoc';
import {legal, type Locale} from '@/lib/legal';

export default async function PrivacyPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <LegalDocView doc={legal.privacy[locale as Locale]} locale={locale} />;
}
