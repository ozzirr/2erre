import {setRequestLocale} from 'next-intl/server';
import AccountClient from './AccountClient';

export default async function AccountPage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  setRequestLocale(locale);
  return <AccountClient />;
}
