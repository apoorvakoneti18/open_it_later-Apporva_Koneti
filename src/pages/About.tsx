import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsBackground from "@/components/layout/StarsBackground";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Lock,
  Bell,
  Shield,
  Heart,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Users,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Storage",
    description: "Your memories are encrypted and safely stored until the unlock date. No one can access them—not even us.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Receive email notifications when your capsule is ready to open. Never miss a moment of nostalgia.",
  },
  {
    icon: Users,
    title: "Shared Experiences",
    description: "Create group capsules with friends and family. Collect messages from everyone you love.",
  },
  {
    icon: Globe,
    title: "Public Gallery",
    description: "Share your capsules with the world or keep them private. You're in complete control.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "We never read, analyze, or share your content. Your memories belong to you alone.",
  },
  {
    icon: Heart,
    title: "Emotional Connection",
    description: "Reconnect with past emotions, track your growth, and surprise your future self.",
  },
];

const useCases = [
  {
    title: "Letters to Future Self",
    description: "Write to the person you'll become. Share your current dreams, fears, and hopes.",
  },
  {
    title: "Wedding & Anniversary",
    description: "Collect heartfelt messages from guests to open on your first anniversary.",
  },
  {
    title: "Baby's First Year",
    description: "Document precious moments for your child to discover on their 18th birthday.",
  },
  {
    title: "Graduation Memories",
    description: "Preserve class memories and predictions to revisit at your reunion.",
  },
  {
    title: "New Year Resolutions",
    description: "Seal your goals and open them next year to see how far you've come.",
  },
  {
    title: "Friendship Bonds",
    description: "Create group capsules with friends to reminisce about good times together.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">How It Works</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Your Memories,
              <br />
              <span className="gradient-text">Preserved Forever</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Digital Time Capsule helps you capture life's most precious moments and deliver them to your future self. Because some memories deserve to last forever.
            </p>
          </div>

          {/* How It Works Steps */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-12">
              Simple Steps to <span className="gradient-text">Capture Time</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Create", desc: "Start a new capsule with a title and unlock date" },
                { step: 2, title: "Fill", desc: "Add messages, photos, videos, and memories" },
                { step: 3, title: "Seal", desc: "Lock your capsule until the chosen date" },
                { step: 4, title: "Unlock", desc: "Open your capsule and relive the moment" },
              ].map((item) => (
                <div key={item.step} className="glass-card p-6 text-center relative">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 font-display font-bold text-primary-foreground text-xl">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Why Choose <span className="gradient-text">Time Capsule</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              We've built the most secure, emotional, and user-friendly platform for preserving memories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card-hover p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="font-display text-3xl font-bold text-center mb-4">
              Perfect For <span className="gradient-text">Every Occasion</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              From personal reflections to group celebrations, there's a time capsule for every moment.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start gap-3 glass-card p-4">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">{useCase.title}</h4>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="glass-card p-10 text-center shine">
            <Clock className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold mb-4">
              Ready to Capture This Moment?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Start your journey today. Create your first time capsule and give your future self the gift of memories.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
