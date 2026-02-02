import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import officeImage from "@/assets/office-interior.jpg";

const offices = [
  {
    name: "Northern Beaches Office",
    address: "Level 2, 6 Oaks Avenue",
    suburb: "Dee Why NSW 2099",
    phone: "+61 2 9916 9600",
    fax: "+61 2 9916 9699",
    email: "sydneyoffice@gairlegal.com.au",
    hours: "Monday - Friday: 8:30am - 5:30pm",
    isHeadquarters: true,
  },
  {
    name: "Chatswood Office",
    address: "Level 8, 781 Pacific Highway",
    suburb: "Chatswood NSW 2067",
    phone: "+61 2 9916 9675",
    fax: "+61 2 9916 9676",
    email: "chatswoodoffice@gairlegal.com.au",
    hours: "Monday - Friday: 8:30am - 5:30pm",
    isHeadquarters: false,
  },
  {
    name: "Newcastle Office",
    address: "Level 4, 251 Wharf Road",
    suburb: "Newcastle NSW 2300",
    phone: "+61 2 9916 9650",
    fax: "+61 2 9916 9651",
    email: "newcastleoffice@gairlegal.com.au",
    hours: "Monday - Friday: 8:30am - 5:30pm",
    isHeadquarters: false,
  },
  {
    name: "Melbourne Office",
    address: "Level 12, 440 Collins Street",
    suburb: "Melbourne VIC 3000",
    phone: "+61 3 8637 9950",
    fax: "+61 3 8637 9951",
    email: "melbourneoffice@gairlegal.com.au",
    hours: "Monday - Friday: 8:30am - 5:30pm",
    isHeadquarters: false,
  },
];

const Locations = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-narrow text-center relative z-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Our Offices
          </p>
          <h1 className="text-primary-foreground mb-6">
            National Locations
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            With four offices across NSW and Victoria, we provide accessible 
            legal services throughout Australia.
          </p>
        </div>
      </section>

      {/* Office Image */}
      <section className="py-12">
        <div className="container-wide">
          <img
            src={officeImage}
            alt="Gair Legal office interior"
            className="w-full h-80 object-cover rounded-sm shadow-luxury"
          />
        </div>
      </section>

      {/* Offices Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office) => (
              <div key={office.name} className="card-premium p-8">
                {office.isHeadquarters && (
                  <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-sm mb-4">
                    Headquarters
                  </span>
                )}
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {office.name}
                </h3>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p>{office.address}</p>
                      <p>{office.suburb}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                    <a 
                      href={`tel:${office.phone.replace(/\s/g, '')}`}
                      className="hover:text-gold transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                    <a 
                      href={`mailto:${office.email}`}
                      className="hover:text-gold transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
                
                {/* Map placeholder */}
                <div className="mt-6 h-48 bg-navy/5 rounded-sm flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Interactive Map</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy">
        <div className="container-narrow text-center">
          <h2 className="text-primary-foreground mb-4">
            Visit Us Today
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact your nearest office to schedule a consultation with our 
            experienced legal team.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
