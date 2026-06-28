import AnimatedStats from "../AnimatedStats";
import { ClientCarousel } from "../ui/cases-with-infinite-scroll";

type ClientsSectionProps = {
  id: string;
};

export function ClientsSection({ id }: ClientsSectionProps) {
  return (
    <section className="section clients-carousel-section" id={id}>
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Our Clients</p>
          <h2>Trusted by Leading Companies &amp; Brands</h2>
        </div>
        <AnimatedStats compact />
        <ClientCarousel />
      </div>
    </section>
  );
}
