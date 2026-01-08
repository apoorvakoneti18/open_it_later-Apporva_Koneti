import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Lock, Sparkles } from "lucide-react";
import heroCapsule from "@/assets/hero-capsule.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroCapsule})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl floating-delayed" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Preserve memories across time
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Send Messages to
          <br />
          <span className="gradient-text glow-text">Your Future Self</span>
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Create digital time capsules filled with memories, hopes, and dreams. 
          Lock them away and unlock a treasure trove of emotions when the time is right.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="/create">
            <Button variant="hero" size="xl" className="group">
              Create Your Capsule
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/explore">
            <Button variant="glass" size="xl">
              Explore Public Capsules
            </Button>
          </Link>
        </div>

        {/* Feature Pills */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Clock, text: "Set any unlock date" },
            { icon: Lock, text: "Secure & Private" },
            { icon: Sparkles, text: "Photos, Videos & Text" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 text-muted-foreground text-sm backdrop-blur-sm"
            >
              <feature.icon className="w-4 h-4 text-primary" />
              {feature.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
