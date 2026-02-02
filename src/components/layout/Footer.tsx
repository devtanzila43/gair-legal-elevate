import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/gair-legal-logo.png";

const offices = [
  {
    name: "Northern Beaches Office",
    address: "Dee Why, NSW",
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
  },
  {
    name: "Chatswood Office",
    address: "Chatswood, NSW",
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
  },
  {
    name: "Newcastle Office",
    address: "Newcastle, NSW",
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
  },
  {
    name: "Melbourne Office",
    address: "Melbourne, VIC",
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
  },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Our Team", href: "/team" },
  { name: "Locations", href: "/locations" },
  { name: "Contact Us", href: "/contact" },
];

const practiceAreas = [
  { name: "Workers Compensation", href: "/expertise/workers-compensation" },
  { name: "Work Injury Damages", href: "/expertise/work-injury-damages" },
  { name: "Catastrophic Injuries", href: "/expertise/catastrophic-injuries" },
  { name: "Employment Law & WHS", href: "/expertise/employment-law" },
  { name: "Public Liability", href: "/expertise/public-liability" },
  { name: "Motor Vehicle", href: "/expertise/motor-vehicle" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Gair Legal"
              className="h-12 w-auto brightness-0 invert mb-6"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-6">
              Progressive, highly specialised Australian firm serving insurers, 
              employers, scheme agents, self-insurers and corporations since 2011.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <span>ABN: XX XXX XXX XXX</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Expertise
            </h4>
            <ul className="space-y-2.5">
              {practiceAreas.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Our Offices
            </h4>
            <ul className="space-y-4">
              {offices.slice(0, 3).map((office) => (
                <li key={office.name} className="text-sm">
                  <p className="font-medium text-primary-foreground mb-1">
                    {office.name}
                  </p>
                  <a
                    href={`tel:${office.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-1.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {office.phone}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/locations"
                  className="text-sm text-accent hover:underline"
                >
                  View all locations →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/60">
            <p>
              © {currentYear} Gair Legal. All rights reserved. 
              Gair Legal is a corporation and not a partnership. 
              Liability limited by a scheme approved under Professional Standards Legislation.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
