import {setRequestLocale} from 'next-intl/server';
import QrClient from './QrClient';

export default async function QrPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <QrClient />;
}
