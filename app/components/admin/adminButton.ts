import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const adminButtonStyles = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border text-sm font-medium leading-none no-underline transition-colors outline-none focus-visible:border-[#00B0FF] focus-visible:ring-2 focus-visible:ring-[#00B0FF]/25 disabled:cursor-not-allowed disabled:opacity-60 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary: "h-11 rounded-full border-black bg-black px-5 text-white hover:border-[#111111] hover:bg-[#111111]",
        secondary: "h-11 rounded-full border-[#E2E9F3] bg-white px-5 text-black hover:bg-[#F8FAFC]",
        icon: "h-9 w-9 rounded-none border-[#E2E9F3] bg-white text-black hover:bg-[#F8FAFC]",
        nav: "justify-start rounded-none border-[#E2E9F3] bg-white px-3 py-3 text-black hover:bg-[#F8FAFC]",
        text: "h-11 rounded-full border-transparent bg-transparent px-2 text-black hover:text-[#686562]",
      },
      width: {
        auto: "",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "secondary",
      width: "auto",
    },
  },
);

export type AdminButtonVariants = VariantProps<typeof adminButtonStyles>;

export function adminButtonClassName(
  options?: AdminButtonVariants,
  className?: string,
) {
  return cn(adminButtonStyles(options), className);
}
