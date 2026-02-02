import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Background Image - Monochrome Architectural */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium architectural backdrop"
          className="w-full h-full object-cover grayscale"
        />
        {/* Deep navy overlay */}
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-gold text-sm md:text-base uppercase tracking-widest mb-4 animate-fade-in font-medium">
            Legal Provider for Insurers & Employers
          </p>
          <h1 className="text-primary-foreground text-balance mb-6 animate-slide-up">
            Superior Representation.<br />
            <span className="text-gold">Law Firm of Choice.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-10 leading-relaxed animate-slide-up stagger-1">
            Progressive, highly specialised Australian firm serving insurers, 
            employers, scheme agents, self-insurers and corporations since 2011.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">
                Speak to Us
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/expertise">
                Our Expertise
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
