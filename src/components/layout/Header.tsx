import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gair-legal-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Expertise", href: "/expertise" },
  { name: "Our Team", href: "/team" },
  { name: "Locations", href: "/locations" },
  { name: "Contact", href: "/contact" },
];

const offices = [
  { name: "Northern Beaches", phone: "+61 2 9916 9600" },
  { name: "Chatswood", phone: "+61 2 9916 9675" },
  { name: "Newcastle", phone: "+61 2 9916 9650" },
  { name: "Melbourne", phone: "+61 3 8637 9950" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Office Bar */}
      <div className="bg-navy text-primary-foreground">
        <div className="container-wide">
          <div className="hidden md:flex items-center justify-between h-9 text-xs">
            <div className="flex items-center gap-6">
              {offices.map((office) => (
                <div key={office.name} className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                  <MapPin className="w-3 h-3" />
                  <span>{office.name}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="tel:+61299169600" 
                className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-3 h-3" />
                <span>+61 2 9916 9600</span>
              </a>
              <a 
                href="mailto:info@gairlegal.com.au" 
                className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="w-3 h-3" />
                <span>info@gairlegal.com.au</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`transition-all duration-base ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-background"
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="Gair Legal - Legal Provider for Insurers & Employers"
                className="h-12 md:h-14 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-fast relative group ${
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-accent transition-transform duration-base origin-left ${
                      location.pathname === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild variant="default" className="bg-navy hover:bg-navy/90">
                <Link to="/contact">Speak to Us</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 -mr-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-slide-down">
            <div className="container-wide py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 text-base font-medium rounded-sm transition-colors ${
                    location.pathname === item.href
                      ? "text-accent bg-sky"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button asChild className="w-full bg-navy hover:bg-navy/90">
                  <Link to="/contact">Speak to Us</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
