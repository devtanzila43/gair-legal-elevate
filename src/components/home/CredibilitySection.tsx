import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "2011", label: "Established" },
  { icon: Building2, value: "4", label: "National Offices" },
  { icon: Users, value: "50+", label: "Legal Professionals" },
  { icon: Award, value: "1000+", label: "Cases Resolved" },
];

export function CredibilitySection() {
  return (
    <section className="section-padding-sm bg-sky">
      <div className="container-wide">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Who We Serve */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Trusted by Australia's Leading Organisations
          </h3>
          <p className="text-muted-foreground mb-8">
            We proudly serve insurers, employers, scheme agents, self-insurers, 
            and corporations across all Australian jurisdictions.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Insurers", "Employers", "Scheme Agents", "Self-Insurers", "Corporations"].map((client) => (
              <span
                key={client}
                className="px-4 py-2 bg-card rounded-sm text-foreground border border-border shadow-soft"
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
