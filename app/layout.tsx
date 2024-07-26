import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const title = 'OpenCore Group';
const description = 'Your Ultimate Resource Hub for Digital Success';
const domain = 'https://opencoregroup.vercel.app';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    type: 'website',
    url: domain,
    title: title,
    description: description,
    siteName: domain,
    images: [
      {
        url: domain + '/og.png',
        alt: 'OpenCore',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
