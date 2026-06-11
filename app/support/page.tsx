import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SUPPORT_EMAIL = "support@1417labs.com";
const MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Splito Support")}`;

export const metadata: Metadata = {
  title: "Support — Splito",
  description: `Need help with Splito? Contact our support team at ${SUPPORT_EMAIL} and we'll get back to you, usually within 1–2 business days.`,
};

export default function SupportPage() {
  return (
    <div
      style={{ background: "linear-gradient(0deg, #111111, #111111), #FFFFFF" }}
      className="min-h-screen text-white overflow-x-hidden flex flex-col"
    >
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 pt-40 pb-24 md:pt-48">
        <div className="w-full max-w-[640px] text-center">
          <span className="inline-block rounded-full border border-[#1F1F1F] bg-[#171717] px-4 py-1.5 text-xs font-medium text-[rgba(248,250,252,0.8)]">
            Support
          </span>

          <h1 className="mt-6 text-3xl md:text-5xl font-semibold tracking-tight">
            How can we help?
          </h1>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[rgba(248,250,252,0.6)]">
            Questions about splitting expenses, your account, or anything else in
            Splito? Our team is here to help. Send us an email and we&apos;ll get
            back to you, usually within 1–2 business days.
          </p>

          {/* Email card */}
          <div className="mt-10 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D] p-8 md:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(9,209,253,0.12)]">
              <Mail className="h-6 w-6 text-[#09D1FD]" />
            </div>

            <p className="mt-5 text-sm text-[rgba(248,250,252,0.6)]">
              Email our support team
            </p>
            <a
              href={MAILTO}
              className="mt-1 inline-block text-xl font-semibold text-[#09D1FD] hover:underline md:text-2xl"
            >
              {SUPPORT_EMAIL}
            </a>

            <div className="mt-8">
              <a
                href={MAILTO}
                className="inline-flex h-[44px] items-center justify-center gap-2 rounded-xl bg-[#09D1FD] px-[25px] font-semibold text-black transition-colors hover:bg-[#08c5f0]"
              >
                <Mail className="h-4 w-4" />
                <span>Email us</span>
              </a>
            </div>
          </div>

          {/* What to include */}
          <div className="mt-8 rounded-2xl border border-[#1F1F1F] bg-[#0D0D0D]/60 p-6 text-left md:p-8">
            <h2 className="text-sm font-semibold text-white">
              To help us help you faster, please include:
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-[rgba(248,250,252,0.6)]">
              <li className="flex gap-2">
                <span className="text-[#09D1FD]">•</span>
                The email address on your Splito account
              </li>
              <li className="flex gap-2">
                <span className="text-[#09D1FD]">•</span>
                Your device and app version
              </li>
              <li className="flex gap-2">
                <span className="text-[#09D1FD]">•</span>
                A short description of the issue (screenshots help!)
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
