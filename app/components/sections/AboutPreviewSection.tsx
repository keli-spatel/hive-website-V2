import Image from "next/image";
import { Phone } from "lucide-react";

import { SCHEDULE_CALL_URL } from "@/app/data/site";
import { trustTags } from "@/app/data/home";

import { TrustTagGrid } from "../common/TrustTagGrid";
import { AnimatedButton } from "../ui/AnimatedButton";

type AboutPreviewSectionProps = {
  readMoreHref: string;
};

export function AboutPreviewSection({ readMoreHref }: AboutPreviewSectionProps) {
  return (
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
          <TrustTagGrid items={trustTags} />
          <div className="action-row mt-9">
            <AnimatedButton href={readMoreHref}>Read More</AnimatedButton>
            <AnimatedButton
              href={SCHEDULE_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<Phone />}
            >
              Schedule a Call
            </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
