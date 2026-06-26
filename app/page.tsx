import Image from "next/image";
import { FlaskConical, Fuel, Anvil, Coffee, UserCog, Settings, ShieldCheck, Headset, Phone } from "lucide-react";
import { AnimatedButton } from "./components/ui/AnimatedButton";
import { AnimatedExpertiseItem } from "./components/ui/AnimatedExpertiseItem";
import AnimatedStats from "./components/AnimatedStats";
import ServiceSlider from "./components/ServiceSlider";
import { ContactCard } from "./components/ContactCard";
import CaseStudyShowcase from "./components/CaseStudyShowcase";
import { ClientCarousel } from "./components/ui/cases-with-infinite-scroll";
const scheduleUrl = "https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation";

const industries = [
  { name: "Pharmaceutical", icon: FlaskConical },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Forging", icon: Anvil },
  { name: "Food & Beverages", icon: Coffee },
];

const trustTags = [
  { name: "Siemens Experts", icon: UserCog },
  { name: "Industrial Automation", icon: Settings },
  { name: "GAMP 5 Quality", icon: ShieldCheck },
  { name: "24/7 Support", icon: Headset },
];

const services = [
  {
    slug: "plc-programming-integration",
    title: "PLC Programming & Integration",
    desc: "We develop custom PLC programs tailored to your specific process and production goals. Whether you are upgrading an existing system or building from scratch, our PLC logic design ensures industrial safety, flexibility, and high-performance system integration.",
    icon: "cpu",
  },
  {
    slug: "distributed-control-systems",
    title: "Distributed Control Systems (DCS)",
    desc: "We engineer and implement robust Siemens PCS 7 and other DCS solutions that provide scalable, integrated control of complex industrial processes. From batch to continuous processing, our DCS services ensure accuracy, safety, and maximum uptime.",
    icon: "server",
  },
  {
    slug: "scada-hmi-development",
    title: "SCADA & HMI Development",
    desc: "We create intuitive SCADA and HMI interfaces that allow operators and engineers to monitor and control industrial processes in real time. Our SCADA systems are designed for usability, data clarity, and enhanced operational safety.",
    icon: "monitor",
  },
  {
    slug: "turnkey-project-execution",
    title: "Turnkey Project Execution",
    desc: "We provide complete automation solutions under one roof. Our engineers collaborate from early system design to final handover, ensuring consistency, reliability, and full accountability for your turnkey industrial projects.",
    icon: "workflow",
  },
  {
    slug: "system-upgrade-retrofits",
    title: "System Upgrades & Retrofits",
    desc: "We upgrade aging control systems and legacy hardware to modern, supported platforms like Siemens S7-1500 and TIA Portal. Our PLC retrofit strategies ensure minimal downtime and future-ready industrial performance.",
    icon: "wrench",
  },
  {
    slug: "industrial-networking-cybersecurity",
    title: "Industrial Networking & Cybersecurity",
    desc: "We design industrial networks that are resilient, segmented, and secure. From control to enterprise level, our networks are built for performance and uptime.",
    icon: "network",
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    desc: "We integrate industrial reporting tools and dashboards into your control system, giving your team real-time access to KPIs, historical trends, and compliance logs. Our analytics improve decision-making and operational transparency.",
    icon: "analytics",
  },
];

const projects = [
  {
    href: "/projects/pharmaceutical",
    image: "/projects/thumbnail-pharma.png",
    metric: "100% FDA Compliant",
    industry: "Pharmaceutical",
    title: "GAMP 5 Compliant Automation for Pharmaceutical Material Handling",
    desc: "Achieved full FDA compliance with automated batch tracking & reporting.",
  },
  {
    href: "/projects/chemical",
    image: "/projects/thumbnail-chemical.png",
    metric: "Zero Safety Incidents",
    industry: "Chemical",
    title: "Plant-Wide Process Control & Safety Systems for Chemical Facilities",
    desc: "Integrated SIS & DCS for zero safety incidents over 3 years.",
  },
  {
    href: "/projects/refinery",
    image: "/projects/thumbnail-rotary.png",
    metric: "25% Efficiency Increase",
    industry: "Refinery",
    title: "Precision Rotary Equipment Control & Monitoring for Refineries",
    desc: "Achieved 25% efficiency increase with predictive maintenance integration.",
  },
  {
    href: "/projects/oil-gas",
    image: "/projects/thumbnail-oil-gas.png",
    metric: "20% Less Downtime",
    industry: "Oil & Gas",
    title: "Siemens PCS 7 DCS Implementation for Oil & Gas Refinery",
    desc: "Reduced downtime by 20% through legacy S5 to S7-1500 migration.",
  },
  {
    href: "/projects/hydrogenation-plant",
    image: "/projects/thumbnail-hydrogenation.png",
    metric: "99.5% Uptime",
    industry: "Refinery",
    title: "Hydrogenation Plant Control & Safety Integration",
    desc: "Delivered 99.5% uptime with advanced process safety management systems.",
  },
  {
    href: "/projects/ethyl-acetate",
    image: "/projects/thumbnail-ethyl.png",
    metric: "30% Cost Reduction",
    industry: "Plant Control",
    title: "Ethyl-Acetate Plant Automation & Optimization",
    desc: "Reduced operational costs by 30% through full process automation.",
  },
  {
    href: "/projects/asphalt-batching",
    image: "/projects/thumbnail-asphalt.png",
    metric: "260 TPH Capacity",
    industry: "R&B",
    title: "Asphalt Batching Plant Automation System - 260 TPH",
    desc: "Full automation of 260 TPH batching plant with real-time quality control.",
  },
  {
    href: "/projects/retrofit-upgrade",
    image: "/projects/thumbnail-retrofit.png",
    metric: "Future-Proof System",
    industry: "Industrial",
    title: "Retrofit & Upgrade Solutions for Legacy Industrial Systems",
    desc: "Modernised legacy PLCs to Industry 4.0 standards with zero production loss.",
  },
];

