import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Splito — Split Expenses with Friends & Teams | Multi-Currency, On-Chain Settlement",
  description: "Track shared expenses, split costs across currencies, and settle up on-chain or off. Free for friend groups and teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
