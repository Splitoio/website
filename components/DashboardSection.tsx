import React from "react";
import Image from "next/image";
import DashboardImage from "@/assets/dashboard-image.png";
import { Button } from "./Button";

import FeatureCard from "./FeatureCard";
import { getDashboardUrl } from "@/utils";
import Link from "next/link";

const features = [
  {
    icon: "/images/flash.svg",
    iconAlt: "Flash icon",
    title: "Multi-Currency Totals",
    description: "Expenses in different currencies? Splito converts and totals them for you",
  },
  {
    icon: "/images/user-switch.svg",
    iconAlt: "User switch icon",
    title: "Smart Reminders",
    description: "Gently nudge friends who owe you, right from the dashboard",
  },
  {
    icon: "/images/dollar-circle.svg",
    iconAlt: "Dollar circle icon",
    title: "Activity Timeline",
    description: "See every expense, settlement, and change as it happens",
  },
];

export default function DashboardSection() {
  return (
    <section className="relative container mx-auto flex flex-col items-center py-16 md:py-24 lg:py-32 px-4">
      {/* Main Container */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 lg:h-[350px]">
          <div className="flex flex-col gap-4 justify-start items-start">
            <h2 className="text-white font-medium text-2xl md:text-3xl lg:text-[44.4375px] leading-tight lg:leading-[1.188]">
              One dashboard. Every balance. Zero guesswork.
            </h2>

            <p className="text-[rgba(248,250,252,0.8)] font-inter font-normal text-sm md:text-base lg:text-[16.875px] leading-[1.6] max-w-full lg:max-w-[625px]">
              See exactly where you stand across all your groups and friends.
              Track expenses, spot outstanding balances, and know who to
              nudge — all from a single screen that updates in real time.
            </p>

            <Link href={getDashboardUrl()}>
              <Button className="mt-4">Try Splito now!</Button>
            </Link>
          </div>

          <div className="hidden lg:flex gap-4 items-end">
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
        </div>

        <div className="relative mt-8 md:mt-12">
          <Image
            src={DashboardImage}
            alt="Dashboard"
            width={1280}
            height={1024}
            className="w-full h-auto"
          />

          <div className="absolute bg-[#1A1A1A] border border-[#333333] rounded-[12px] md:rounded-[16px] p-[3px] md:p-[5px] flex gap-[4px] md:gap-[8px] left-1/2 top-0 -translate-x-1/2 scale-[0.6] md:scale-75 lg:scale-100 origin-top">
            {/* Active Tab - Splits */}
            <button className="h-[32px] md:h-[40px] bg-[#0F0F0F] border border-[rgba(46,46,46,0.8)] rounded-[10px] md:rounded-[12px] flex items-center justify-center px-4 md:px-[46.58px] py-2 md:py-[9.5px]">
              <span className="text-[rgba(248,250,252,0.95)] font-inter font-medium text-xs md:text-[13.453125px] whitespace-nowrap">
                Splits
              </span>
            </button>

            {/* Inactive Tab - Your Activity */}
            <button className="h-[32px] md:h-[40px] rounded-[10px] md:rounded-[12px] flex items-center justify-center px-3 md:px-[17px] py-2 md:py-[9.5px]">
              <span className="text-[rgba(248,250,252,0.8)] font-inter font-medium text-xs md:text-[13.5625px] whitespace-nowrap">
                Your Activity
              </span>
            </button>

            {/* Inactive Tab - Members Overview */}
            <button className="h-[32px] md:h-[40px] rounded-[10px] md:rounded-[12px] flex items-center justify-center px-4 md:px-[28.45px] py-2 md:py-[9.5px]">
              <span className="text-[rgba(248,250,252,0.8)] font-inter font-medium text-xs md:text-[14px] whitespace-nowrap">
                Members Overview
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
