"use client";

import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-26T23:59:00-03:00");

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

const UrgencyBar = () => {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft>>(null);

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) {
    return (
      <div className="sticky top-0 z-50 w-full py-3 bg-red-600 text-center">
        <span className="text-sm font-bold text-white tracking-wide">
          PROMOÇÃO ENCERRADA
        </span>
      </div>
    );
  }

  return (
    <div className="sticky top-0 z-50 w-full py-2.5 sm:py-3 bg-red-600">
      <div className="container flex flex-row items-center justify-center gap-2 sm:gap-4">
        <span className="font-heading font-bold text-white text-[10px] sm:text-xs tracking-wide uppercase whitespace-nowrap">
          A promoção acaba em:
        </span>
        <div className="flex items-center gap-1">
          {[
            { v: time.dias, l: "D" },
            { v: time.horas, l: "H" },
            { v: time.minutos, l: "M" },
            { v: time.segundos, l: "S" },
          ].map((u, i) => (
            <div key={i} className="flex items-center">
              {i > 0 && <span className="text-white/50 font-bold mx-0.5">:</span>}
              <div className="bg-white/15 rounded px-1.5 sm:px-2 py-0.5 min-w-[36px] sm:min-w-[44px] text-center">
                <span className="text-white font-heading font-bold text-lg sm:text-xl leading-tight">
                  {String(u.v).padStart(2, "0")}
                </span>
                <span className="text-white/70 text-[9px] sm:text-[10px] uppercase block -mt-0.5">
                  {u.l}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UrgencyBar;
