"use client";

import { useEffect, useRef, useState } from "react";

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

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}

export default function AnimatedStats() {
  return (
    <section className="stats-swiss-section" aria-label="Company counters">
      <div className="container">
        <div className="stats-swiss-grid">
          <div className="stat-swiss-card">
            <Counter end={500} suffix="+" />
            <span>Projects Completed</span>
          </div>
          <div className="stat-swiss-card">
            <Counter end={50} suffix="+" />
            <span>Satisfied Clients</span>
          </div>
          <div className="stat-swiss-card">
            <Counter end={15} suffix="+" />
            <span>Expert Engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
