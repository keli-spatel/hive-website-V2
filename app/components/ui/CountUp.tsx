"use client";

import { useCountUp } from "@/app/hooks/useCountUp";
import { useInView } from "@/app/hooks/useInView";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number;
  threshold?: number;
};

export function CountUp({
  end,
  suffix = "",
  duration = 2000,
  threshold = 0.08,
}: CountUpProps) {
  const { ref, inView } = useInView<HTMLElement>(threshold);
  const count = useCountUp(end, inView, duration);

  return (
    <strong ref={ref}>
      {count}
      {suffix}
    </strong>
  );
}
