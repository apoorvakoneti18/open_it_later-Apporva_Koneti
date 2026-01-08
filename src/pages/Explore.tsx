import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsBackground from "@/components/layout/StarsBackground";
import CapsuleCard from "@/components/capsule/CapsuleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, TrendingUp, Clock, Heart } from "lucide-react";

const allCapsules = [
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
  {
    id: "4",
    title: "Pandemic Time Capsule",
    author: "Community Project",
    unlockDate: new Date("2030-03-11"),
    likes: 1205,
    views: 8920,
    isPublic: true,
    previewText: "A collective memory of how we survived and thrived during uncertain times...",
    category: "Community",
  },
  {
    id: "5",
    title: "To My Baby Girl",
    author: "Proud Parent",
    unlockDate: new Date("2041-05-15"),
    likes: 432,
    views: 2100,
    isPublic: true,
    previewText: "When you turn 18, I want you to know how much you were loved from day one...",
    category: "Family",
  },
  {
    id: "6",
    title: "Startup Dreams 2024",
    author: "Tech Founders Collective",
    unlockDate: new Date("2027-01-01"),
    likes: 321,
    views: 1890,
    isPublic: true,
    previewText: "Our wildest predictions for the next 3 years in tech. Let's see who was right...",
    category: "Professional",
  },
];

const categories = ["All", "Personal", "Group", "Family", "Celebration", "Community", "Professional"];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"trending" | "recent" | "popular">("trending");

  const filteredCapsules = allCapsules.filter((capsule) => {
    const matchesSearch = capsule.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      capsule.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || capsule.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedCapsules = [...filteredCapsules].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.likes - a.likes;
      case "recent":
        return b.unlockDate.getTime() - a.unlockDate.getTime();
      default:
        return b.views - a.views;
    }
  });

  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Explore <span className="gradient-text">Public Capsules</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover inspiring time capsules from our community. See what memories others have preserved for the future.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="glass-card p-4 md:p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search capsules..."
                  className="pl-10 h-12 bg-muted/50 border-border"
                />
              </div>

              {/* Sort Buttons */}
              <div className="flex gap-2">
                {[
                  { value: "trending", icon: TrendingUp, label: "Trending" },
                  { value: "recent", icon: Clock, label: "Recent" },
                  { value: "popular", icon: Heart, label: "Popular" },
                ].map((option) => (
                  <Button
                    key={option.value}
                    variant={sortBy === option.value ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setSortBy(option.value as typeof sortBy)}
                    className="gap-1"
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{option.label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-border">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{sortedCapsules.length}</span> capsules
            </p>
          </div>

          {/* Capsules Grid */}
          {sortedCapsules.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedCapsules.map((capsule) => (
                <CapsuleCard key={capsule.id} capsule={capsule} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No capsules found matching your criteria.
              </p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;
