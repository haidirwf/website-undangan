import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailOpen } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GununganWayang, CornerOrnament, JasmineDivider, AksaraJawaBadge, BatikBorder } from './ornaments/JavaneseOrnaments';

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

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.85, ease: [0.65, 0, 0.35, 1] } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A0F08]/90 backdrop-blur-sm overflow-hidden"
        >
          {/* Main Mobile Screen Box */}
          <div className="relative w-full max-w-[430px] h-full min-h-screen bg-[#F5EFE6] flex flex-col justify-between items-center text-center p-6 shadow-2xl border-x border-[#B08968]/30 overflow-y-auto overscroll-contain">
            {/* Background Batik Motif Watermark */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#4A2E1B 1.5px, transparent 1.5px)`,
                backgroundSize: '16px 16px',
              }}
            />

            {/* Corner Ornaments */}
            <div className="absolute top-3 left-3">
              <CornerOrnament position="top-left" size={54} />
            </div>
            <div className="absolute top-3 right-3">
              <CornerOrnament position="top-right" size={54} />
            </div>
            <div className="absolute bottom-3 left-3">
              <CornerOrnament position="bottom-left" size={54} />
            </div>
            <div className="absolute bottom-3 right-3">
              <CornerOrnament position="bottom-right" size={54} />
            </div>

            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 z-10"
            >
              <span className="text-[11px] font-sans tracking-[0.25em] text-[#B08968] uppercase font-semibold">
                Undangan Spesial
              </span>
              <p className="text-xs font-serif italic text-[#4A2E1B]/80 mt-0.5">
                Silaturahmi & Tasyakuran
              </p>
            </motion.div>

            {/* Center Content: Gunungan Wayang & Titles */}
            <div className="my-auto py-4 flex flex-col items-center z-10 w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.8, type: 'spring' }}
                className="mb-4"
              >
                <GununganWayang className="w-28 h-40 filter drop-shadow-md" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="font-serif text-2xl font-bold text-[#4A2E1B] tracking-wide leading-tight px-2"
              >
                Ulang Tahun & Reuni
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="font-serif text-base text-[#B08968] font-medium tracking-wide mt-1"
              >
                Alumni Mutiara Bunda
              </motion.p>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="font-script text-3xl sm:text-4xl text-[#4A2E1B] mt-2 mb-1"
              >
                Bidan Siti Rochma
              </motion.p>

              <JasmineDivider className="my-2.5" />

              {/* Aksara Jawa Sugeng Rawuh */}
              <AksaraJawaBadge type="sugeng-rawuh" className="mb-2" />

              {/* Box Nama Tamu Dinamis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.7 }}
                className="w-full max-w-[310px] bg-[#FAF6F0]/90 border border-[#B08968]/50 rounded-xl p-3.5 shadow-sm mt-1"
              >
                <p className="text-[11px] font-sans uppercase tracking-wider text-[#4A2E1B]/70">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <p className="font-serif text-lg font-bold text-[#4A2E1B] mt-1 break-words">
                  {guestName}
                </p>
                <p className="text-[10px] font-sans text-[#B08968] italic mt-1">
                  *Mohon maaf bila ada kesalahan penulisan nama & gelar
                </p>
              </motion.div>
            </div>

            {/* Bottom Button & Batik Border */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-4 z-10 w-full max-w-[300px] flex flex-col items-center"
            >
              <BatikBorder className="mb-3 opacity-60" />
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
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
