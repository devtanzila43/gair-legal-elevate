import { CheckCircle, Shield, Award, Users, Scale, Heart } from "lucide-react";

const values = [
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
    title: "Excellence",
    description: "Pursuing superior outcomes through continuous improvement.",
  },
  {
    icon: Users,
    title: "Dedication",
    description: "Unwavering commitment to exceeding client expectations.",
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Our Values
          </p>
          <h2 className="text-foreground mb-4">
            What Drives Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to these core values shapes every client relationship 
            and legal matter we undertake.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const IconComponent = value.icon;
            return (
              <div
                key={value.title}
                className="card-premium p-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
