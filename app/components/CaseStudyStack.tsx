"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ContainerScroll, CardSticky } from "./ContainerScroll"

interface Project {
  href: string
  image: string
  metric: string
  industry: string
  title: string
  desc: string
}

interface CaseStudyStackProps {
  projects: Project[]
}

export default function CaseStudyStack({ projects }: CaseStudyStackProps) {
  // Pair projects into groups of 2 for desktop
  const pairs: Project[][] = []
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2))
  }

  const header = (
    <div className="w-full pt-4 pb-2 mb-4">
      <div className="section-heading max-w-[900px]" style={{ marginBottom: 0 }}>
        <p className="section-label text-[11px]" style={{ marginBottom: "8px" }}>Deep Dive into Our Work</p>
        <h2 className="text-[28px] leading-[1.2]" style={{ marginBottom: "8px" }}>Real-World Industrial Automation Success Stories</h2>
        <p className="text-[14px] m-0 leading-[1.4]">
          Explore detailed case studies from our portfolio each project reflects
          precision engineering, compliance-first design, and measurable outcomes.
        </p>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop view (Original, paired layout, completely untouched) */}
      <div className="max-md:hidden">
        <ContainerScroll className="case-stack-container">
          {header}
          {pairs.map((pair, index) => (
            <CardSticky
              key={index}
              index={index}
              incrementY={48}
              incrementZ={-5}
              offsetY={100}
              className="case-stack-card"
            >
              <div className="case-stack-inner">
                {pair.map((project) => (
                  <article className="case-study-half" key={project.title}>
                    <Link href={project.href} className="case-study-image-wrap">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={380}
                        className="case-study-img"
                      />
                      <div className="case-study-overlay" />
                    </Link>
                    <div className="case-study-content">
                      <div className="case-study-tags">
                        <span className="case-tag-metric">{project.metric}</span>
                        <span className="case-tag-industry">{project.industry}</span>
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                      <Link href={project.href} className="case-study-link">
                        View Case Study <span aria-hidden="true">&rarr;</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>

      {/* Mobile view (New one-by-one layout for responsive stacking) */}
      <div className="md:hidden">
        <ContainerScroll className="case-stack-container">
          {header}
          {projects.map((project, index) => (
            <CardSticky
              key={project.title}
              index={index}
              className="case-stack-card"
            >
              <div className="case-stack-inner">
                <Link href={project.href} className="case-study-image-wrap">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={380}
                    className="case-study-img"
                  />
                  <div className="case-study-overlay" />
                </Link>
                <div className="case-study-content">
                  <div className="case-study-tags">
                    <span className="case-tag-metric">{project.metric}</span>
                    <span className="case-tag-industry">{project.industry}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <Link href={project.href} className="case-study-link">
                    View Case Study <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </>
  )
}
