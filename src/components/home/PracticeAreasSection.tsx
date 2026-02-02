import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const practiceAreas = [
  {
    title: "Workers Compensation",
    description: "Strategic representation for insurers and employers in workers compensation matters across all Australian jurisdictions.",
    href: "/expertise/workers-compensation",
    image: "workers-comp",
  },
  {
    title: "Work Injury Damages & Recoveries",
    description: "Expert guidance on work injury damages claims and recovery actions.",
    href: "/expertise/work-injury-damages",
    image: "work-injury",
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    description: "Experienced handling of complex catastrophic injury and fatal claims with sensitivity and expertise.",
    href: "/expertise/catastrophic-injuries",
    image: "catastrophic",
  },
  {
    title: "Employment Law & WHS",
    description: "Comprehensive employment law and workplace health & safety advisory and litigation services.",
    href: "/expertise/employment-law",
    image: "employment",
  },
  {
    title: "Public Liability",
    description: "Defence of public and occupiers liability claims for insurers and self-insurers.",
    href: "/expertise/public-liability",
    image: "liability",
  },
  {
    title: "Motor Vehicle",
    description: "CTP and motor vehicle claims management and litigation expertise.",
    href: "/expertise/motor-vehicle",
    image: "motor",
  },
];

export function PracticeAreasSection() {
  return (
    <section className="section-padding bg-sand">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm uppercase tracking-widest mb-3">
            Our Expertise
          </p>
          <h2 className="text-foreground mb-4">
            Gair Legal Expertise Includes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Highly specialised legal services across six core practice areas, 
            delivering exceptional outcomes for insurers and employers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <Link
              key={area.title}
              to={area.href}
              className="group bg-card rounded-sm overflow-hidden shadow-soft card-hover"
            >
              {/* Image placeholder with gradient */}
              <div className="h-48 bg-gradient-to-br from-navy to-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-base" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-fast">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
