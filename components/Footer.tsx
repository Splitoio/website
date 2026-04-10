import Image from "next/image";
import SplitoIcon from "@/assets/splito-icon.png";

function XIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#1F1F1F] px-4 md:px-8 lg:px-[144px] pt-14 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <Image src={SplitoIcon} alt="Splito" width={96} height={31} />
          <p className="text-[rgba(248,250,252,0.5)] text-sm font-inter max-w-[260px] leading-relaxed">
            Making{" "}Crypto feel like{" "} Money.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-[rgba(248,250,252,0.3)] text-xs font-inter">
            © {new Date().getFullYear()} Splito. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-[rgba(248,250,252,0.3)] hover:text-[rgba(248,250,252,0.7)] text-xs font-inter transition-colors">
              Privacy Policy
            </a>
            <span className="text-[rgba(248,250,252,0.15)] text-xs">·</span>
            <a href="/terms" className="text-[rgba(248,250,252,0.3)] hover:text-[rgba(248,250,252,0.7)] text-xs font-inter transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Social */}
        <a
          href="https://x.com/splitodotio"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-[#292929] bg-[#09090B] hover:border-[#09D1FD]/40 hover:bg-[#09D1FD]/5 transition-all duration-200"
          aria-label="Splito on X"
        >
          <span className="text-[rgba(248,250,252,0.6)] group-hover:text-white transition-colors">
            <XIcon />
          </span>
          <span className="text-[rgba(248,250,252,0.6)] group-hover:text-white text-sm font-inter transition-colors">
            Follow us on X
          </span>
        </a>
      </div>
    </footer>
  );
}
