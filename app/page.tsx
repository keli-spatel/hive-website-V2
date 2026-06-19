import Image from "next/image";
import Link from "next/link";
import { FlaskConical, Fuel, Anvil, Coffee, UserCog, Settings, ShieldCheck, Headset, ArrowRight, Phone } from "lucide-react";
import { AnimatedButton } from "./components/ui/AnimatedButton";
import { AnimatedExpertiseItem } from "./components/ui/AnimatedExpertiseItem";
import AnimatedStats from "./components/AnimatedStats";
import AnimatedLogoCloud from "./components/AnimatedLogoCloud";
import ServiceSlider from "./components/ServiceSlider";
import { ContactCard } from "./components/ContactCard";
import CaseStudyStack from "./components/CaseStudyStack";
const scheduleUrl = "https://appt.link/meet-with-bhavik-bhimani-iz1nBIl5/hive-automation";

const industries = [
  { name: "Pharmaceutical", icon: FlaskConical },
  { name: "Oil & Gas", icon: Fuel },
  { name: "Forging", icon: Anvil },
  { name: "Food & Beverages", icon: Coffee },
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

const clientLogos = [
  "/clients/client-1.png",
  "/clients/client-2.png",
  "/clients/client-3.png",
  "/clients/client-4.png",
  "/clients/client-5.png",
  "/clients/client-6.png",
  "/clients/client-7.png",
  "/clients/client-8.png",
  "/clients/client-9.png",
  "/clients/client-10.png",
  "/clients/client-12.png",
  "/clients/client-13.png",
  "/clients/client-14.png",
  "/clients/client-15.png",
  "/clients/client-16.png",
  "/clients/client-17.png",
  "/clients/client-18.png",
  "/clients/client-19.png",
  "/clients/client-20.png",
  "/clients/client-22.png",
  "/clients/client-23.png",
  "/clients/client-24.png",
  "/clients/companys-1.png",
  "/clients/companys-2.png",
  "/clients/companys-3.png",
  "/clients/companys-4.png",
  "/clients/companys-5.png",
  "/clients/companys-6.png",
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero-section" id="hero">
        <Image
          src="/hero-new.jpg"
          alt="Engineer operating Siemens PLC on factory floor"
          fill
          priority
          className="hero-bg"
          sizes="100vw"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <h1>Siemens PLC & Industrial Automation Solutions Expert</h1>
          <p>
            India&apos;s trusted Siemens PLC, SCADA & DCS automation experts delivering
            turnkey industrial solutions for Pharma, Oil & Gas, and more.
          </p>
          <div className="action-row">
            <AnimatedButton href="/projects">
              Learn more
            </AnimatedButton>
          </div>
        </div>
      </section>

      <section className="industry-strip" aria-label="Our Expertise">
        <div className="strip-inner justify-center">
          <div className="expertise-row">
            <AnimatedExpertiseItem
              icon={<UserCog size={24} />}
              text={<>Siemens<br />Experts</>}
            />
            <AnimatedExpertiseItem
              icon={<Settings size={24} />}
              text={<>Precision Industrial<br />Automation</>}
            />
            <AnimatedExpertiseItem
              icon={<ShieldCheck size={24} />}
              text={<>GAMP 5<br />Quality</>}
            />
            <AnimatedExpertiseItem
              icon={<Headset size={24} />}
              text={<>24/7<br />Support</>}
            />
          </div>
        </div>
      </section>

      <section className="section about-section" id="about-preview">
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
              <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                {industries.map((industry) => (
                  <div key={industry.name} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-dashed border-[#ff3b3b] bg-[#ff3b3b]/[0.04] flex items-center justify-center text-[#ff3b3b] shrink-0">
                      <industry.icon size={26} strokeWidth={1.5} />
                    </div>
                    <span className="text-[15px] font-bold text-black">
                      {industry.name}
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

      <section className="section-steel pt-4 pb-[104px] relative z-10 -mt-12 md:-mt-24" id="case-studies-stack">
        <div className="container">
          <div>
            <div
              className="sticky z-20 w-full bg-gradient-to-b from-[#f7f8fb] to-[#f4f6fa] pt-4 pb-2 top-[80px] mb-4 shadow-[0_10px_30px_-10px_rgba(17,18,20,0.05)]"
            >
              <div className="section-heading max-w-[900px]" style={{ marginBottom: 0 }}>
                <p className="section-label text-[11px]" style={{ marginBottom: "8px" }}>Deep Dive into Our Work</p>
                <h2 className="text-[28px] leading-[1.2]" style={{ marginBottom: "8px" }}>Real-World Industrial Automation Success Stories</h2>
                <p className="text-[14px] m-0 leading-[1.4]">
                  Explore detailed case studies from our portfolio each project reflects
                  precision engineering, compliance-first design, and measurable outcomes.
                </p>
              </div>
            </div>
            <CaseStudyStack projects={projects} />
          </div>
          <div className="center-action">
            <AnimatedButton href="/projects">
              View All Projects
            </AnimatedButton>
          </div>
        </div>
      </section>

      <section className="section why-section" id="why-hive">
        <div className="container why-layout">
          <div className="why-copy">
            <p className="section-label">Why Partner with Hive Automation?</p>
            <h2>Expert Siemens Automation Engineering with Real-World Results</h2>
            <p>
              We&apos;re not just system integrators - we&apos;re long-term engineering partners
              committed to your plant&apos;s performance, reliability, and growth. Here&apos;s why top
              players in Oil & Gas, Pharma, and Food Processing trust us with critical automation systems.
            </p>
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
            <div className="action-row mt-7">
              <AnimatedButton href="/about" variant="dark">
                Read More
              </AnimatedButton>
              <AnimatedButton href={scheduleUrl} target="_blank" rel="noopener noreferrer" icon={<Phone />}>
                Let&apos;s Talk
              </AnimatedButton>
            </div>
          </div>
          <div className="why-visual" aria-hidden="true">
            <Image
              src="/why-hive-illustration.svg"
              alt=""
              width={560}
              height={640}
              className="why-illustration"
              unoptimized
            />
          </div>
        </div>
      </section>

      <AnimatedStats />

      <section className="section py-16 md:py-24" id="quote">
        <div className="container">
          <ContactCard
            imageSrc="/contact-agent.jpg"
          >
            <div className="max-w-xl mx-auto w-full">
              <div className="text-[#ff3b3b] font-bold uppercase tracking-wider text-sm mb-2">Get A Quote</div>
              <h2 className="text-3xl font-bold md:text-4xl text-black">Request a Quote</h2>

              <form className="space-y-6 mt-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Your Name <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="text"
                      placeholder="Enter name"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Your Phone <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="tel"
                      placeholder="Enter number"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Your Email <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="email"
                      placeholder="name@gmail.com"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-black">Subject <span className="text-[#ff3b3b]">*</span></label>
                    <input
                      type="text"
                      placeholder="Fill Subject"
                      className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none text-black"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-black">Enter Message</label>
                  <textarea
                    placeholder="Enter your message here..."
                    rows={5}
                    className="w-full bg-[#f8f9fa] border-0 rounded-md px-4 py-3 text-sm focus:ring-1 focus:ring-[#ff3b3b] outline-none resize-none text-black"
                  ></textarea>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button type="submit" className="border border-[#ff3b3b] text-[#ff3b3b] px-8 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#ff3b3b]/5 transition-colors">
                    Submit <span className="text-lg leading-none">&rarr;</span>
                  </button>
                  <button type="button" className="bg-[#ff3b3b] text-white px-8 py-3 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-[#ff3b3b]/90 transition-colors">
                    Request a Call <span className="text-lg leading-none">&rarr;</span>
                  </button>
                </div>
              </form>
            </div>
          </ContactCard>
        </div>
      </section>

      <section className="section clients-section" id="clients">
        <div className="container">
          <div className="section-heading">
            <p className="section-label">Our Client</p>
            <h2>Trusted by Leading Companies & Brands</h2>
          </div>

          <AnimatedLogoCloud
            logos={clientLogos}
            className="mt-12 rounded-xl overflow-hidden shadow-sm"
          />
        </div>
      </section>
    </main>
  );
}
