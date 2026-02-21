"use client";

import { useState, useEffect } from "react";
import { COUPLE_NAME } from "../utils/constants";

export default function OpeningSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("open")) {
      document.getElementById('body').removeAttribute('style')
      setIsOpen(true)
    }
  }, [])

  const handleOpenInvitation = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(true), 800);

    // Trigger music play
    const event = new Event('playMusic');
    document.getElementById('body').removeAttribute('style')
    localStorage.setItem("open", true)
    window.dispatchEvent(event);
  };

  if (!isOpen) {
    return (
      <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-100 to-amber-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center px-4 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-2">The Wedding Of</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-rose-700 font-script mb-4">{COUPLE_NAME}</h2>
          </div>

          <div className="mb-10">
            <p className="text-gray-600 text-lg mb-2">Kami mengundang Anda untuk hadir dalam</p>
            <p className="text-gray-600 text-lg">pernikahan kami yang akan diselenggarakan pada</p>
            <p className="text-amber-700 font-semibold text-xl mt-2">15 Desember 2024</p>
          </div>

          <button
            onClick={handleOpenInvitation}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Buka Undangan
          </button>

          <div className="mt-12 animate-bounce">
            <p className="text-gray-500 text-sm">Scroll ke bawah setelah membuka undangan</p>
            <div className="text-3xl mt-2">👇</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}