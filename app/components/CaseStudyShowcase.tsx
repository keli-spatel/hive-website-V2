"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { AnimatedButton } from "./ui/AnimatedButton"

type Project = {
  href: string
  image: string
  metric: string
  industry: string
  title: string
  desc: string
}

export default function CaseStudyShowcase({ projects }: { projects: Project[] }) {
  return (
    <section className="case-showcase-section" id="case-studies-showcase">
      <div className="container case-showcase-container">
        <div className="section-heading case-showcase-header">
          <p className="section-label case-showcase-label">Our Proven Track Record</p>
          <h2>Industrial Automation Case Studies: Solving Complex Challenges</h2>
        </div>

        <div className="case-showcase-grid">
          {projects.map((project) => (
            <Link
              href={project.href}
              className="case-showcase-card"
              key={project.href}
            >
              <div className="case-showcase-media">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="case-showcase-image"
                />
                <span className="case-showcase-metric">{project.metric}</span>
              </div>

              <div className="case-showcase-content">
                <p className="case-showcase-industry" style={{ fontSize: '12px' }}>
                  {project.industry}
                </p>
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

        <div className="mt-10 flex justify-center">
          <AnimatedButton href="/our-project">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  )
}
