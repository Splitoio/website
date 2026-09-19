import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Splito: Request Money, Get Paid in Any Asset",
  description:
    "Request USDC or XLM on Stellar with one link. Whoever pays connects a Solana or Stellar wallet and pays with the asset they already hold; no Splito account needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased bg-black text-white`}>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
