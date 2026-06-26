import Image from "next/image";
import Link from "next/link";
import { AnimatedButton } from "../ui/AnimatedButton";
import type { Project } from "../../projects/project-data";

export default function GenericProjectPage({ project }: { project: Project }) {
  return (
    <div style={{ marginTop: 82 }}>
      <section
        style={{ background: "linear-gradient(135deg,#1B1B1B,#2a2a2a)", padding: "80px 32px 64px", textAlign: "center" }}
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              gap: 8,
              marginBottom: 16,
              fontSize: 12,
              fontWeight: 600,
              color: "#C5C1B9",
              letterSpacing: 1,
            }}
          >
            <Link href="/" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
              Home
            </Link>
            <span>/</span>
            <Link href="/projects" style={{ color: "#C5C1B9", textDecoration: "none", fontWeight: 400 }}>
              Projects
            </Link>
            <span>/</span>
            <span style={{ color: "#FF3434" }}>{project.tag}</span>
          </div>

          <span
            style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              color: "#FF3434",
              background: "rgba(255, 52, 52,0.08)",
              padding: "6px 16px",
              borderRadius: 9999,
              marginBottom: 16,
            }}
          >
            Case Study: {project.tag}
          </span>

          <h1 style={{ marginBottom: 12 }}>{project.title}</h1>
          <p style={{ color: "#C5C1B9", fontSize: 16, lineHeight: "24px", margin: 0 }}>{project.subtitle}</p>
        </div>
      </section>

      <section className="section">
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <h2 style={{ marginBottom: 20 }}>Project Information</h2>
            <p
              style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 32, whiteSpace: "pre-line" }}
            >
              {project.desc}
            </p>

            <h2 style={{ marginBottom: 20 }}>Technical Architecture</h2>
            <div style={{ background: "#F9F8F6", padding: 24, borderRadius: 8, border: "1px solid #DCDAD5", marginBottom: 32 }}>
              <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", margin: 0, fontWeight: 500 }}>
                {project.architecture}
              </p>
            </div>

            <h2 style={{ marginBottom: 20 }}>Scope of Work</h2>
            <p style={{ fontSize: 15, lineHeight: "26px", color: "#5f5e5dff", marginBottom: 32 }}>{project.scope}</p>

            {project.gallery && project.gallery.length > 0 ? (
              <div style={{ marginTop: 40 }}>
                <h2 style={{ marginBottom: 20 }}>Project Gallery</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {project.gallery.map((imgUrl, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        position: "relative",
                        width: "100%",
                        height: 240,
                        borderRadius: 8,
                        overflow: "hidden",
                        border: "1px solid #DCDAD5",
                      }}
                    >
                      <Image src={imgUrl} alt={`${project.title} - Image ${imgIdx + 1}`} fill style={{ objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div>
            <div className="card" style={{ padding: 24, background: "#F9F8F6", borderColor: "#DCDAD5", marginBottom: 24 }}>
              <h3 style={{ marginBottom: 16 }}>Project Details</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>
                    End User
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.endUser}</div>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#575ECF", textTransform: "uppercase", letterSpacing: 1 }}>
                    Completion Date
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1B1B1B", marginTop: 4 }}>{project.completion}</div>
                </div>
              </div>
            </div>

            <div className="card" style={{ padding: 24, borderColor: "#DCDAD5" }}>
              <h3 style={{ marginBottom: 16 }}>I/O Capacity & Configuration</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {Object.entries(project.specs).map(([key, val]) => (
                  <div
                    key={key}
                    style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #F0EFEF", paddingBottom: 8, fontSize: 13 }}
                  >
                    <span style={{ color: "#C5C1B9", fontWeight: 500 }}>{key}</span>
                    <span style={{ color: "#1B1B1B", fontWeight: 600 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card" style={{ padding: 24, background: "#1B1B1B", color: "#FFFFFF", borderColor: "#2A2A2A", marginTop: 24 }}>
              <h3 style={{ color: "#FFFFFF", marginBottom: 8 }}>Have a similar project?</h3>
              <p style={{ color: "#C5C1B9", fontSize: 13, lineHeight: "20px", marginBottom: 16 }}>
                Let&apos;s build a custom automated solution tailored to your operational specifications.
              </p>
              <AnimatedButton href="/contact" className="w-full">
                Get a Quote
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt" style={{ padding: "48px 32px", textAlign: "center" }}>
        <div className="container">
          <p style={{ margin: 0, color: "#1B1B1B", fontWeight: 500 }}>
            Interested in other case studies? Explore{" "}
            <Link href="/projects" style={{ color: "#575ECF", textDecoration: "underline" }}>
              all our projects
            </Link>
            .
          </p>
        </div>
      </section>

      <style>{`
        @media(max-width: 799px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
