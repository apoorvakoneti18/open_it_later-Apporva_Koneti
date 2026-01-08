import { useEffect, useState } from "react";

interface CountdownTimerProps {
  unlockDate: Date;
  size?: "sm" | "md" | "lg";
}

interface TimeLeft {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ unlockDate, size = "md" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = unlockDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsUnlocked(true);
        return;
      }

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
      const months = Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12);
      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));

      setTimeLeft({ years, months, days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [unlockDate]);

  if (isUnlocked) {
    return (
      <div className="text-center">
        <div className="text-4xl md:text-6xl font-display font-bold text-accent mb-2">
          ✨ Unlocked! ✨
        </div>
        <p className="text-muted-foreground">Your time capsule is ready to open</p>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.years, label: "Years" },
    { value: timeLeft.months, label: "Months" },
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ].filter((unit) => unit.value > 0 || unit.label === "Seconds");

  const sizeClasses = {
    sm: "text-2xl md:text-3xl",
    md: "text-4xl md:text-6xl",
    lg: "text-5xl md:text-7xl",
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="glass-card px-4 md:px-6 py-3 md:py-4 min-w-[80px] md:min-w-[100px]">
            <div className={`countdown-number ${sizeClasses[size]}`}>
              {String(unit.value).padStart(2, "0")}
            </div>
          </div>
          <div className="countdown-label">{unit.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
