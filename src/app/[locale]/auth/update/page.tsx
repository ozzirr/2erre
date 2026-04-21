import {setRequestLocale} from 'next-intl/server';
import UpdateClient from './UpdateClient';

export default async function UpdatePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <UpdateClient />;
}
