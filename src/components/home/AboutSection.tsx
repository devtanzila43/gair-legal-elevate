import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import teamImage from "@/assets/team-meeting.jpg";

export function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
              About Gair Legal
            </p>
            <h2 className="text-foreground mb-6">
              Established 2011.<br />
              Progressive. Highly Specialised.
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Gair Legal has established itself as the law firm of choice for insurers, 
              employers, scheme agents, self-insurers and corporations seeking superior 
              legal representation across Australia.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our culture of innovation and excellence, combined with a values-based 
              approach centered on integrity, loyalty, and dedication, ensures we 
              consistently exceed client expectations.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Gair Legal team in discussion"
              className="rounded-sm shadow-luxury w-full"
            />
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold rounded-sm -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
