"use client";

import { useState, useEffect } from "react";
import { conferenceDateISO } from "@/content/dates";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const difference = new Date(conferenceDateISO).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <div className="bg-primary/10 rounded-lg px-3 py-2 min-w-[56px]">
        <span className="text-2xl font-bold text-primary font-mono tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-wider text-text-muted mt-1 block font-medium">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  // Initialize state directly with calculateTimeLeft() instead of using an effect
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="widget-body">
        <div className="flex justify-center gap-3 py-2">
          {["Days", "Hrs", "Min", "Sec"].map((label) => (
            <div key={label} className="text-center">
              <div className="bg-gray-100 rounded-lg px-3 py-2 min-w-[56px] animate-pulse">
                <span className="text-2xl font-bold text-transparent">00</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-text-muted mt-1 block">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="widget-body">
      <div className="flex justify-center gap-3 py-2">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hrs" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
}
