"use client";

import { CountUp } from "./ui/CountUp";

export default function AnimatedStats({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`stats-swiss-section${compact ? " compact" : ""}`} aria-label="Company counters">
      <div className="container">
        <div className={`stats-swiss-grid${compact ? " compact" : ""}`}>
          <div className={`stat-swiss-card${compact ? " compact" : ""}`}>
            <CountUp end={500} suffix="+" threshold={0.02} />
            <span>Projects Completed</span>
          </div>
          <div className={`stat-swiss-card${compact ? " compact" : ""}`}>
            <CountUp end={50} suffix="+" threshold={0.02} />
            <span>Satisfied Clients</span>
          </div>
          <div className={`stat-swiss-card${compact ? " compact" : ""}`}>
            <CountUp end={15} suffix="+" threshold={0.02} />
            <span>Expert Engineers</span>
          </div>
        </div>
      </div>
    </section>
  );
}
