import Providers from '@/components/providers/Providers';
import { Header } from '@/components/header/header';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SkibidAI',
  description: 'Welcome to SkibidAI. I will show you how to lose money.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black`}
        >
          <main className="flex flex-col grow min-h-screen items-center w-full overflow-hidden relative selection:bg-amber-400/80 selection:text-amber-900">
            <Header />
            {children}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bottom-0 -z-10 pointer-events-none w-[1440px]">
              <div className="absolute top-[-200px] left-[-220px] w-[400px] h-[1180px] bg-gradient-to-r from-black via-amber-500 to-[#FFFFFF00] pointer-events-none rotate-[40deg] -z-10 blur-[220px] rounded-full opacity-80" />
              <div className="absolute top-[-200px] left-[1120px] w-[300px] h-[1180px] bg-gradient-to-r from-black via-amber-500 to-[#A1B7F191] pointer-events-none rotate-[40deg]  -z-10 blur-[220px] rounded-[700px] opacity-80 " />
            </div>
          </main>
        </body>
      </Providers>
    </html>
  );
}
