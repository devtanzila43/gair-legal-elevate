import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Users, Briefcase, Car, Building } from "lucide-react";

const practiceAreas = [
  {
    title: "Workers Compensation",
    slug: "workers-compensation",
    description: "Strategic representation for insurers and employers in workers compensation matters across all Australian jurisdictions.",
    details: "We provide comprehensive legal services in workers compensation, including claims management, dispute resolution, and litigation across NSW, Victoria, and other states.",
    icon: Shield,
  },
  {
    title: "Work Injury Damages & Recoveries",
    slug: "work-injury-damages",
    description: "Expert guidance on work injury damages claims and recovery actions.",
    details: "Our team handles complex work injury damages claims, including Section 151Z recoveries, cross-claims, and contribution proceedings.",
    icon: Scale,
  },
  {
    title: "Catastrophic Injuries & Death Claims",
    slug: "catastrophic-injuries",
    description: "Experienced handling of complex catastrophic injury and fatal claims with sensitivity and expertise.",
    details: "We bring experience and compassion to the most serious matters, managing large exposure claims with strategic precision.",
    icon: Users,
  },
  {
    title: "Employment Law & WHS",
    slug: "employment-law",
    description: "Comprehensive employment law and workplace health & safety advisory and litigation services.",
    details: "From unfair dismissal claims to WHS prosecutions, we provide strategic advice and robust representation.",
    icon: Briefcase,
  },
  {
    title: "Public Liability",
    slug: "public-liability",
    description: "Defence of public and occupiers liability claims for insurers and self-insurers.",
    details: "We defend a wide range of public liability claims, from slip and fall matters to complex product liability cases.",
    icon: Building,
  },
  {
    title: "Motor Vehicle",
    slug: "motor-vehicle",
    description: "CTP and motor vehicle claims management and litigation expertise.",
    details: "Our motor vehicle team handles CTP claims across multiple jurisdictions with efficiency and expertise.",
    icon: Car,
  },
];

const Expertise = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-narrow text-center relative z-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Our Expertise
          </p>
          <h1 className="text-primary-foreground mb-6">
            Practice Areas
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Highly specialised legal services across six core practice areas, 
            delivering exceptional outcomes for insurers and employers.
          </p>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <div key={area.slug} className="card-premium p-8">
                  <div className="w-14 h-14 rounded-sm bg-navy/5 flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <p className="text-sm text-muted-foreground mb-6">
                    {area.details}
                  </p>
                  <Link
                    to={`/expertise/${area.slug}`}
                    className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container-narrow text-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Why Choose Gair Legal
          </p>
          <h2 className="text-foreground mb-8">
            The Gair Legal Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Specialist Focus
              </h3>
              <p className="text-muted-foreground">
                We concentrate exclusively on insurance and employer representation, 
                giving us unmatched expertise in these areas.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                National Reach
              </h3>
              <p className="text-muted-foreground">
                With offices across NSW and Victoria, we provide seamless 
                representation throughout Australia.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Client-Centred
              </h3>
              <p className="text-muted-foreground">
                Our approach prioritises your objectives, ensuring strategies 
                aligned with your commercial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-narrow text-center">
          <h2 className="text-primary-foreground mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Our experienced team is ready to discuss your legal needs and 
            provide tailored solutions.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              Speak to Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Expertise;
