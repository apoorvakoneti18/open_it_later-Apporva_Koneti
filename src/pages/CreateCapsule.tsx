import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsBackground from "@/components/layout/StarsBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  CalendarIcon, 
  Lock, 
  Globe, 
  Users, 
  Upload, 
  Image, 
  Video, 
  FileText,
  ArrowLeft,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type PrivacySetting = "private" | "public" | "shared";

const CreateCapsule = () => {
  const [step, setStep] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [unlockDate, setUnlockDate] = useState<Date>();
  const [privacy, setPrivacy] = useState<PrivacySetting>("private");
  const [message, setMessage] = useState("");

  const privacyOptions = [
    { 
      value: "private" as PrivacySetting, 
      icon: Lock, 
      label: "Private", 
      description: "Only you can access" 
    },
    { 
      value: "public" as PrivacySetting, 
      icon: Globe, 
      label: "Public", 
      description: "Anyone can discover" 
    },
    { 
      value: "shared" as PrivacySetting, 
      icon: Users, 
      label: "Shared", 
      description: "Invite specific people" 
    },
  ];

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="title" className="text-lg font-display">
                Capsule Title
              </Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Letter to My Future Self"
                className="mt-2 h-12 bg-muted/50 border-border text-lg"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-lg font-display">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this capsule about?"
                className="mt-2 min-h-[100px] bg-muted/50 border-border"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label className="text-lg font-display block mb-4">
                When should this capsule unlock?
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="glass"
                    size="lg"
                    className={cn(
                      "w-full justify-start text-left font-normal h-14",
                      !unlockDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    {unlockDate ? format(unlockDate, "PPPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
                  <Calendar
                    mode="single"
                    selected={unlockDate}
                    onSelect={setUnlockDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div>
              <Label className="text-lg font-display block mb-4">
                Privacy Settings
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {privacyOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setPrivacy(option.value)}
                    className={cn(
                      "glass-card p-4 text-left transition-all duration-300",
                      privacy === option.value
                        ? "border-primary bg-primary/10"
                        : "hover:border-primary/30"
                    )}
                  >
                    <option.icon className={cn(
                      "w-6 h-6 mb-2",
                      privacy === option.value ? "text-primary" : "text-muted-foreground"
                    )} />
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-sm text-muted-foreground">
                      {option.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="message" className="text-lg font-display">
                Your Message
              </Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message to your future self or loved ones..."
                className="mt-2 min-h-[200px] bg-muted/50 border-border"
              />
            </div>
            <div>
              <Label className="text-lg font-display block mb-4">
                Add Media
              </Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { icon: Image, label: "Photos", accept: "image/*" },
                  { icon: Video, label: "Videos", accept: "video/*" },
                  { icon: FileText, label: "Documents", accept: ".pdf,.doc,.docx" },
                ].map((media) => (
                  <label
                    key={media.label}
                    className="glass-card p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary/30 transition-all"
                  >
                    <input type="file" accept={media.accept} className="hidden" />
                    <media.icon className="w-8 h-8 text-muted-foreground mb-2" />
                    <span className="text-sm text-muted-foreground">
                      Add {media.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-6 animate-fade-in">
            <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold">
              Ready to Seal Your Capsule?
            </h3>
            <div className="glass-card p-6 text-left max-w-md mx-auto">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Title:</span>
                  <span className="font-medium">{title || "Untitled"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Unlock Date:</span>
                  <span className="font-medium">
                    {unlockDate ? format(unlockDate, "PP") : "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Privacy:</span>
                  <span className="font-medium capitalize">{privacy}</span>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Once sealed, your capsule cannot be opened until the unlock date.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold">
              Create Your <span className="gradient-text">Time Capsule</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Preserve this moment for the future
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  s === step
                    ? "w-8 bg-primary"
                    : s < step
                    ? "bg-primary/50"
                    : "bg-muted"
                )}
              />
            ))}
          </div>

          {/* Step Content */}
          <div className="glass-card p-8">
            {renderStep()}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              {step > 1 ? (
                <Button
                  variant="ghost"
                  onClick={() => setStep(step - 1)}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              ) : (
                <div />
              )}
              
              {step < 4 ? (
                <Button
                  variant="hero"
                  onClick={() => setStep(step + 1)}
                  className="gap-2"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button variant="hero" size="lg" className="gap-2">
                  <Lock className="w-4 h-4" />
                  Seal Capsule
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreateCapsule;
