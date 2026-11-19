import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Gift, Award, Users } from 'lucide-react';
import { JasmineDivider, GebyokDivider } from './ornaments/JavaneseOrnaments';

interface EventItem {
  id: string;
  time: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const RundownSection: React.FC = () => {
  const events: EventItem[] = [
    {
      id: '1',
      time: '09.00 – 10.00 WIB',
      title: 'Registrasi & Temu Kangen',
      description: 'Pengisian buku tamu, penyambutan tamu undangan, dan sesi temu kangen awal.',
      icon: <Users className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: '2',
      time: '10.00 – 11.30 WIB',
      title: 'Makan-makan & Ramah Tamah',
      description: 'Doa bersama, sambutan Bidan Hj Siti Rochma, pemotongan tumpeng, dan santap hidangan prasmanan khas Jawa.',
      icon: <Utensils className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: '3',
      time: '11.30 – 12.30 WIB',
      title: 'Pembagian Doorprize',
      description: 'Kuis interaktif, games santai nostalgia, dan pengundian berbagai doorprize menarik untuk para tamu.',
      icon: <Gift className="w-4 h-4 text-[#D4AF37]" />,
    },
    {
      id: '4',
      time: '12.30 – Selesai WIB',
      title: 'Pembagian Souvenir',
      description: 'Sesi foto bersama seluruh alumni dan penyerahan cinderamata / souvenir kenang-kenangan.',
      icon: <Award className="w-4 h-4 text-[#D4AF37]" />,
    },
  ];

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center bg-[#FAF6F0] overflow-hidden">
      {/* Ornamen Tepi Kiri & Kanan (Ukiran Kayu / Pepohonan Masuk Saat Scroll) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-24 left-0 w-16 pointer-events-none"
      >
        <svg viewBox="0 0 100 200" fill="#4A2E1B">
          <path d="M 0 0 C 40 30 50 80 20 130 C 50 150 40 180 0 200 Z" />
        </svg>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 0.15, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-24 right-0 w-16 pointer-events-none scale-x-[-1]"
      >
        <svg viewBox="0 0 100 200" fill="#4A2E1B">
          <path d="M 0 0 C 40 30 50 80 20 130 C 50 150 40 180 0 200 Z" />
        </svg>
      </motion.div>

      <div className="z-10 w-full max-w-[370px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Rangkaian Acara
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Rundown Silaturahmi
          </h2>
          <JasmineDivider className="my-3" />
        </motion.div>

        {/* Timeline Vertikal dengan Ukiran Gebyok */}
        <div className="relative mt-6 space-y-4 text-left">
          {/* Garis Vertikal Timeline */}
          <div className="absolute left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#B08968] to-[#D4AF37]/40" />

          {events.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex items-start gap-3.5 group"
              >
                {/* Timeline Icon Node */}
                <div className="relative z-10 flex-shrink-0 w-11 h-11 rounded-full bg-[#4A2E1B] border-2 border-[#D4AF37] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {event.icon}
                </div>

                {/* Event Card */}
                <div className="flex-1 bg-[#F5EFE6] border border-[#B08968]/30 rounded-xl p-3.5 shadow-sm group-hover:border-[#B08968] transition-colors">
                  <div className="flex items-center justify-between gap-2 border-b border-[#B08968]/20 pb-1.5 mb-1.5">
                    <span className="text-[11px] font-sans font-semibold tracking-wide text-[#B08968]">
                      {event.time}
                    </span>
                    <span className="text-[10px] font-mono text-[#D4AF37] bg-[#4A2E1B] px-1.5 py-0.5 rounded">
                      Agenda 0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm font-bold text-[#4A2E1B]">
                    {event.title}
                  </h3>
                  <p className="font-lora text-xs text-[#2C1A0E]/80 mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <GebyokDivider className="mt-8" />
      </div>
    </section>
  );
};
