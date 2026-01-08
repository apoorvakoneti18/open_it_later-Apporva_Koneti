import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Eye, Heart } from "lucide-react";
import CapsuleCard from "@/components/capsule/CapsuleCard";

const featuredCapsules = [
  {
    id: "1",
    title: "Letter to My Future Self",
    author: "Sarah M.",
    unlockDate: new Date("2025-12-31"),
    likes: 234,
    views: 1520,
    isPublic: true,
    previewText: "Dear future me, I hope you've achieved everything we dreamed about...",
    category: "Personal",
  },
  {
    id: "2",
    title: "Class of 2024 Memories",
    author: "University of Stars",
    unlockDate: new Date("2034-06-15"),
    likes: 892,
    views: 4230,
    isPublic: true,
    previewText: "A collection of memories, photos, and promises from our graduation day...",
    category: "Group",
  },
  {
    id: "3",
    title: "Our Wedding Day Wishes",
    author: "Alex & Jordan",
    unlockDate: new Date("2029-08-20"),
    likes: 567,
    views: 2890,
    isPublic: true,
    previewText: "Messages from all our loved ones on the happiest day of our lives...",
    category: "Celebration",
  },
];

const FeaturedCapsules = () => {
  return (
    <section className="relative py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
              Featured <span className="gradient-text">Capsules</span>
            </h2>
            <p className="text-muted-foreground">
              Discover inspiring public capsules from our community
            </p>
          </div>
          <Link to="/explore">
            <Button variant="glass" className="group">
              View All
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Capsules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCapsules.map((capsule) => (
            <CapsuleCard key={capsule.id} capsule={capsule} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCapsules;
