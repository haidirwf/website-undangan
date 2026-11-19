import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { globalAudio } from '../lib/audioManager';

export const FloatingAudioButton: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(globalAudio.getStatus());

  useEffect(() => {
    const unsubscribe = globalAudio.subscribe((status) => {
      setIsPlaying(status);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    globalAudio.toggle();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={handleToggle}
        aria-label={isPlaying ? 'Hentikan Musik' : 'Putar Musik'}
        className={`relative w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 border-2 ${
          isPlaying
            ? 'bg-[#4A2E1B] text-[#E5C158] border-[#D4AF37] animate-pulse-glow'
            : 'bg-[#F5EFE6] text-[#4A2E1B] border-[#B08968]'
        }`}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-bounce" />
        ) : (
          <VolumeX className="w-5 h-5 opacity-70" />
        )}

        {/* Circular spinning rim indicator */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#D4AF37]/50 animate-spin border-t-transparent pointer-events-none" />
        )}
      </button>
    </div>
  );
};
