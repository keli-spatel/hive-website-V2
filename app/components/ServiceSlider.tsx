"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  ChevronRight,
  Cpu,
  MonitorSmartphone,
  Network,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { AnimatedButton } from "./ui/AnimatedButton"

const serviceIcons = {
  analytics: BarChart3,
  cpu: Cpu,
  monitor: MonitorSmartphone,
  network: Network,
  server: Server,
  workflow: Workflow,
  wrench: Wrench,
} satisfies Record<string, LucideIcon>

const MIN_END_HOLD = 360
const MAX_END_HOLD = 760
const END_HOLD_VIEWPORT_RATIO = 0.7

type Service = {
  slug: string
  title: string
  desc: string
  icon: string
}

export default function ServiceSlider({ services }: { services: Service[] }) {
  const targetRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [endHoldDistance, setEndHoldDistance] = useState(MIN_END_HOLD)

  useEffect(() => {
    const viewport = viewportRef.current
    const track = trackRef.current

    if (!viewport || !track) return

    const updateDistance = () => {
      const viewportWidth = viewport.clientWidth
      const viewportStyles = window.getComputedStyle(viewport)
      const leftInset = Number.parseFloat(viewportStyles.paddingLeft) || 0
      const distance = Math.max(track.scrollWidth - viewportWidth + leftInset, 0)
      const holdDistance = Math.min(
        Math.max(viewportWidth * END_HOLD_VIEWPORT_RATIO, MIN_END_HOLD),
        MAX_END_HOLD
      )

      setScrollDistance(distance)
      setEndHoldDistance(holdDistance)
    }

    updateDistance()

    const resizeObserver = new ResizeObserver(updateDistance)
    resizeObserver.observe(viewport)
    resizeObserver.observe(track)

    window.addEventListener("resize", updateDistance)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateDistance)
    }
  }, [services.length])

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.12,
    stiffness: 90,
    damping: 24,
    restDelta: 0.001
  })

  const scrollRange = scrollDistance + endHoldDistance
  const completeAt = scrollRange > 0 ? scrollDistance / scrollRange : 1
  const x = useTransform(smoothProgress, [0, completeAt, 1], [0, -scrollDistance, -scrollDistance])

  return (
    <section
      ref={targetRef}
      className="relative bg-[#f4f6f9]"
      id="services-preview"
      style={{ height: `calc(100vh + ${scrollRange}px)` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden py-8 md:py-12">
        <div className="flex h-full flex-col justify-center">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mb-8 md:mb-10 shrink-0">
            <div className="section-heading max-w-[900px]" style={{ marginBottom: 0 }}>
              <p className="section-label text-[11px]" style={{ marginBottom: "8px" }}>Our Industrial Automation Services</p>
              <h2 className="text-[28px] leading-[1.2] font-bold text-[#111214]" style={{ marginBottom: "8px" }}>Scalable Custom Engineering Solutions for Siemens PLC, SCADA & DCS</h2>
              <p className="text-[14px] m-0 leading-[1.4] text-[#5f6876]">
                At Hive Automation, we specialize in comprehensive industrial automation services
                from initial system design to full-scale implementation and lifecycle support.
              </p>
            </div>
          </div>

          <div
            ref={viewportRef}
            className="w-full shrink-0 overflow-visible pl-[max(1rem,calc(50vw-600px+2rem))]"
          >
            <motion.div
              ref={trackRef}
              style={{ x }}
              className="flex w-max gap-5 pr-[max(1rem,calc(50vw-600px+2rem))] md:gap-6"
            >
              {services.map((service, i) => {
                const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Cpu

                return (
                  <article
                    key={i}
                    className="relative flex min-h-[300px] w-[min(82vw,360px)] shrink-0 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,52,52,0.1)] md:min-h-[330px] md:w-[400px] md:p-8 group/card"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff3434] to-[#df2424] transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />

                    <div className="w-14 h-14 bg-red-50 text-[#ff3434] rounded-xl flex items-center justify-center mb-6 group-hover/card:scale-110 group-hover/card:bg-[#ff3434] group-hover/card:text-white transition-all duration-500">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-[20px] font-bold mb-4 text-[#111214] leading-snug">{service.title}</h3>
                    <p className="text-[#5f6876] mb-8 line-clamp-4 leading-relaxed text-[15px]">{service.desc}</p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-auto inline-flex items-center gap-2 text-[#ff3434] font-semibold group-hover/card:text-[#df2424] transition-colors"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 group-hover/card:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                )
              })}
            </motion.div>
          </div>

          <div className="mt-8 md:mt-12 text-center shrink-0">
            <AnimatedButton href="/services" variant="primary">
              View All Services
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  )
}
