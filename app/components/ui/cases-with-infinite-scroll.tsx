"use client";

import Image from "next/image";

const clientLogos = [
  "/clients/client-1.svg",
  "/clients/client-2.png",
  "/clients/client-3.svg",
  "/clients/client-4.png",
  "/clients/client-5.png",
  "/clients/client-6.svg",
  "/clients/client-7.png",
  "/clients/client-8.png",
  "/clients/client-9.png",
  "/clients/client-10.png",
  "/clients/client-12.svg",
  "/clients/client-13.png",
  "/clients/client-14.png",
  "/clients/client-15.png",
  "/clients/client-16.png",
  "/clients/client-17.svg",
  "/clients/client-18.png",
  "/clients/client-19.png",
  "/clients/client-20.png",
  "/clients/client-22.webp",
  "/clients/client-23.png",
  "/clients/client-24.png",
  "/clients/companys-1.png",
  "/clients/companys-2.svg",
  "/clients/companys-3.svg",
  "/clients/companys-4.png",
  "/clients/companys-5.png",
  "/clients/companys-6.png",
];

export function ClientCarousel() {
  return (
    <div className="mx-auto w-full max-w-[1380px] px-1 py-6 sm:px-0">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(168px,1fr))] gap-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] lg:gap-3">
        {clientLogos.map((logo, index) => (
          <div
            key={index}
            className="group flex min-h-[108px] w-full items-center justify-center rounded-xl bg-white px-2 py-2 transition-shadow duration-200 hover:shadow-[0_10px_24px_rgba(17,18,20,0.08)] sm:min-h-[114px] lg:min-h-[118px]"
          >
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              width={320}
              height={140}
              quality={100}
              sizes="(max-width: 639px) 140px, (max-width: 1023px) 160px, 180px"
              className="h-auto w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
              style={{
                width: "min(76%, 220px)",
                maxHeight: "clamp(64px, 5.2vw, 84px)",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
