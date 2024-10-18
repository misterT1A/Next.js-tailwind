import type { Metadata } from 'next';
import { Onest } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';

import { Header } from '@/components';

const inter = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'test-task-getshoptv',
  description: 'test-task-getshoptv',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactNode {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
