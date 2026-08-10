import React from "react";
import Pattern from "@/assets/pattern-2.png";
import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";
import { getDashboardUrl } from "@/utils";

export default function CTASection() {
  return (
    <section className="relative mx-4 md:mx-8 lg:mx-20 mt-16 md:mt-24 lg:mt-32 mb-16 md:mb-24 lg:mb-32 bg-[#09090B] rounded-[16px] md:rounded-[20px] overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <Image
          src={Pattern}
          alt="Pattern"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="py-12 md:py-16 lg:py-24 flex flex-col items-center justify-center gap-6 md:gap-8 relative z-10 px-6 md:px-12">
        <p className="text-[#888] text-sm md:text-base font-normal leading-[1.7] text-center font-inter max-w-xl">
          No account needed for whoever is paying you.
        </p>

        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium text-center font-general-sans leading-[1.2] max-w-2xl">
          Stop telling people which asset to go buy first.
        </h2>

        <Link href={getDashboardUrl()}>
          <Button variant="outline">Create a request</Button>
        </Link>
      </div>
    </section>
  );
}
