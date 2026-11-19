import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart } from 'lucide-react';
import { JasmineDivider, CornerOrnament } from './ornaments/JavaneseOrnaments';

export const GiftSection: React.FC = () => {
  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center bg-[#FAF6F0] border-t border-[#B08968]/20">
      <div className="z-10 w-full max-w-[370px] text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Tanda Kasih
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Ungkapan Terima Kasih
          </h2>
          <JasmineDivider className="my-3" />
        </motion.div>

        {/* Card Pemberitahuan Hadiah */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative bg-[#F5EFE6] border border-[#B08968]/40 rounded-2xl p-6 shadow-sm text-center mt-3"
        >
          {/* Corner Ornaments */}
          <div className="absolute top-2 left-2 pointer-events-none">
            <CornerOrnament position="top-left" size={28} />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <CornerOrnament position="top-right" size={28} />
          </div>
          <div className="absolute bottom-2 left-2 pointer-events-none">
            <CornerOrnament position="bottom-left" size={28} />
          </div>
          <div className="absolute bottom-2 right-2 pointer-events-none">
            <CornerOrnament position="bottom-right" size={28} />
          </div>

          {/* Icon Bulat */}
          <div className="w-12 h-12 rounded-full bg-[#4A2E1B] text-[#E5C158] mx-auto flex items-center justify-center mb-3 shadow-md border border-[#D4AF37]/40">
            <Gift className="w-6 h-6" />
          </div>

          <h3 className="font-serif text-base font-bold text-[#4A2E1B]">
            Pemberitahuan Hadiah
          </h3>

          <div className="my-2.5 inline-block bg-[#FAF6F0] border border-[#D4AF37]/50 px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="text-xs font-serif font-bold text-[#4A2E1B] tracking-wide">
              Tidak Menerima Hadiah Dalam Bentuk Apapun
            </span>
          </div>

          <p className="font-lora text-xs text-[#2C1A0E]/85 mt-2 leading-relaxed px-1">
            Tanpa mengurangi rasa hormat, demi kelancaran dan kenyamanan bersama kami menginformasikan bahwa kami <strong className="text-[#4A2E1B]">tidak menerima hadiah dalam bentuk apapun</strong>.
          </p>

          <div className="mt-4 pt-3 border-t border-[#B08968]/20 flex items-center justify-center gap-1.5 text-xs text-[#B08968] font-lora italic">
            <Heart className="w-3.5 h-3.5 text-red-700 fill-red-700 shrink-0" />
            <span>Doa restu & kehadiran Anda adalah hadiah terindah bagi kami.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
