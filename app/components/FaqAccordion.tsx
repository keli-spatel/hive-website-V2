"use client";

import { useState } from "react";

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className = "about-faq-grid" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            className={`about-faq-card${isOpen ? " is-open" : ""}`}
            key={item.q}
          >
            <button
              aria-expanded={isOpen}
              className="about-faq-trigger"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              type="button"
            >
              <span>{item.q}</span>
              <span className="about-faq-trigger-icon" aria-hidden="true" />
            </button>
            {isOpen ? <p>{item.a}</p> : null}
          </article>
        );
      })}
    </div>
  );
}
