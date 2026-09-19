import React from "react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/icons/flash-icon.svg",
    iconAlt: "Flash icon",
    title: "Ask for what you want",
    description:
      "Set the amount and the asset you want to land: USDC or XLM on Stellar. Add a name and an expiry if the request needs one.",
  },
  {
    icon: "/icons/user-add-icon.svg",
    iconAlt: "User add icon",
    title: "Send one link",
    description:
      "Copy it, show the QR code, or send it over WhatsApp, Telegram, or email. The payer opens the link as a guest: no account, no install.",
  },
  {
    icon: "/icons/dashboard-edit-icon.svg",
    iconAlt: "Dashboard edit icon",
    title: "They pay from what they hold",
    description:
      "Solana and Stellar assets both work as a source. Splito quotes the conversion, shows the slippage band, and the payer signs once.",
  },
  {
    icon: "/icons/cash-icon.svg",
    iconAlt: "Cash icon",
    title: "Watch it settle",
    description:
      "Open, partially paid, settled, expired, cancelled. Split a request across your group and you see exactly who has paid.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="container mx-auto py-16 md:py-24 lg:py-32 px-4">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-white font-medium font-general-sans text-2xl md:text-3xl lg:text-[44.81px] leading-[1.3] md:leading-[1.74] mb-4 md:mb-6">
          From a link to settled
        </h2>

        <p className="text-slate-50/60 font-inter font-normal text-sm md:text-[15.13px] leading-[1.59] max-w-[500px]">
          Most crypto payment tools make the payer go find the right asset
          first. Splito routes from whatever they already have.
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
