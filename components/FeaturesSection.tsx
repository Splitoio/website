import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/icons/flash-icon.svg",
    iconAlt: "Flash icon",
    title: "Log in any currency",
    description:
      "Add expenses in THB, EUR, INR, USDC — whatever you're spending. No manual conversions before you enter anything.",
  },
  {
    icon: "/icons/user-add-icon.svg",
    iconAlt: "User add icon",
    title: "Lock the rate when you spend",
    description:
      "Set the exchange rate at the moment of the expense. No arguing about what the rate \"should have been\" three weeks later.",
  },
  {
    icon: "/icons/dashboard-edit-icon.svg",
    iconAlt: "Dashboard edit icon",
    title: "See one balance, not five",
    description:
      "Totals converted to your home currency in real time. You owe $47 — not \"2,000 THB, €15, and $8.\"",
  },
  {
    icon: "/icons/cash-icon.svg",
    iconAlt: "Cash icon",
    title: "Settle from your wallet",
    description:
      "Connect Stellar or Aptos. Sign one transaction, debt cleared. No bank wire, no Venmo that doesn't work abroad.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 md:py-24 lg:py-32 px-4">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-white font-medium font-general-sans text-2xl md:text-3xl lg:text-[44.81px] leading-[1.3] md:leading-[1.74] mb-4 md:mb-6">
          From first expense to fully settled
        </h2>

        <p className="text-slate-50/60 font-inter font-normal text-sm md:text-[15.13px] leading-[1.59] max-w-[500px]">
          Most expense apps were built for single-currency friend groups.
          Splito was built for the trip where everyone&apos;s paying in
          something different.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-24">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            iconAlt={feature.iconAlt}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
