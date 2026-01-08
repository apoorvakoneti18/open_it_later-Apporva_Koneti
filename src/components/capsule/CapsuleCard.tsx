import { Clock, Eye, Heart, Lock, Globe } from "lucide-react";
import { Link } from "react-router-dom";

interface CapsuleCardProps {
  capsule: {
    id: string;
    title: string;
    author: string;
    unlockDate: Date;
    likes: number;
    views: number;
    isPublic: boolean;
    previewText: string;
    category: string;
  };
}

const CapsuleCard = ({ capsule }: CapsuleCardProps) => {
  const now = new Date();
  const timeLeft = capsule.unlockDate.getTime() - now.getTime();
  const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
  const isUnlocked = daysLeft <= 0;

  const formatTimeLeft = () => {
    if (isUnlocked) return "Unlocked";
    if (daysLeft > 365) return `${Math.floor(daysLeft / 365)} years`;
    if (daysLeft > 30) return `${Math.floor(daysLeft / 30)} months`;
    return `${daysLeft} days`;
  };

  return (
    <Link to={`/capsule/${capsule.id}`}>
      <div className="glass-card-hover p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {capsule.category}
          </span>
          {capsule.isPublic ? (
            <Globe className="w-4 h-4 text-accent" />
          ) : (
            <Lock className="w-4 h-4 text-muted-foreground" />
          )}
        </div>

        {/* Content */}
        <h3 className="font-display text-lg font-semibold mb-2 line-clamp-2">
          {capsule.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow">
          {capsule.previewText}
        </p>

        {/* Author */}
        <p className="text-sm text-muted-foreground mb-4">
          by <span className="text-foreground">{capsule.author}</span>
        </p>

        {/* Timer */}
        <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg ${
          isUnlocked ? "bg-accent/10" : "bg-muted"
        }`}>
          <Clock className={`w-4 h-4 ${isUnlocked ? "text-accent" : "text-primary"}`} />
          <span className={`text-sm font-medium ${isUnlocked ? "text-accent" : "text-foreground"}`}>
            {formatTimeLeft()}
          </span>
          <span className="text-xs text-muted-foreground">
            {isUnlocked ? "" : "until unlock"}
          </span>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4" />
            {capsule.likes}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-4 h-4" />
            {capsule.views}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CapsuleCard;
