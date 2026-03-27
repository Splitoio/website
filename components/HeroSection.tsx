import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import BgPattern from "@/assets/splito-patterns.png";
import HeroBg from "@/assets/hero-bg-2.png";
import Link from "next/link";
import { getDashboardUrl } from "@/utils";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <Image src={BgPattern} alt="Hero Background" fill />
      </div>

      <div className="relative z-10 ">
        {/* Version Badge */}
        <div className="flex justify-center pt-40 mb-12">
          <div className="px-4 py-2 bg-[rgba(15,15,15,0.4)] border border-[#292929] rounded-xl">
            <span className="text-[rgba(248,250,252,0.8)] text-sm font-normal font-inter">
              v1.0 is now live!
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8">
          <h1 className="text-white text-5xl md:text-6xl font-medium leading-tight font-general-sans max-w-4xl mx-auto">
            Making <span className="text-[#09D1FD]">Crypto</span> feel like{" "}
            <span className="text-[#09D1FD]">Money</span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-[rgba(248,250,252,0.7)] text-lg font-normal leading-relaxed font-inter max-w-2xl mx-auto">
            The expense platform for friend groups and teams. Track who owes
            what, split any cost, and settle up on-chain or off.
            Multi-currency, multi-wallet, zero friction.
          </p>
        </div>

        {/* CTA Buttons: Individuals & Teams */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Link href={getDashboardUrl()}>
            <Button size="lg" variant="primary">
              Try Splito Free
            </Button>
          </Link>
          <Link href={getDashboardUrl("organization")}>
            <Button size="lg" variant="secondary">
              Explore Teams
            </Button>
          </Link>
        </div>
        <p className="text-center text-[rgba(248,250,252,0.45)] text-sm font-inter mb-12">
          For friend groups and teams with invoices, contracts & more
        </p>

        {/* Dashboard Preview */}
        <div className="flex justify-center relative top-32">
          <Image
            src={HeroBg}
            alt="Dashboard"
            width={1000}
            height={600}
            className="w-[calc(100%+100px)] max-h-[600px] object-fill rotate-6"
          />
        </div>
      </div>
    </section>
  );
}
