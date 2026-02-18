import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Hanif Sholihin | Jasa Pembuatan Website & Sistem Digital Custom',
  description: 'Solusi pembuatan website super cepat (Next.js & Go). Spesialis Landing Page Umroh, E-commerce, dan Sistem Sekolah. Konsultasi Gratis!',
  keywords: [
    'Hanif Sholihin', 
    'Jasa Pembuatan Website', 
    'Landing Page Umroh', 
    'Sistem Sekolah Digital', 
    'Web Developer Indonesia',
    'Next.js Developer'
  ],
  authors: [{ name: 'Hanif Sholihin' }],
  metadataBase: new URL('https://hanifsholihin.my.id'),
  openGraph: {
    title: 'Hanif Sholihin | Ahli Web & Digital Solution',
    description: 'Bikin bisnis Anda naik level dengan website profesional.',
    url: 'https://hanifsholihin.my.id',
    siteName: 'Hanif Sholihin Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Preview Website Hanif Sholihin',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanif Sholihin | Ahli Web & Digital Solution',
    description: 'Solusi website cepat dan sistem custom untuk bisnis Anda.',
    images: ['/og-image.jpg'],
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
