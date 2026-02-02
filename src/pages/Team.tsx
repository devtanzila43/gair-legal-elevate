import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const teamMembers = [
  {
    name: "John Smith",
    role: "Managing Principal",
    location: "Northern Beaches",
    specialties: ["Workers Compensation", "Work Injury Damages"],
    email: "john.smith@gairlegal.com.au",
    phone: "+61 2 9916 9600",
  },
  {
    name: "Sarah Johnson",
    role: "Senior Associate",
    location: "Chatswood",
    specialties: ["Employment Law", "WHS"],
    email: "sarah.johnson@gairlegal.com.au",
    phone: "+61 2 9916 9675",
  },
  {
    name: "Michael Chen",
    role: "Principal",
    location: "Melbourne",
    specialties: ["Public Liability", "Motor Vehicle"],
    email: "michael.chen@gairlegal.com.au",
    phone: "+61 3 8637 9950",
  },
  {
    name: "Emma Wilson",
    role: "Senior Associate",
    location: "Newcastle",
    specialties: ["Catastrophic Injuries", "Death Claims"],
    email: "emma.wilson@gairlegal.com.au",
    phone: "+61 2 9916 9650",
  },
  {
    name: "David Brown",
    role: "Associate",
    location: "Northern Beaches",
    specialties: ["Workers Compensation", "Recoveries"],
    email: "david.brown@gairlegal.com.au",
    phone: "+61 2 9916 9600",
  },
  {
    name: "Lisa Taylor",
    role: "Associate",
    location: "Chatswood",
    specialties: ["Employment Law", "Public Liability"],
    email: "lisa.taylor@gairlegal.com.au",
    phone: "+61 2 9916 9675",
  },
];

const locations = ["All", "Northern Beaches", "Chatswood", "Newcastle", "Melbourne"];
const practices = ["All", "Workers Compensation", "Employment Law", "Public Liability", "Motor Vehicle"];

const Team = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-narrow text-center relative z-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Our People
          </p>
          <h1 className="text-primary-foreground mb-6">
            Meet Our Team
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Experienced legal professionals dedicated to delivering exceptional 
            outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border bg-light">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Office:</span>
              <div className="flex flex-wrap gap-2">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                      loc === "All"
                        ? "bg-gold text-white"
                        : "bg-white text-foreground hover:bg-muted border border-border"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="card-premium overflow-hidden group">
                {/* Photo placeholder */}
                <div className="h-64 bg-gradient-to-br from-navy/80 to-navy flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gold/20 flex items-center justify-center text-gold text-3xl font-serif">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.location}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="px-2 py-1 bg-navy/5 text-navy text-xs rounded-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="section-padding bg-light">
        <div className="container-narrow text-center">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Careers
          </p>
          <h2 className="text-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're always looking for talented legal professionals who share our 
            commitment to excellence.
          </p>
          <Button asChild variant="gold">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
