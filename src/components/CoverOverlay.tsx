import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GununganWayang, CornerOrnament, JasmineDivider } from './ornaments/JavaneseOrnaments';

interface CoverOverlayProps {
  isOpen: boolean;
  onOpen: () => void;
  guestName: string;
}

export const CoverOverlay: React.FC<CoverOverlayProps> = ({ isOpen, onOpen, guestName }) => {
  const handleOpenInvitation = () => {
    // Pastikan posisi scroll berada di puncak paling atas
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Launch festive gold confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#B08968', '#4A2E1B', '#F5EFE6'],
      });
    } catch {
      // ignore
    }

    // Trigger open state
    onOpen();
  };

  // Konten asli cover undangan (bersih tanpa desain/ornamen pintu buatan)
  const renderCoverContent = () => (
    <div className="relative w-full h-full min-h-screen bg-[#F5EFE6] flex flex-col justify-between items-center text-center p-6 border-x border-[#B08968]/30 overflow-hidden select-none">
      {/* Background Batik Motif Watermark */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#4A2E1B 1.5px, transparent 1.5px)`,
          backgroundSize: '16px 16px',
        }}
      />

      {/* Corner Ornaments */}
      <div className="absolute top-3 left-3 pointer-events-none">
        <CornerOrnament position="top-left" size={54} />
      </div>
      <div className="absolute top-3 right-3 pointer-events-none">
        <CornerOrnament position="top-right" size={54} />
      </div>
      <div className="absolute bottom-3 left-3 pointer-events-none">
        <CornerOrnament position="bottom-left" size={54} />
      </div>
      <div className="absolute bottom-3 right-3 pointer-events-none">
        <CornerOrnament position="bottom-right" size={54} />
      </div>

      {/* Top Tagline */}
      <div className="mt-8 z-10">
        <span className="text-[11px] font-sans tracking-[0.25em] text-[#B08968] uppercase font-semibold">
          Undangan Spesial
        </span>
        <p className="text-xs font-serif italic text-[#4A2E1B]/80 mt-0.5">
          Silaturahmi & Tasyakuran
        </p>
      </div>

      {/* Center Content: Gunungan Wayang & Titles */}
      <div className="my-auto py-4 flex flex-col items-center z-10 w-full">
        <div className="mb-4">
          <GununganWayang className="w-28 h-40 filter drop-shadow-md" />
        </div>

        <h1 className="font-serif text-2xl font-bold text-[#4A2E1B] tracking-wide leading-tight px-2">
          Ulang Tahun & Reuni
        </h1>

        <p className="font-serif text-base text-[#B08968] font-medium tracking-wide mt-1">
          Alumni Mutiara Bunda
        </p>

        <p className="font-script text-3xl sm:text-4xl text-[#4A2E1B] mt-2 mb-1">
          Bidan Hj Siti Rochma
        </p>

        <JasmineDivider className="my-3" />

        {/* Box Nama Tamu Dinamis */}
        <div className="w-full max-w-[310px] bg-[#FAF6F0]/90 border border-[#B08968]/50 rounded-xl p-4 shadow-sm mt-2">
          <p className="text-[11px] font-sans uppercase tracking-wider text-[#4A2E1B]/70">
            Kepada Yth. Bapak/Ibu/Saudara/i:
          </p>
          <p className="font-serif text-lg font-bold text-[#4A2E1B] mt-1 break-words">
            {guestName}
          </p>
          <p className="text-[10px] font-sans text-[#B08968] italic mt-1">
            *Mohon maaf bila ada kesalahan penulisan nama & gelar
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mb-6 z-10 w-full max-w-[280px]">
        <button
          onClick={handleOpenInvitation}
          className="group relative w-full flex items-center justify-center gap-2.5 bg-[#4A2E1B] hover:bg-[#351F11] text-[#F5EFE6] px-6 py-3.5 rounded-full font-serif text-sm font-semibold tracking-wider shadow-lg shadow-[#4A2E1B]/30 hover:shadow-xl transition-all duration-300 active:scale-95 border border-[#D4AF37]/50"
        >
          <MailOpen className="w-4 h-4 text-[#E5C158] transition-transform group-hover:scale-110" />
          <span>Buka Undangan</span>
        </button>
        <p className="text-[10px] font-sans text-[#4A2E1B]/60 mt-2">
          Sentuh untuk membuka undangan
        </p>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 1.3 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0F08]/90 backdrop-blur-sm overflow-hidden"
        >
          {/* Main Mobile Screen Box */}
          <div className="relative w-full max-w-[430px] h-full min-h-screen overflow-hidden flex shadow-2xl">
            {/* Sisi Kiri (Animasi Bergeser Membuka ke Kiri) */}
            <motion.div
              exit={{
                x: '-100%',
                transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
              }}
              className="absolute left-0 top-0 bottom-0 w-1/2 h-full overflow-hidden z-10"
            >
              <div className="w-[200%] h-full absolute left-0 top-0">
                {renderCoverContent()}
              </div>
            </motion.div>

            {/* Sisi Kanan (Animasi Bergeser Membuka ke Kanan) */}
            <motion.div
              exit={{
                x: '100%',
                transition: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
              }}
              className="absolute right-0 top-0 bottom-0 w-1/2 h-full overflow-hidden z-10"
            >
              <div className="w-[200%] h-full absolute right-0 top-0">
                {renderCoverContent()}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
