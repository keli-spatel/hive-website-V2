"use client";

import { useEffect, useRef, useState } from "react";

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
};

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.02 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const timer = window.setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        window.clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => window.clearInterval(timer);
  }, [duration, end, inView]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

export default function ProjectIoStats({ items }: { items: StatItem[] }) {
  return (
    <div className="pharma-io-grid">
      {items.map((item) => (
        <article className="stat-swiss-card compact pharma-io-stat" key={item.label}>
          <Counter end={item.value} suffix={item.suffix ?? ""} />
          <span>{item.label}</span>
        </article>
      ))}
    </div>
  );
}
