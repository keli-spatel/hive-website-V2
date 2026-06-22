"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const AUTOPLAY_DELAY = 3600

type Project = {
  href: string
  image: string
  metric: string
  industry: string
  title: string
  desc: string
}

export default function CaseStudyShowcase({ projects }: { projects: Project[] }) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeCard, setActiveCard] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll<HTMLElement>(".case-showcase-card")
    if (!cards.length) return

    const targetIndex = Math.max(0, Math.min(index, cards.length - 1))
    const card = cards[targetIndex]
    const isLastCard = targetIndex === cards.length - 1

    track.scrollTo({
      left: isLastCard
        ? Math.max(track.scrollWidth - track.clientWidth, 0)
        : card.offsetLeft - track.offsetLeft,
      behavior: "smooth",
    })

    setActiveCard(targetIndex)
  }, [])

  const scrollCards = (direction: "prev" | "next") => {
    scrollToCard(direction === "next" ? activeCard + 1 : activeCard - 1)
  }

  const handleScroll = useCallback(() => {
    const track = trackRef.current
    if (!track) return

    const cards = track.querySelectorAll<HTMLElement>(".case-showcase-card")
    if (!cards.length) return

    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 2) {
      setActiveCard(cards.length - 1)
      return
    }

    let closestIndex = 0
    let minDiff = Number.MAX_VALUE

    cards.forEach((card, index) => {
      const diff = Math.abs(card.offsetLeft - track.offsetLeft - track.scrollLeft)
      if (diff < minDiff) {
        minDiff = diff
        closestIndex = index
      }
    })

    setActiveCard(closestIndex)
  }, [])

  useEffect(() => {
    if (isPaused || projects.length < 2) return

    const timer = window.setInterval(() => {
      scrollToCard(activeCard >= projects.length - 1 ? 0 : activeCard + 1)
    }, AUTOPLAY_DELAY)

    return () => window.clearInterval(timer)
  }, [activeCard, isPaused, projects.length, scrollToCard])

  return (
    <section className="case-showcase-section" id="case-studies-showcase">
      <div className="container case-showcase-container">
        <div className="case-showcase-header">
          <div>
            <p className="section-label case-showcase-label">Compare Section</p>
            <h2>Industrial Automation Case Studies: Solving Complex Challenges</h2>
            <span aria-hidden="true" className="case-showcase-accent" />
          </div>

          <div className="case-showcase-controls" aria-label="Case study carousel controls">
            <button type="button" onClick={() => scrollCards("prev")} aria-label="Previous case studies">
              <ChevronLeft size={19} strokeWidth={1.8} />
            </button>
            <button type="button" onClick={() => scrollCards("next")} aria-label="Next case studies">
              <ChevronRight size={19} strokeWidth={1.8} />
            </button>
          </div>
        </div>

        <div ref={trackRef} className="case-showcase-track" onScroll={handleScroll}>
          {projects.map((project) => (
            <Link
              href={project.href}
              className="case-showcase-card"
              key={project.href}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocus={() => setIsPaused(true)}
              onBlur={() => setIsPaused(false)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 82vw, (max-width: 1200px) 40vw, 390px"
                className="case-showcase-image"
              />
              <span className="case-showcase-scrim" aria-hidden="true" />

              <div className="case-showcase-badges">
                <span>{project.metric}</span>
                <span>{project.industry}</span>
              </div>

              <div className="case-showcase-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <span className="case-showcase-link">
                  View Case Study
                  <ArrowRight size={15} strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
