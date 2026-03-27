import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/icons/flash-icon.svg",
    iconAlt: "Flash icon",
    title: "1. Create your group",
    description:
      "Set up a group for your trip, apartment, team, or project in seconds. No wallet required to start.",
  },
  {
    icon: "/icons/user-add-icon.svg",
    iconAlt: "User add icon",
    title: "2. Add expenses as they happen",
    description:
      "Log any expense, split it equally or custom, across any currency. Splito handles the math.",
  },
  {
    icon: "/icons/dashboard-edit-icon.svg",
    iconAlt: "Dashboard edit icon",
    title: "3. See who owes what, always",
    description:
      "Real-time balances across friends, groups, and currencies. Send reminders with one tap.",
  },
  {
    icon: "/icons/cash-icon.svg",
    iconAlt: "Cash icon",
    title: "4. Settle your way",
    description:
      "Pay back via your preferred method — settle on-chain with Aptos or Stellar, or mark it paid off-chain.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 md:py-24 lg:py-32 px-4">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-white font-medium font-general-sans text-2xl md:text-3xl lg:text-[44.81px] leading-[1.3] md:leading-[1.74] mb-4 md:mb-6">
          From split to settled in four steps
        </h2>

        <p className="text-slate-50/60 font-inter font-normal text-sm md:text-[15.13px] leading-[1.59] max-w-[500px]">
          Stop juggling spreadsheets and IOUs. Splito tracks every expense,
          calculates every balance, and settles every debt — automatically.
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
