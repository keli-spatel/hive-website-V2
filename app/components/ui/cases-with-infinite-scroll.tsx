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
  const repeatedLogos = [...clientLogos, ...clientLogos];

  return (
    <div className="client-marquee" aria-label="Our clients">
      <div className="client-marquee-row marquee-left">
        {repeatedLogos.map((logo, index) => {
          const logoIndex = index % clientLogos.length;
          const isDuplicate = index >= clientLogos.length;

          return (
            <div
              key={index}
              className="client-logo"
              aria-hidden={isDuplicate || undefined}
            >
              <Image
                src={logo}
                alt={isDuplicate ? "" : `Client logo ${logoIndex + 1}`}
                width={320}
                height={140}
                quality={100}
                sizes="(max-width: 639px) 176px, 220px"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
