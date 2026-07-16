"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type ProjectGalleryImage = {
  src: string;
  alt: string;
};

type ProjectGalleryLightboxProps = {
  images: ProjectGalleryImage[];
  variant: "pharma" | "generic";
};

export default function ProjectGalleryLightbox({
  images,
  variant,
}: ProjectGalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  const closeLightbox = useCallback(function closeLightbox() {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === 0 ? images.length - 1 : current - 1;
    });
  }, [images.length]);

  const showNext = useCallback(function showNext() {
    setActiveIndex((current) => {
      if (current === null) return current;
      return current === images.length - 1 ? 0 : current + 1;
    });
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  if (!images.length) return null;

  return (
    <>
      <div className={variant === "pharma" ? "pharma-gallery-grid" : "project-gallery-grid"}>
        {images.map((image, index) => (
          <button
            aria-label={`Open ${image.alt}`}
            className={variant === "pharma" ? "pharma-gallery-card project-gallery-trigger" : "project-gallery-card project-gallery-trigger"}
            key={`${image.src}-${index}`}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={variant === "pharma" ? "pharma-gallery-image" : "project-gallery-image"}
              sizes={variant === "pharma" ? "(max-width: 1023px) 100vw, 32vw" : "(max-width: 799px) 100vw, 50vw"}
            />
          </button>
        ))}
      </div>

      {activeImage ? (
        <div
          aria-modal="true"
          className="project-lightbox"
          onClick={closeLightbox}
          role="dialog"
        >
          <button
            aria-label="Close image"
            className="project-lightbox-close"
            onClick={closeLightbox}
            type="button"
          >
            <X size={24} />
          </button>

          {images.length > 1 ? (
            <button
              aria-label="Previous image"
              className="project-lightbox-nav project-lightbox-nav-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              type="button"
            >
              <ChevronLeft size={28} />
            </button>
          ) : null}

          <div className="project-lightbox-stage" onClick={(event) => event.stopPropagation()}>
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="project-lightbox-image"
              sizes="100vw"
              priority
            />
            <p>{activeImage.alt}</p>
          </div>

          {images.length > 1 ? (
            <button
              aria-label="Next image"
              className="project-lightbox-nav project-lightbox-nav-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              type="button"
            >
              <ChevronRight size={28} />
            </button>
          ) : null}
        </div>
      ) : null}

      <style jsx global>{`
        .project-gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .project-gallery-card {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          border: 1px solid #dcdad5;
          border-radius: 8px;
          background: #f8fafc;
        }

        .project-gallery-trigger {
          display: block;
          padding: 0;
          cursor: zoom-in;
          text-align: inherit;
        }

        .project-gallery-trigger:focus-visible {
          outline: 3px solid rgba(255, 52, 52, 0.32);
          outline-offset: 3px;
        }

        .project-gallery-image {
          object-fit: cover;
          transition: transform 220ms ease;
        }

        .project-gallery-trigger:hover .project-gallery-image,
        .project-gallery-trigger:hover .pharma-gallery-image {
          transform: scale(1.04);
        }

        .project-lightbox {
          position: fixed;
          inset: 0;
          z-index: 5000;
          display: grid;
          place-items: center;
          padding: 72px 84px 44px;
          background: rgba(8, 10, 14, 0.92);
          backdrop-filter: blur(10px);
        }

        .project-lightbox-stage {
          position: relative;
          width: min(1180px, 100%);
          height: min(760px, calc(100vh - 136px));
        }

        .project-lightbox-image {
          object-fit: contain;
        }

        .project-lightbox-stage p {
          position: absolute;
          right: 0;
          bottom: -34px;
          left: 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.45;
          text-align: center;
        }

        .project-lightbox-close,
        .project-lightbox-nav {
          position: absolute;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0;
          cursor: pointer;
          transition: background 160ms ease, transform 160ms ease;
        }

        .project-lightbox-close:hover,
        .project-lightbox-nav:hover,
        .project-lightbox-close:focus-visible,
        .project-lightbox-nav:focus-visible {
          background: rgba(255, 255, 255, 0.18);
          transform: translateY(-1px);
          outline: none;
        }

        .project-lightbox-close {
          top: 22px;
          right: 24px;
          width: 44px;
          height: 44px;
        }

        .project-lightbox-nav {
          top: 50%;
          width: 52px;
          height: 52px;
          transform: translateY(-50%);
        }

        .project-lightbox-nav:hover,
        .project-lightbox-nav:focus-visible {
          transform: translateY(calc(-50% - 1px));
        }

        .project-lightbox-nav-prev {
          left: 24px;
        }

        .project-lightbox-nav-next {
          right: 24px;
        }

        @media (max-width: 799px) {
          .project-gallery-grid {
            grid-template-columns: 1fr;
          }

          .project-lightbox {
            padding: 64px 16px 52px;
          }

          .project-lightbox-stage {
            height: min(620px, calc(100vh - 144px));
          }

          .project-lightbox-nav {
            top: auto;
            bottom: 12px;
            width: 44px;
            height: 44px;
            transform: none;
          }

          .project-lightbox-nav:hover,
          .project-lightbox-nav:focus-visible {
            transform: translateY(-1px);
          }
        }
      `}</style>
    </>
  );
}
