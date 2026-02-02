import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-navy via-navy to-blue relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute top-32 right-32 w-96 h-96 border border-primary-foreground rounded-full" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="text-center">
          <p className="text-accent text-sm uppercase tracking-widest mb-4">
            Ready to Get Started?
          </p>
          <h2 className="text-primary-foreground mb-6">
            Experience the Gair Legal Difference
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10 text-lg">
            Our team of experienced legal professionals is ready to provide you with 
            superior representation and exceptional client service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="hero-outline" size="xl">
              <Link to="/team">
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
