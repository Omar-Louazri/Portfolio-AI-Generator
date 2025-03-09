'use client'; // Mark the layout as a Client Component

import './globals.css';
import { Inter } from 'next/font/google';
import { metadata } from './metadata'; // Import metadata

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}