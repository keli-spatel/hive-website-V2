"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/app/components/ui/carousel";

const clientLogos = [
  "/clients/client-1.png",
  "/clients/client-2.png",
  "/clients/client-3.png",
  "/clients/client-4.png",
  "/clients/client-5.png",
  "/clients/client-6.png",
  "/clients/client-7.png",
  "/clients/client-8.png",
  "/clients/client-9.png",
  "/clients/client-10.png",
  "/clients/client-12.png",
  "/clients/client-13.png",
  "/clients/client-14.png",
  "/clients/client-15.png",
  "/clients/client-16.png",
  "/clients/client-17.png",
  "/clients/client-18.png",
  "/clients/client-19.png",
  "/clients/client-20.png",
  "/clients/client-22.png",
  "/clients/client-23.png",
  "/clients/client-24.png",
  "/clients/companys-1.png",
  "/clients/companys-2.png",
  "/clients/companys-3.png",
  "/clients/companys-4.png",
  "/clients/companys-5.png",
  "/clients/companys-6.png",
];

export function ClientCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((c) => c + 1);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 py-10 sm:px-6">
      <div className="flex flex-col gap-6">
        <Carousel
          setApi={setApi}
          opts={{ loop: false, align: "start" }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {clientLogos.map((logo, index) => (
              <CarouselItem
                key={index}
                className="pl-3 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="flex h-28 w-full items-center justify-center rounded-xl border border-gray-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-200 sm:h-[120px] lg:h-32">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={180}
                    height={90}
                    className="h-auto max-h-20 w-auto max-w-full object-contain transition-transform duration-300 hover:scale-105 lg:max-h-24"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
