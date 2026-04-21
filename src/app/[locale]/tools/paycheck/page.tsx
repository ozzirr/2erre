import {setRequestLocale} from 'next-intl/server';
import PaycheckClient from './PaycheckClient';

export default async function PaycheckPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <PaycheckClient />;
}
