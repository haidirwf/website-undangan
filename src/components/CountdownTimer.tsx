import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // ISO string e.g. '2026-12-13T09:00:00+07:00'
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isFinished: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-[340px] mx-auto my-4">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-[#FAF6F0] border border-[#B08968]/40 shadow-sm"
          >
            <span className="font-serif text-lg sm:text-xl font-bold text-[#4A2E1B] leading-none">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] font-sans font-medium text-[#B08968] uppercase tracking-wider mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
