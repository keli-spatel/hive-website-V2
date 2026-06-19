"use client";

import React, { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoCloudProps = {
  logos: string[];
  className?: string;
};

export default function AnimatedLogoCloud({ logos, className, ...props }: LogoCloudProps) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((p) => p + 1);
    }, 3000); // Change all logos every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const startIndex = (currentPage * 8) % logos.length;
  let currentLogos = logos.slice(startIndex, startIndex + 8);
  if (currentLogos.length < 8) {
    currentLogos = [...currentLogos, ...logos.slice(0, 8 - currentLogos.length)];
  }

  const slots = currentLogos.map((src, index) => ({
    id: index,
    src,
    animKey: currentPage,
  }));

  return (
    <div
      className={cn(
        "relative grid grid-cols-2 border-x border-black/5 md:grid-cols-4 bg-white",
        className
      )}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t border-black/5" />

      {/* Card 0 */}
      <LogoCard slot={slots[0]} className="relative border-r border-b border-black/5 bg-zinc-50">
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-black/20" strokeWidth={1.5} />
      </LogoCard>

      {/* Card 1 */}
      <LogoCard slot={slots[1]} className="border-b border-black/5 md:border-r" />

      {/* Card 2 */}
      <LogoCard slot={slots[2]} className="relative border-r border-b border-black/5 md:bg-zinc-50">
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6 text-black/20" strokeWidth={1.5} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block text-black/20" strokeWidth={1.5} />
      </LogoCard>

      {/* Card 3 */}
      <LogoCard slot={slots[3]} className="relative border-b border-black/5 bg-zinc-50 md:bg-white" />

      {/* Card 4 */}
      <LogoCard slot={slots[4]} className="relative border-r border-b border-black/5 bg-zinc-50 md:border-b-0 md:bg-white">
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden text-black/20" strokeWidth={1.5} />
      </LogoCard>

      {/* Card 5 */}
      <LogoCard slot={slots[5]} className="border-b border-black/5 bg-white md:border-r md:border-b-0 md:bg-zinc-50" />

      {/* Card 6 */}
      <LogoCard slot={slots[6]} className="border-r border-black/5" />

      {/* Card 7 */}
      <LogoCard slot={slots[7]} className="bg-zinc-50" />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b border-black/5" />
    </div>
  );
}

type LogoCardProps = {
  slot: { src: string; animKey: number };
  className?: string;
  children?: React.ReactNode;
};

function LogoCard({ slot, className, children, ...props }: LogoCardProps & React.HTMLAttributes<HTMLDivElement>) {
  const [images, setImages] = useState([{ src: slot.src, key: slot.animKey }]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setImages((prev) => {
      if (prev[prev.length - 1].src === slot.src) return prev;
      const next = [...prev, { src: slot.src, key: slot.animKey }];
      if (next.length > 2) return next.slice(next.length - 2);
      return next;
    });
  }, [slot.src, slot.animKey]);

  return (
    <div className={cn("flex h-32 items-center justify-center px-4 py-8 md:p-8", className)} {...props}>
      <div className="relative flex h-full w-full items-center justify-center">
        {images.map((img, i) => {
          const isLast = i === images.length - 1;
          return (
            <Image
              key={img.key}
              alt="Client Logo"
              width={140}
              height={48}
              className={cn(
                "pointer-events-none absolute h-12 w-auto max-w-[140px] select-none object-contain filter grayscale transition-all duration-[2500ms]",
                isLast ? "animate-snake-fade opacity-100" : "opacity-0 blur-sm scale-95"
              )}
              src={img.src}
            />
          );
        })}
      </div>
      {children}
    </div>
  );
}
