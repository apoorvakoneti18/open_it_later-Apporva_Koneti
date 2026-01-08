import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsBackground from "@/components/layout/StarsBackground";
import CountdownTimer from "@/components/capsule/CountdownTimer";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Clock, 
  Lock, 
  Globe, 
  Users, 
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Archive
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const userCapsules = [
  {
    id: "1",
    title: "My 30th Birthday Letter",
    unlockDate: new Date("2025-08-15"),
    privacy: "private",
    status: "sealed",
    itemCount: 5,
  },
  {
    id: "2",
    title: "2024 Goals & Dreams",
    unlockDate: new Date("2025-01-01"),
    privacy: "private",
    status: "sealed",
    itemCount: 12,
  },
  {
    id: "3",
    title: "Memories with Grandma",
    unlockDate: new Date("2024-06-01"),
    privacy: "shared",
    status: "unlocked",
    itemCount: 23,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"all" | "sealed" | "unlocked">("all");

  const filteredCapsules = userCapsules.filter((capsule) => {
    if (activeTab === "all") return true;
    return capsule.status === activeTab;
  });

  const getPrivacyIcon = (privacy: string) => {
    switch (privacy) {
      case "private":
        return Lock;
      case "public":
        return Globe;
      case "shared":
        return Users;
      default:
        return Lock;
    }
  };

  const nextUnlock = userCapsules
    .filter(c => c.status === "sealed")
    .sort((a, b) => a.unlockDate.getTime() - b.unlockDate.getTime())[0];

  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold">
                Your <span className="gradient-text">Time Capsules</span>
              </h1>
              <p className="text-muted-foreground mt-2">
                Manage and track all your precious memories
              </p>
            </div>
            <Link to="/create">
              <Button variant="hero" className="gap-2">
                <Plus className="w-5 h-5" />
                Create New Capsule
              </Button>
            </Link>
          </div>

          {/* Next Unlock Card */}
          {nextUnlock && (
            <div className="glass-card p-8 mb-10 text-center shine">
              <h2 className="font-display text-xl text-muted-foreground mb-4">
                Next Capsule Opens In
              </h2>
              <CountdownTimer unlockDate={nextUnlock.unlockDate} size="md" />
              <p className="mt-4 text-foreground font-medium">
                "{nextUnlock.title}"
              </p>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { label: "Total Capsules", value: userCapsules.length, icon: Archive },
              { label: "Sealed", value: userCapsules.filter(c => c.status === "sealed").length, icon: Lock },
              { label: "Unlocked", value: userCapsules.filter(c => c.status === "unlocked").length, icon: Clock },
              { label: "Total Items", value: userCapsules.reduce((acc, c) => acc + c.itemCount, 0), icon: Eye },
            ].map((stat) => (
              <div key={stat.label} className="glass-card p-4 text-center">
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="font-display text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            {[
              { value: "all", label: "All Capsules" },
              { value: "sealed", label: "Sealed" },
              { value: "unlocked", label: "Unlocked" },
            ].map((tab) => (
              <Button
                key={tab.value}
                variant={activeTab === tab.value ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(tab.value as typeof activeTab)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {/* Capsules List */}
          <div className="space-y-4">
            {filteredCapsules.map((capsule) => {
              const PrivacyIcon = getPrivacyIcon(capsule.privacy);
              const isUnlocked = capsule.status === "unlocked";
              const daysUntil = Math.ceil(
                (capsule.unlockDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
              );

              return (
                <div
                  key={capsule.id}
                  className={cn(
                    "glass-card p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all",
                    isUnlocked && "border-accent/30"
                  )}
                >
                  <div className="flex items-start gap-4 flex-grow">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      isUnlocked ? "bg-accent/10" : "bg-primary/10"
                    )}>
                      {isUnlocked ? (
                        <Clock className="w-6 h-6 text-accent" />
                      ) : (
                        <Lock className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {capsule.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <PrivacyIcon className="w-4 h-4" />
                          {capsule.privacy}
                        </span>
                        <span>{capsule.itemCount} items</span>
                        <span>
                          {isUnlocked
                            ? "Unlocked"
                            : daysUntil > 0
                            ? `${daysUntil} days left`
                            : "Opens today"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full md:w-auto">
                    {isUnlocked ? (
                      <Button variant="accent" size="sm" className="flex-1 md:flex-initial">
                        <Eye className="w-4 h-4 mr-2" />
                        View Contents
                      </Button>
                    ) : (
                      <div className="flex-1 md:flex-initial px-4 py-2 rounded-lg bg-muted text-center text-sm">
                        Opens {capsule.unlockDate.toLocaleDateString()}
                      </div>
                    )}

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card border-border">
                        <DropdownMenuItem className="gap-2">
                          <Eye className="w-4 h-4" />
                          Preview
                        </DropdownMenuItem>
                        {!isUnlocked && (
                          <DropdownMenuItem className="gap-2">
                            <Edit className="w-4 h-4" />
                            Edit
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem className="gap-2 text-destructive">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCapsules.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                No capsules found in this category.
              </p>
              <Link to="/create">
                <Button variant="hero">Create Your First Capsule</Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
