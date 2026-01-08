import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card p-8 md:p-12 text-center shine">
          <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Ready to Capture
            <br />
            <span className="gradient-text">This Moment?</span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Your future self is waiting. Create a time capsule today and give yourself 
            the gift of memories tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/create">
              <Button variant="hero" size="xl" className="group">
                Start Your Capsule
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="glass" size="xl">
                Learn More
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm mb-4">Trusted by thousands of memory makers</p>
            <div className="flex items-center justify-center gap-8 text-muted-foreground/50">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground">10K+</div>
                <div className="text-xs">Capsules Created</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground">50K+</div>
                <div className="text-xs">Memories Preserved</div>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-foreground">100%</div>
                <div className="text-xs">Secure & Private</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
