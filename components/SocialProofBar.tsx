import React from "react";

const stats = [
  { value: "10K+", label: "Expenses tracked" },
  { value: "500+", label: "Active groups" },
  { value: "5+", label: "Currencies supported" },
  { value: "2", label: "Blockchains integrated" },
];

export default function SocialProofBar() {
  return (
    <section className="container mx-auto py-16 md:py-24 lg:py-32 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-[#09D1FD] text-3xl md:text-4xl font-medium font-general-sans">
              {stat.value}
            </span>
            <span className="text-[rgba(248,250,252,0.5)] text-sm font-inter mt-2">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
