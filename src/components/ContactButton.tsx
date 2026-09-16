"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ContactButton({
  href = "/contact",
  text = "Contact Us",
  variant = "primary", // "primary", "secondary", "tertiary"
  target = "_self",
}) {
  const primaryStyles =
    "bg-[#117C75] text-white hover:bg-black hover:text-white";

  const secondaryStyles =
    "bg-black text-white hover:bg-[#117C75] hover:text-white";

  const tertiaryStyles =
    "bg-white text-black hover:bg-[#117C75] hover:text-white";

  const variantStyle =
    variant === "secondary"
      ? secondaryStyles
      : variant === "tertiary"
        ? tertiaryStyles
        : primaryStyles;

  const iconBubbleStyles =
    variant === "primary"
      ? "bg-white group-hover:bg-[#117C75]"
      : variant === "secondary"
        ? "bg-[#117C75] group-hover:bg-white"
        : "bg-[#117C75] group-hover:bg-black";

  const iconStyles =
    variant === "primary"
      ? "text-black group-hover:text-white"
      : variant === "secondary"
        ? "text-white group-hover:text-black"
        : "text-white group-hover:text-white";

  return (
    <Link
      target={target}
      href={href}
      className={`group inline-flex items-center gap-3 font-medium text-sm md:text-base pl-6 pr-2 py-2 rounded-full transition-colors duration-300 ${variantStyle}`}
    >
      <span>{text}</span>
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${iconBubbleStyles}`}
      >
        <ArrowUpRight size={16} className={`transition-colors duration-300 ${iconStyles}`} />
      </span>
    </Link>
  );
}
