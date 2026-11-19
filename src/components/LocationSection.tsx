import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass } from 'lucide-react';
import { JasmineDivider, CornerOrnament } from './ornaments/JavaneseOrnaments';

export const LocationSection: React.FC = () => {
  const venueName = 'Kediaman Bidan Siti Rochma';
  const venueAddress = 'Cluster Padova Bawah, Villa Mutiara Cikarang 2 Blok H2 No. 21, Sukasejati, Cikarang Selatan, Bekasi, Jawa Barat';
  const mapsSearchQuery = encodeURIComponent('Cluster Padova Bawah, Villa Mutiara Cikarang 2 Blok H2 No. 21, Sukasejati, Cikarang Selatan, Bekasi');
  const mapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${mapsSearchQuery}`;

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center bg-[#FAF6F0] border-t border-[#B08968]/20">
      <div className="z-10 w-full max-w-[370px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Petunjuk Arah
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Lokasi Acara
          </h2>
          <JasmineDivider className="my-3" />
        </motion.div>

        {/* Card Lokasi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative bg-[#F5EFE6] border border-[#B08968]/40 rounded-2xl p-4 shadow-sm text-center mt-3"
        >
          <div className="absolute top-2 left-2 pointer-events-none">
            <CornerOrnament position="top-left" size={28} />
          </div>
          <div className="absolute top-2 right-2 pointer-events-none">
            <CornerOrnament position="top-right" size={28} />
          </div>

          <div className="w-10 h-10 rounded-full bg-[#4A2E1B] text-[#E5C158] mx-auto flex items-center justify-center mb-2 shadow-sm">
            <MapPin className="w-5 h-5" />
          </div>

          <h3 className="font-serif text-base font-bold text-[#4A2E1B]">
            {venueName}
          </h3>

          <p className="font-lora text-xs text-[#2C1A0E]/80 mt-1.5 leading-relaxed px-2 font-medium">
            {venueAddress}
          </p>

          <div className="my-2.5 inline-block bg-[#FAF6F0] border border-[#B08968]/30 px-3 py-1 rounded-full">
            <span className="text-[11px] font-sans font-semibold text-[#4A2E1B]">
              Patokan: Blok H2 No. 21 (Padova Bawah)
            </span>
          </div>

          {/* Google Maps Embed Iframe */}
          <div className="mt-3 rounded-xl overflow-hidden border border-[#B08968]/30 shadow-inner aspect-[4/3] w-full bg-[#E8DFD1] relative">
            <iframe
              title="Peta Lokasi Acara"
              src={`https://maps.google.com/maps?q=${encodeURIComponent('Cluster Padova Bawah, Villa Mutiara Cikarang 2 Blok H2 No. 21')}&t=&z=17&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-[0.2] contrast-[1.05]"
            />
          </div>

          {/* Tombol Buka di Google Maps */}
          <div className="mt-4">
            <a
              href={mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#4A2E1B] hover:bg-[#351F11] text-[#F5EFE6] font-serif text-xs font-semibold tracking-wider transition-colors shadow active:scale-98 border border-[#D4AF37]/50"
            >
              <Navigation className="w-4 h-4 text-[#E5C158]" />
              <span>Buka di Google Maps (Blok H2 No. 21)</span>
            </a>
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-sans text-[#B08968]">
            <Compass className="w-3.5 h-3.5" />
            <span>Tersedia area parkir yang luas & nyaman</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
