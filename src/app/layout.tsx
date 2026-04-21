import type {Metadata} from 'next';
import {Inter, Instrument_Serif} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap'
});

export const metadata: Metadata = {
  title: '2erre SRL',
  description: 'Il partner digitale della tua impresa.'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${inter.variable} ${instrument.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
