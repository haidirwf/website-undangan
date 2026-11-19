import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { JanurCorner, JasmineDivider } from './ornaments/JavaneseOrnaments';
import { CountdownTimer } from './CountdownTimer';

export const HeroSection: React.FC = () => {
  const targetDate = '2026-12-13T09:00:00+07:00';

  // Google Calendar URL generator
  const createGoogleCalendarLink = () => {
    const title = encodeURIComponent('Ulang Tahun & Reuni Alumni Mutiara Bunda (Bidan Hj Siti Rochma)');
    const details = encodeURIComponent('Agenda: Registrasi & Temu Kangen, Makan-makan & Ramah Tamah, Doorprize, dan Pembagian Souvenir.');
    const location = encodeURIComponent('Cluster Padova Bawah, Villa Mutiara Cikarang 2 Blok H2 No. 21');
    const start = '20261213T020000Z'; // 09:00 WIB is 02:00 UTC
    const end = '20261213T070000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
  };

  return (
    <section className="relative w-full min-h-[84dvh] sm:min-h-[86dvh] pt-16 pb-6 px-6 flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#FAF6F0]">
      {/* Ornamen Janur Kuning Melengkung di Kiri & Kanan Atas */}
      <JanurCorner position="left" />
      <JanurCorner position="right" />

      {/* Decorative Top Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="z-10 mt-2"
      >
        <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#B08968] font-semibold border-b border-[#D4AF37]/40 pb-1">
          Walimatul Khitmah & Reuni Akbar
        </span>
      </motion.div>

      {/* Frame Foto Bidan Hj Siti Rochma (Bingkai Medali Emas Adat Jawa) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative my-4 z-10"
      >
        <div className="relative w-44 h-44 mx-auto p-2 rounded-full border-2 border-[#D4AF37] bg-[#FAF6F0] shadow-xl shadow-[#4A2E1B]/15">
          {/* Inner frame */}
          <div className="w-full h-full rounded-full overflow-hidden border border-[#B08968]/60 relative bg-[#FAF6F0]">
            <img
              src="/favicon.webp"
              alt="Bidan Hj Siti Rochma - Mutiara Bunda"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Soft Warm Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E1B]/15 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Golden Badge Ornament */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#4A2E1B] text-[#E5C158] border border-[#D4AF37] px-3.5 py-0.5 rounded-full text-[10px] font-serif shadow-md whitespace-nowrap">
            Mutiara Bunda
          </div>
        </div>
      </motion.div>

      {/* Judul & Nama Tokoh Utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="z-10 w-full"
      >
        <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] tracking-wide leading-tight">
          Ulang Tahun & Reuni
        </h2>
        <p className="font-serif text-sm text-[#B08968] tracking-widest uppercase mt-0.5 font-medium">
          Alumni Mutiara Bunda
        </p>

        <p className="font-script text-4xl text-[#4A2E1B] mt-2 mb-1">
          Bidan Hj Siti Rochma
        </p>

        <JasmineDivider className="my-2.5" />

        {/* Info Waktu & Tanggal */}
        <div className="space-y-1.5 text-[#4A2E1B] font-serif my-2.5">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#4A2E1B]">
            <Calendar className="w-4 h-4 text-[#D4AF37]" />
            <span>Minggu, 13 Desember 2026</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-[#4A2E1B]/80 font-sans">
            <Clock className="w-3.5 h-3.5 text-[#B08968]" />
            <span>09.00 WIB – Selesai</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="mt-3">
          <p className="text-[11px] font-sans tracking-wider text-[#B08968] uppercase font-semibold mb-1">
            Menghitung Hari
          </p>
          <CountdownTimer targetDate={targetDate} />
        </div>

        {/* Button Tambah ke Google Calendar */}
        <div className="mt-3 mb-1">
          <a
            href={createGoogleCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#B08968]/50 bg-[#FAF6F0] hover:bg-[#E8DFD1] text-[#4A2E1B] text-xs font-sans font-medium transition-all duration-200 shadow-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Simpan ke Google Calendar</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
