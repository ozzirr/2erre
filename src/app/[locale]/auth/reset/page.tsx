import {setRequestLocale} from 'next-intl/server';
import ResetClient from './ResetClient';

export default async function ResetPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <ResetClient />;
}
