"use client";

import { useState, useEffect } from "react";
import { BRIDE_NAME, EVENT_DATE, GROOM_NAME, TAMU } from "../utils/constants";
// import { serverHooks } from "next/dist/server/app-render/entry-base";
import { useSearchParams } from "next/navigation";

export default function OpeningSection() {
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [tamu, setTamu] = useState("");

const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
  const to = searchParams.get("to");
  if (to) setTamu(to.toUpperCase());

  if (localStorage.getItem("open")) {
    document.getElementById("body")?.removeAttribute("style");
    setIsOpen(true);
  }
}, [searchParams]);

if (!mounted) return null;

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
      <div className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-80 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center px-4 animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-2">The Wedding Of</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-amber-300 to-rose-300 mx-auto mb-6"></div>
            <h2 className="text-5xl md:text-6xl font-bold text-orange-400 font-script mb-4">{GROOM_NAME}</h2>
            <h2 className="text-7xl md:text-6xl font-bold text-orange-400 font-script mb-4">&</h2>
            <h2 className="text-5xl md:text-6xl font-bold text-orange-400 font-script mb-4">{BRIDE_NAME}</h2>
          </div>

          <div className="mb-10">
            <p className="text-gray-600 text-lg mb-2">Kami mengundang <br /> <b>{tamu} </b> <br /> </p>
            <p className="text-gray-600 text-lg">diselenggarakan pada</p>
            <p className="text-amber-700 font-semibold text-xl mt-2">{EVENT_DATE}</p>
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