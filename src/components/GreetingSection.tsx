import React from 'react';
import { motion } from 'framer-motion';
import { GununganWayang, JasmineDivider } from './ornaments/JavaneseOrnaments';

export const GreetingSection: React.FC = () => {
  return (
    <section className="relative w-full pt-10 pb-12 px-6 flex flex-col items-center text-center bg-[#F5EFE6] border-t-2 border-[#D4AF37]/40 border-b border-[#B08968]/20 shadow-inner">
      {/* Background Watermark Gunungan Halus */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none">
        <GununganWayang className="w-80 h-96" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="z-10 w-full max-w-[370px]"
      >
        {/* Salam Pembuka Tradisional / Islami */}
        <p className="font-serif italic text-sm text-[#B08968] tracking-wide mb-1">
          Assalamu’alaikum Warahmatullahi Wabarakatuh
        </p>

        <p className="text-[11px] font-sans tracking-widest text-[#4A2E1B]/70 uppercase font-semibold mb-3">
          Rahayu Sagung Dumadi
        </p>

        <GununganWayang className="w-16 h-24 mx-auto my-2 opacity-80" color="#4A2E1B" accentColor="#D4AF37" />

        <JasmineDivider className="my-3" />

        {/* Teks Sambutan Silaturahmi */}
        <p className="font-lora text-xs sm:text-sm text-[#2C1A0E] leading-relaxed text-center px-1">
          Tanpa terasa waktu bergulir dan untaian kenangan indah di Mutiara Bunda tetap lekat di sanubari kita.
          Dengan rasa syukur dan penuh kebahagiaan, kami mengundang Ibu/Saudara/i sekalian keluarga besar
          Alumni Mutiara Bunda untuk hadir mempererat tali silaturahmi dalam peringatan Ulang Tahun & Reuni Bersama
          <strong className="text-[#4A2E1B] font-semibold"> Bidan Hj Siti Rochma</strong>.
        </p>

        {/* Catatan Tidak Menerima Hadiah */}
        <div className="mt-5 p-3 rounded-xl bg-[#FAF6F0] border border-[#B08968]/30 shadow-xs">
          <p className="font-lora text-[11px] sm:text-xs text-[#2C1A0E]/85 leading-relaxed">
            * Tanpa mengurangi rasa hormat, kami <strong className="text-[#4A2E1B]">tidak menerima hadiah dalam bentuk apapun</strong>. Kehadiran serta doa restu Ibu/Saudara/i merupakan kado terindah bagi kami.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
