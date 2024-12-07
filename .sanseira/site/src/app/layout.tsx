import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from '@/components/Footer';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Sanseira - AI-Powered Learning',
  description: 'Revolutionizing learning with AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
