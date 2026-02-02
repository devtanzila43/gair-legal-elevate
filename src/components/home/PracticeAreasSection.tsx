import { Link } from "react-router-dom";
import { ArrowRight, Scale, Shield, Users, Briefcase, Car, Building } from "lucide-react";

const practiceAreas = [
  {
    title: "Workers Compensation",
    description: "Strategic representation for insurers and employers in workers compensation matters across all Australian jurisdictions.",
    href: "/expertise/workers-compensation",
    icon: Shield,
  },
  {
    title: "Work Injury Damages & Recoveries",
    description: "Expert guidance on work injury damages claims and recovery actions.",
    href: "/expertise/work-injury-damages",
    icon: Scale,
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    description: "Experienced handling of complex catastrophic injury and fatal claims with sensitivity and expertise.",
    href: "/expertise/catastrophic-injuries",
    icon: Users,
  },
  {
    title: "Employment Law & WHS",
    description: "Comprehensive employment law and workplace health & safety advisory and litigation services.",
    href: "/expertise/employment-law",
    icon: Briefcase,
  },
  {
    title: "Public Liability",
    description: "Defence of public and occupiers liability claims for insurers and self-insurers.",
    href: "/expertise/public-liability",
    icon: Building,
  },
  {
    title: "Motor Vehicle",
    description: "CTP and motor vehicle claims management and litigation expertise.",
    href: "/expertise/motor-vehicle",
    icon: Car,
  },
];

export function PracticeAreasSection() {
  return (
    <section className="section-padding bg-light">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
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
          {practiceAreas.map((area) => {
            const IconComponent = area.icon;
            return (
              <Link
                key={area.title}
                to={area.href}
                className="group card-premium p-6"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-sm bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-200">
                  <IconComponent className="w-6 h-6 text-gold" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors duration-200 font-serif">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {area.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                  Learn more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
