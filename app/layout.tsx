import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/components/PostHogProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Splito — Multi-Currency Expense Splitting for International Travelers",
  description: "Log expenses in any currency, lock the exchange rate when you spend, and settle on-chain from your wallet. No conversion fights, no bank transfers.",
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
