import { Building2, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Building2, value: "4", label: "National Offices" },
  { icon: Users, value: "50+", label: "Legal Professionals" },
  { icon: Award, value: "13+", label: "Years of Excellence" },
  { icon: TrendingUp, value: "1000s", label: "Matters Resolved" },
];

const clientTypes = [
  "Insurers",
  "Employers", 
  "Scheme Agents",
  "Self-Insurers",
  "Corporations",
];

export function CredibilitySection() {
  return (
    <section className="section-padding bg-navy text-primary-foreground">
      <div className="container-wide">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <IconComponent className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold font-serif mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gold/20 mb-16" />

        {/* Client Types */}
        <div className="text-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-6 font-medium">
            Who We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {clientTypes.map((client) => (
              <span
                key={client}
                className="px-6 py-3 border border-primary-foreground/20 rounded-sm text-primary-foreground/80 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
