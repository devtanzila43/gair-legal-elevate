import { Shield, Award, Users, Scale, Briefcase, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality",
    description: "Uncompromising standards in legal representation and client outcomes.",
  },
  {
    icon: Scale,
    title: "Integrity",
    description: "Ethical practice and transparent communication at every step.",
  },
  {
    icon: Heart,
    title: "Loyalty",
    description: "Dedicated partnership with our clients through every challenge.",
  },
  {
    icon: Award,
    title: "Accountability",
    description: "Taking ownership and delivering on our commitments.",
  },
  {
    icon: Users,
    title: "Dedication",
    description: "Unwavering commitment to exceeding client expectations.",
  },
  {
    icon: Briefcase,
    title: "Innovation",
    description: "Embracing modern solutions for superior legal outcomes.",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-navy section-padding">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm uppercase tracking-widest mb-3">
            Our Foundation
          </p>
          <h2 className="text-primary-foreground mb-4">
            Gair Legal's Superior Reputation Is Built On
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Core values of quality, integrity, loyalty, accountability, and 
            dedication to a superior legal service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group p-6 md:p-8 rounded-sm border border-primary-foreground/10 
                         bg-primary-foreground/5 hover:bg-primary-foreground/10 
                         transition-all duration-base stagger-${index + 1}`}
            >
              <value.icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 transition-transform duration-base" />
              <h3 className="text-primary-foreground text-lg font-semibold mb-2">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
