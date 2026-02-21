"use client";

import { useState, useEffect } from "react";
import { WEDDING_DATE } from "../utils/constants";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date(WEDDING_DATE);
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-b from-amber-100 to-rose-100 rounded-lg flex items-center justify-center shadow-md">
        <span className="text-2xl md:text-3xl font-bold text-amber-900">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-gray-600 text-sm mt-2">{label}</span>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-amber-900 mb-4">Menuju Hari Bahagia</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hitungan mundur menuju pernikahan kami. Kami tak sabar untuk berbagi kebahagiaan dengan Anda.
          </p>
        </div>

        <div className="flex justify-center gap-4 md:gap-8">
          <TimeUnit value={timeLeft.days} label="Hari" />
          <TimeUnit value={timeLeft.hours} label="Jam" />
          <TimeUnit value={timeLeft.minutes} label="Menit" />
          <TimeUnit value={timeLeft.seconds} label="Detik" />
        </div>

        <div className="text-center mt-12">
          <p className="text-amber-800 font-medium">Sabtu, 15 Desember 2024</p>
          <p className="text-gray-600 mt-1">Bertempat di Gedung Serbaguna Bahagia Jaya</p>
        </div>
      </div>
    </section>
  );
}