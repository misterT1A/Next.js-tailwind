import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import type { ReactNode } from 'react';

const geistOnest = localFont({
  src: './fonts/Onest-VariableFont_wght.woff',
  variable: '--font-geist-Onest',
  weight: '400 500 700 900',
});

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
      <body className={`${geistOnest.variable} antialiased`}>{children}</body>
    </html>
  );
}
