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

export const metadata = {
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
  openGraph: {
    title: 'Hanif Sholihin | Ahli Web & Digital Solution',
    description: 'Bikin bisnis Anda naik level dengan website profesional.',
    url: 'https://hanifsholihin.my.id',
    siteName: 'Hanif Sholihin Portfolio',
    images: [
      {
        url: '/og-image.png',
        height: 630,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
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
