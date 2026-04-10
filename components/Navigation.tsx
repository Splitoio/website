import React from "react";
import Image from "next/image";
import Link from "next/link";
import SplitoLogo from "@/assets/splito-icon.png";
import { Button } from "./Button";
import { getDashboardUrl } from "@/utils";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center justify-center py-8 absolute top-0 left-0 z-50">
      <div className="w-full max-w-[1440px]  flex items-center justify-between px-4 lg:px-40">
        <Link href="/">
          <Image src={SplitoLogo} alt="Splito" width={102} height={33} />
        </Link>

        <div className="flex items-center gap-3">
          <Link href={getDashboardUrl("organization")}>
            <Button size="sm" variant="secondary">
              Explore Teams
            </Button>
          </Link>
          <Link href={getDashboardUrl("")}>
            <Button size="sm" variant="primary">
              Try Splito Free
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
