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
        {/* Main Heading */}
        <div className="text-center pt-40 mb-8">
          <h1 className="text-white text-5xl md:text-6xl font-medium leading-tight font-general-sans max-w-4xl mx-auto">
            Request money.{" "}
            <span className="text-[#09D1FD]">They pay in any asset.</span>
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-10">
          <p className="text-[rgba(248,250,252,0.7)] text-lg font-normal leading-relaxed font-inter max-w-2xl mx-auto">
            Pick your amount and the asset you want to receive: USDC or XLM on
            Stellar. Send one link. Whoever is paying connects a Solana or
            Stellar wallet and pays with what they already hold. They never need
            a Splito account.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link href={getDashboardUrl()}>
            <Button size="lg" variant="primary">
              Try Splito Free
            </Button>
          </Link>
        </div>

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
