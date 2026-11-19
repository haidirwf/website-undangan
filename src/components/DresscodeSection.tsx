import React from 'react';
import { motion } from 'framer-motion';
import { JasmineDivider, CornerOrnament } from './ornaments/JavaneseOrnaments';

export const DresscodeSection: React.FC = () => {
  return (
    <section className="relative w-full py-10 px-6 flex flex-col items-center bg-[#FAF6F0] border-t border-[#B08968]/20 overflow-hidden">
      <div className="z-10 w-full max-w-[370px] text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Tata Busana
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Dress Code
          </h2>
          <JasmineDivider className="mt-3 mb-4" />
        </motion.div>

        {/* Card Teks Dresscode Sederhana */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative bg-[#F5EFE6] border border-[#B08968]/40 rounded-2xl p-5 shadow-sm text-center"
        >
          {/* Corner Ornaments */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <CornerOrnament position="top-left" size={24} />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <CornerOrnament position="top-right" size={24} />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <CornerOrnament position="bottom-left" size={24} />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none">
            <CornerOrnament position="bottom-right" size={24} />
          </div>

          <div className="inline-block bg-[#FAF6F0] border border-[#D4AF37] px-4 py-1.5 rounded-full shadow-xs mb-3">
            <span className="text-xs sm:text-sm font-serif font-bold text-[#4A2E1B] tracking-wide">
              Batik / Nuansa Tradisional Jawa
            </span>
          </div>

          <p className="font-lora text-xs sm:text-[13px] text-[#2C1A0E]/85 leading-relaxed">
            Tamu undangan diharapkan mengenakan pakaian batik atau busana bernuansa tradisional Jawa yang sopan dan nyaman.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
