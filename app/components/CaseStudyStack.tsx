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
  // Pair projects into groups of 2
  const pairs: Project[][] = []
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push(projects.slice(i, i + 2))
  }

  return (
    <ContainerScroll className="case-stack-container">
      {pairs.map((pair, index) => (
        <CardSticky
          key={index}
          index={index}
          incrementY={48}
          incrementZ={-5}
          offsetY={230}
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
  )
}
