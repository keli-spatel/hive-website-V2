"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Cpu,
  MonitorSmartphone,
  Network,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react"
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

const AUTOPLAY_DELAY = 3200

type Service = {
  slug: string
  title: string
  desc: string
  icon: string
}

export default function ServiceSlider({ services }: { services: Service[] }) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleScroll = useCallback(() => {
    const container = viewportRef.current
    if (!container) return
    const cards = container.firstElementChild?.children
    if (!cards) return
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 2) {
      setActiveCard(cards.length - 1)
      return
    }
    let closestIndex = 0
    let minDiff = Number.MAX_VALUE
    const containerRect = container.getBoundingClientRect()
    const containerLeft = containerRect.left
    for (let i = 0; i < cards.length; i++) {
      const rect = cards[i].getBoundingClientRect()
      const diff = Math.abs(rect.left - containerLeft)
      if (diff < minDiff) {
        minDiff = diff
        closestIndex = i
      }
    }
    setActiveCard(closestIndex)
  }, [])

  const scrollToCard = useCallback((index: number) => {
    const container = viewportRef.current
    const cards = container?.firstElementChild?.children
    if (container && cards?.length) {
      const targetIndex = Math.max(0, Math.min(index, cards.length - 1))
      const card = cards[targetIndex] as HTMLElement
      const isLastCard = targetIndex === cards.length - 1
      container.scrollTo({
        left: isLastCard
          ? Math.max(container.scrollWidth - container.clientWidth, 0)
          : Math.max(card.offsetLeft - 16, 0),
        behavior: "smooth",
      })
      setActiveCard(targetIndex)
    }
  }, [])

  useEffect(() => {
    if (isPaused || services.length < 2) return

    const timer = window.setInterval(() => {
      scrollToCard(activeCard >= services.length - 1 ? 0 : activeCard + 1)
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(timer)
  }, [activeCard, isPaused, scrollToCard, services.length])

  return (
    <section
      className="relative bg-[#f4f6f9] services-section"
      id="services-preview"
    >
      <div className="w-full">
        <div className="flex flex-col justify-center">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 mb-8 md:mb-12 shrink-0 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="section-heading max-w-[800px] md:text-left" style={{ marginBottom: 0 }}>
              <p className="section-label text-[11px]" style={{ marginBottom: "8px" }}>Our Industrial Automation Services</p>
              <h2 className="text-[28px] leading-[1.2] font-bold text-[#111214]" style={{ marginBottom: "8px" }}>Scalable Custom Engineering Solutions for Siemens PLC, SCADA & DCS</h2>
              <p className="text-[14px] m-0 leading-[1.4] text-[#5f6876]">
                At Hive Automation, we specialize in comprehensive industrial automation services
                from initial system design to full-scale implementation and lifecycle support.
              </p>
            </div>
            
            {/* Desktop Navigation buttons */}
            <div className="hidden md:flex items-center justify-end gap-3 shrink-0 self-center">
              <button
                onClick={() => scrollToCard(activeCard - 1)}
                disabled={activeCard === 0}
                className="w-12 h-12 rounded-full border border-gray-300 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/5 flex items-center justify-center text-gray-700 hover:text-[#ff3b3b] transition-all disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Previous service"
              >
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scrollToCard(activeCard + 1)}
                disabled={activeCard === services.length - 1}
                className="w-12 h-12 rounded-full border border-gray-300 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/5 flex items-center justify-center text-gray-700 hover:text-[#ff3b3b] transition-all disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Next service"
              >
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div
            ref={viewportRef}
            onScroll={handleScroll}
            className="w-full shrink-0 overflow-x-auto scroll-smooth scrollbar-none pl-[max(1rem,calc(50vw-600px+2rem))] services-viewport"
          >
            <div
              ref={trackRef}
              className="flex w-max gap-5 pr-[max(1rem,calc(50vw-600px+2rem))] md:gap-6 services-track"
            >
              {services.map((service) => {
                const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Cpu

                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    aria-label={`Read more about ${service.title}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={() => setIsPaused(false)}
                    className="relative flex min-h-[300px] w-[min(82vw,360px)] shrink-0 flex-col overflow-hidden rounded-lg border border-gray-100 bg-white p-6 text-inherit no-underline shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,52,52,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff3434]/30 md:min-h-[330px] md:w-[400px] md:p-8 group/card services-card snap-start snap-always"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff3434] to-[#df2424] transform origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500" />

                    <div className="w-14 h-14 bg-red-50 text-[#ff3434] rounded-xl flex items-center justify-center mb-6 group-hover/card:scale-110 group-hover/card:bg-[#ff3434] group-hover/card:text-white transition-all duration-500">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-[20px] font-bold mb-4 text-[#111214] leading-snug">{service.title}</h3>
                    <p className="text-[#5f6876] mb-8 line-clamp-4 leading-relaxed text-[15px]">{service.desc}</p>

                    <span
                      className="mt-auto inline-flex w-fit items-center gap-2 text-[#ff3434] font-semibold transition-all duration-200 group-hover/card:gap-3 group-hover/card:text-[#df2424] group-hover/card:underline group-hover/card:underline-offset-4"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile-only pagination indicator & arrows */}
          <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
            <button
              onClick={() => scrollToCard(activeCard - 1)}
              disabled={activeCard === 0}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/5 flex items-center justify-center text-gray-700 hover:text-[#ff3b3b] transition-all disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous service"
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToCard(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeCard === index ? "bg-[#ff3434] w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => scrollToCard(activeCard + 1)}
              disabled={activeCard === services.length - 1}
              className="w-10 h-10 rounded-full border border-gray-300 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/5 flex items-center justify-center text-gray-700 hover:text-[#ff3b3b] transition-all disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next service"
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
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
