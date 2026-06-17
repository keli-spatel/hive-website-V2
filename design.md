# Hive Automation Website Design

## Source Content

The new website content follows the old Hive Automation homepage at `https://hiveautomation.in`.

Required homepage sections:

1. Navigation: Home, About Us, Services, Projects, Career, Contact, Schedule a Call
2. Hero: Siemens PLC & Industrial Automation Solutions Expert
3. Industries strip: Pharmaceutical, Oil & Gas, Forging, Food & Beverages
4. About Us
5. Industrial Automation Services
6. Industrial Automation Case Studies
7. Why Partner with Hive Automation?
8. Company counters
9. Request a Quote form
10. Come Join Us / career form
11. Client logos
12. Footer with company, industry, services, and contact details

## Design Direction

The site should feel like a modern industrial engineering company: precise, reliable, technical, and premium. The design must keep the old content and section order, but remove the dated template feeling.

Visual principles:

- Strong image-led hero using industrial control room imagery.
- True white content areas with crisp black typography.
- Rich black technical sections for authority and contrast.
- Red brand accent for CTAs, metadata, key counters, and section emphasis.
- Thin steel-gray borders, 8px radii, and restrained shadows.
- Cards only for repeated services, project case studies, reasons, forms, and logos.
- No decorative blobs, generic gradient-orb backgrounds, or over-rounded SaaS styling.
- Copy stays specific to Siemens PLC, SCADA, DCS, process control, and industrial automation.

## Design Tokens

- Primary red: `#ff3434`
- Primary red hover: `#df2424`
- Rich black: `#111214`
- Body ink: `#1b1d21`
- Muted text: `#656b76`
- Line: `#dfe3ea`
- Soft steel background: `#f4f6f9`
- White: `#ffffff`
- Accent blue fallback: `#575ecf`
- Radius: `8px`
- Container width: `1200px`
- Font: Inter with system fallbacks

## Typography

- Hero heading: large, bold, compact line-height, no eyebrow label.
- Section headings: bold, direct, sized for scanning.
- Body copy: 16-17px with comfortable line-height.
- Labels: uppercase red section labels for downstream sections only.
- Buttons and form labels: deliberate 13-14px weights, never browser-default.

## Homepage Section Notes

Hero:

- Full-bleed industrial image.
- Left-aligned headline and supporting text.
- CTAs: View Our Projects, Schedule a Consultation.
- Dark overlay is allowed only to preserve text contrast.

About:

- Image/text split.
- Keep old copy about Siemens PLC programming, SCADA system integration, process control solutions, manufacturing optimization, compliance, innovation, and safety.
- Include old trust tags: Siemens Experts, Precision Industrial Automation, GAMP 5 Quality, 24/7 Support.

Services:

- Seven services from old site.
- Use numbered engineering cards, not icon-heavy generic tiles.
- Each card links to the matching service detail route.

Projects:

- Eight old-site case studies with metrics, industries, titles, descriptions, images, and case-study links.
- Use image-led project cards.

Why Hive:

- Dark technical section.
- Seven reasons from old site.
- Keep turnkey lifecycle list content inside the turnkey ownership reason.

Forms:

- Quote form fields: Your Name, Your Phone, Your Email, Subject, Enter Message, Submit, Request a Call.
- Career form fields: Your Name, Your Phone, Your Email, Subject, Upload Your File, Submit.

Clients:

- Display all available client logos from `/public/clients`.
- Keep the section simple and credible.

Footer:

- Preserve old contact details:
  - `+91 99786 03840`
  - `+91 99786 03841`
  - `+91 99786 03842`
  - `+91 99786 03843`
  - `info@hiveautomation.in`
  - `33, B N Industrial Estate, Near Kathwada GIDC Gate No 5, S P Ring Road, Near Nikol, Odhav, Ahmedabad - 382415`

## Implementation Notes

- Use Next.js App Router files under `app/`.
- Use local assets from `public/` with `next/image`.
- Keep shared CSS in `app/globals.css`.
- Preserve existing route structure and detail pages.
- Avoid new dependencies unless a specific interaction requires them.