const whyHive = [
  {
    icon: "M12 3 5 6v5c0 4.5 3 8.3 7 10 4-1.7 7-5.5 7-10V6l-7-3Z",
    title: "Certified Siemens Technology Experts",
    desc: "We specialize in PLCs, SCADA, and DCS systems. Our certified engineers bring deep, platform-specific expertise that ensures optimal configuration, coding standards, and lifecycle support.",
  },
  {
    icon: "M4 7l8-4 8 4-8 4-8-4Zm0 5l8 4 8-4M4 17l8 4 8-4",
    title: "Industry-Specific Compliance Approach",
    desc: "From GMP validation in Pharma to HAZOP compliance in Oil & Gas, we design automation systems that are built with your environment in mind.",
  },
  {
    icon: "M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-3 3-3-3 3-3Z",
    title: "Custom Engineered Solutions",
    desc: "No off-the-shelf templates. We analyze your process, operations, and future needs, then craft a tailored solution that integrates with your workflows, goals, and infrastructure.",
  },
  {
    icon: "M9 4h6l1 2h3v15H5V6h3l1-2Zm0 7h6M9 15h6",
    title: "End-to-End Turnkey Project Ownership",
    desc: "We manage functional specs, programming, simulation, FAT/SAT testing, commissioning, handover, training, and documentation under one accountable team.",
  },
  {
    icon: "M20 6 9 17l-5-5",
    title: "Quality & Industrial Safety First",
    desc: "We follow international engineering standards, maintain clean documentation, and conduct thorough testing so your system is robust, traceable, and audit-ready.",
  },
  {
    icon: "M4 13a8 8 0 0 1 16 0v4a3 3 0 0 1-3 3h-2v-7h5M4 17v-4h5v7H7a3 3 0 0 1-3-3Z",
    title: "Proactive 24/7 Technical Support",
    desc: "Remote support, preventive maintenance, diagnostics, and upgrades keep your systems efficient, secure, and future-proof after commissioning.",
  },
  {
    icon: "M12 3l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.4 6.7 19l1-5.8-4.2-4.1 5.9-.9L12 3Z",
    title: "Proven Track Record with Industry Leaders",
    desc: "From oil terminals to pharmaceutical cleanrooms, we have delivered automation systems for clients who demand nothing less than excellence.",
  },
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero-section" id="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="hero-layout">
            <div className="hero-copy">
              <h1>
                Siemens PLC & Industrial <br></br>
                <span className="hero-highlight">Automation</span>
                Solutions Expert
              </h1>
              <p>
                India&apos;s trusted Siemens PLC, SCADA & DCS automation experts delivering
                turnkey industrial solutions for Pharma, Oil & Gas, and more.
              </p>
              <div className="action-row hero-actions">
                <AnimatedButton href="/our-project">
                  View Our Projects
                </AnimatedButton>
                <AnimatedButton
                  href={scheduleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<Phone />}
                  className="hero-consultation-button"
                >
                  Schedule a Call
                </AnimatedButton>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-visual-frame">
                <Image
                  src="/hero-advanced-factory-automation.jpg"
                  alt="Advanced factory automation robotic arm operating on a modern industrial production line"
                  fill
                  priority
                  className="hero-visual-image"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-strip" aria-label="Our Expertise">
        <div className="strip-inner justify-center">
          <div className="expertise-row">
            {industries.map((industry) => (
              <AnimatedExpertiseItem
                key={industry.name}
                icon={<industry.icon size={24} />}
                text={industry.name}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about-preview" style={{ marginTop: "30px" }}>
        <div className="container split-grid">
          <div className="media-frame">
            <Image
              src="/about-new.jpg"
              alt="Engineer programming Siemens PLC"
              width={720}
              height={520}
              className="section-image"
            />
            <div className="experience-chip">
              <strong>2017</strong>
              <span>Established after deep automation experience</span>
            </div>
          </div>
          <div>
            <p className="section-label">About Us</p>
            <h2>India&apos;s Trusted Siemens Industrial Automation Experts</h2>
            <p>
              Hive Automation is a trusted industrial automation company specializing in Siemens PLC
              programming, SCADA system integration, and process control solutions. Our mission is
              to empower manufacturing with smart automation systems that optimize operations,
              enhance efficiency, and minimize industrial downtime across India.
            </p>
            <p>
              We provide expert services for Siemens PLCs, SCADA, and DCS platforms, having
              successfully delivered turnkey automation projects for diverse industries. Our
              commitment to industrial compliance, innovation, and safety ensures high-performance
              results in a rapidly evolving industrial automation landscape.
            </p>
            <div className="mt-9">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {trustTags.map((tag) => (
                  <div
                    key={tag.name}
                    className="flex min-h-[68px] items-center gap-3 rounded-[14px] border border-[#dfe3ea] bg-[#f8fafc] px-3 py-1 text-left shadow-[0_8px_20px_rgba(17,18,20,0.04)]"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#ff3b3b]/30 bg-white text-[#ff3b3b]">
                      <tag.icon size={15} strokeWidth={1.9} />
                    </div>
                    <span className="text-[13px] font-semibold leading-[1.35] text-[#111214]">
                      {tag.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="action-row mt-9">
              <AnimatedButton href="/about">
                Read More
              </AnimatedButton>
              <AnimatedButton href={scheduleUrl} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<Phone />}>
                Schedule a Call
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <ServiceSlider services={services} />

      <CaseStudyShowcase projects={projects} />

      <section className="section why-section why-section-dark" id="why-hive">
        <div className="container why-layout">
          <div className="why-intro">
            <p className="section-label">Why Partner with Hive Automation?</p>
            <h2>Expert Siemens Automation Engineering with Real-World Results</h2>
            <p>
              We&apos;re not just system integrators - we&apos;re long-term engineering partners
              committed to your plant&apos;s performance, reliability, and growth. Here&apos;s why top
              players in Oil & Gas, Pharma, and Food Processing trust us with critical automation systems.
            </p>
            <div className="why-visual">
              <Image
                src="/contact-agent.jpg"
                alt="Hive Automation engineer consultation specialist"
                width={560}
                height={640}
                className="why-illustration"
              />
            </div>
          </div>
          <div className="why-copy">
            <div className="reason-list">
              {whyHive.map((item) => (
                <article className="reason-item" key={item.title} tabIndex={0}>
                  <span className="reason-corner reason-corner-top" aria-hidden="true" />
                  <span className="reason-corner reason-corner-bottom" aria-hidden="true" />
                  <div className="reason-title-row">
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="action-row why-actions">
              <AnimatedButton href={scheduleUrl} target="_blank" rel="noopener noreferrer" icon={<Phone />}>
                Let&apos;s Talk
              </AnimatedButton>
              <AnimatedButton href="/about" variant="secondary" className="why-read-more-btn">
                Read More
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Client Carousel */}
      <section className="section clients-carousel-section" id="clients-carousel">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Clients</p>
            <h2>Trusted by Leading Companies &amp; Brands</h2>
          </div>
          <AnimatedStats compact />
          <ClientCarousel />
        </div>
      </section>

      <section className="section quote-section" id="quote">
        <div className="container">
          <ContactCard
            imageSrc="/quote-agent.webp"
          >
            <div className="max-w-xl mx-auto w-full">
              <div className="quote-eyebrow">Get A Quote</div>
              <h2 className="quote-title">Request a Quote</h2>

              <form className="space-y-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="form-field-label">Your Name <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="form-field-label">Your Phone <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="tel"
                      placeholder="Enter number"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="form-field-label">Your Email <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="form-field-label">Subject <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="text"
                      placeholder="Fill Subject"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="form-field-label">Enter Message</label>
                  <textarea
                    placeholder="Enter your message here..."
                    rows={5}
                    className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none resize-none text-black"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <AnimatedButton type="submit" variant="secondary">
                    Submit
                  </AnimatedButton>
                  <AnimatedButton type="button" href={scheduleUrl} target="_blank" rel="noopener noreferrer">
                    Request a Call
                  </AnimatedButton>
                </div>
              </form>
            </div>
          </ContactCard>
        </div>
      </section>
    </main>
  );
}
