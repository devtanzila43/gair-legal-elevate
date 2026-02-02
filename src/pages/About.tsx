import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Target, ArrowRight } from "lucide-react";
import aboutImage from "@/assets/team-meeting.jpg";

const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our dealings, ensuring trust and transparency with every client.",
  },
  {
    icon: Users,
    title: "Loyalty",
    description: "We build lasting relationships through unwavering commitment to our clients' success and best interests.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We pursue the highest standards of legal practice, continuously improving our skills and knowledge.",
  },
  {
    icon: Target,
    title: "Dedication",
    description: "We are fully committed to achieving superior outcomes and exceeding client expectations.",
  },
];

const milestones = [
  { year: "2011", event: "Gair Legal founded in Sydney's Northern Beaches" },
  { year: "2014", event: "Opened Chatswood office to serve greater Sydney" },
  { year: "2017", event: "Expanded to Newcastle, strengthening regional presence" },
  { year: "2020", event: "Melbourne office established for national coverage" },
  { year: "2024", event: "Celebrating over a decade of legal excellence" },
];

const clientTypes = [
  "Insurers",
  "Employers",
  "Scheme Agents",
  "Self-Insurers",
  "Corporations",
];

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-narrow text-center relative z-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            About Us
          </p>
          <h1 className="text-primary-foreground mb-6">
            Our Story & Values
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            A progressive, highly specialised Australian law firm delivering 
            exceptional legal services since 2011.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
                Who We Are
              </p>
              <h2 className="text-foreground mb-6">
                Law Firm of Choice
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gair Legal is a progressive, highly specialised Australian firm that has 
                established itself as the law firm of choice for insurers, employers, scheme 
                agents, self-insurers and corporations across Australia.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2011, we have built our reputation on delivering superior 
                representation and exceeding client expectations. Our culture of innovation 
                and excellence drives everything we do.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 py-2 my-8">
                <p className="text-lg italic text-foreground font-serif">
                  "Our commitment to integrity, loyalty, and dedication defines who we are 
                  and how we serve our clients."
                </p>
                <cite className="text-sm text-muted-foreground mt-2 block">
                  — Gair Legal Leadership
                </cite>
              </blockquote>
              <Button asChild variant="gold">
                <Link to="/team">
                  Meet Our Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Gair Legal team in discussion"
                className="rounded-sm shadow-luxury w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-white p-6 rounded-sm">
                <p className="text-3xl font-bold font-serif">13+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-light">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
              Our Values
            </p>
            <h2 className="text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values guide every decision and interaction, ensuring we deliver 
              exceptional service with unwavering ethical standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="card-premium p-6 text-center">
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

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
              Our Journey
            </p>
            <h2 className="text-foreground mb-4">
              Milestones
            </h2>
          </div>

          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-gold font-bold font-serif text-xl">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold" />
                  {index < milestones.length - 1 && (
                    <div className="w-px h-12 bg-border" />
                  )}
                </div>
                <div className="flex-1 pb-6">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-navy">
        <div className="container-narrow text-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Who We Serve
          </p>
          <h2 className="text-primary-foreground mb-8">
            Our Clients
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {clientTypes.map((client) => (
              <span
                key={client}
                className="px-6 py-3 bg-primary-foreground/10 text-primary-foreground rounded-sm text-sm font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light">
        <div className="container-narrow text-center">
          <h2 className="text-foreground mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Experience the Gair Legal difference. Our team is ready to provide 
            you with superior representation.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
