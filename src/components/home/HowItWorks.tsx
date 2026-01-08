import { PenLine, Calendar, Lock, Bell } from "lucide-react";

const steps = [
  {
    icon: PenLine,
    title: "Create Your Capsule",
    description: "Write heartfelt messages, upload photos, and record videos. Pour your current emotions into a digital container.",
    color: "primary",
  },
  {
    icon: Calendar,
    title: "Set the Unlock Date",
    description: "Choose when your capsule opens—next year, in 5 years, or on a special anniversary.",
    color: "accent",
  },
  {
    icon: Lock,
    title: "Seal & Wait",
    description: "Your capsule is encrypted and locked. Watch the countdown as anticipation builds.",
    color: "primary",
  },
  {
    icon: Bell,
    title: "Receive & Remember",
    description: "Get notified when it's time. Unlock your capsule and relive those precious moments.",
    color: "accent",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Creating a time capsule is simple. Follow these steps to preserve your memories for the future.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card-hover p-6 text-center relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                step.color === "primary" ? "bg-primary/10" : "bg-accent/10"
              } group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-8 h-8 ${
                  step.color === "primary" ? "text-primary" : "text-accent"
                }`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Connection Lines (Desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 pointer-events-none">
          <div className="max-w-6xl mx-auto px-20">
            <div className="border-t-2 border-dashed border-primary/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
