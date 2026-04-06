import React, { useState, useEffect } from 'react';

const Header = ({ electionDate, state, election }) => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const countdown = () => {
      const difference = +new Date(electionDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(countdown());
    }, 1000);

    return () => clearInterval(timer);
  }, [electionDate]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-700 via-red-600 to-orange-500 bg-clip-text text-transparent">
            Kerala Decisions 2026
          </h1>
          <p className="text-sm font-medium text-gray-500 font-malayalam"> {election} </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Countdown to Polls</span>
            <div className="flex gap-2">
              {timeLeft && Object.keys(timeLeft).length > 0 ? (
                <>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-800 tabular-nums leading-none">{timeLeft.days}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase">Days</span>
                  </div>
                  <span className="text-gray-300 font-light">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-800 tabular-nums leading-none">{timeLeft.hours}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase">Hrs</span>
                  </div>
                  <span className="text-gray-300 font-light">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold text-gray-800 tabular-nums leading-none">{timeLeft.minutes}</span>
                    <span className="text-[8px] text-gray-400 font-bold uppercase">Mins</span>
                  </div>
                </>
              ) : (
                <span className="text-green-600 font-bold">Election Day!</span>
              )}
            </div>
          </div>
          <div className="h-10 w-px bg-gray-200" />
          <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-100">
            Live Dashboard
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
