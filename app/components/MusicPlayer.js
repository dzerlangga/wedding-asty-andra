"use client";

import { useState, useEffect, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Event listener untuk memutar musik dari OpeningSection
    const handlePlayMusic = () => {
      if (audioRef.current && !hasInteracted) {
        setHasInteracted(true);
        setIsPlaying(true);
        audioRef.current.play().catch(e => console.log("Autoplay prevented:", e));
      }
    };

    window.addEventListener('playMusic', handlePlayMusic);

    return () => {
      window.removeEventListener('playMusic', handlePlayMusic);
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true);

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="/audio/wedding-music.mp3"
      />

      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-amber-500 to-rose-500 text-white rounded-full shadow-xl flex items-center justify-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <span className="text-2xl">⏸️</span>
        ) : (
          <span className="text-2xl">🎵</span>
        )}
      </button>

      {/* Music player status indicator */}
      <div className={`fixed bottom-24 right-6 z-40 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${hasInteracted ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <p className="text-sm text-gray-700 flex items-center">
          <span className="mr-2">{isPlaying ? "🎶 Musik diputar" : "🔇 Musik dijeda"}</span>
        </p>
      </div>
    </>
  );
}