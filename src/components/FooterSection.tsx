import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { GununganWayang, JasmineDivider, AksaraJawaBadge, BatikBorder } from './ornaments/JavaneseOrnaments';

// Dedicated crisp SVGs for Instagram and WhatsApp
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const FooterSection: React.FC = () => {
  const instagramUrl = 'https://www.instagram.com/mutiarabunda_bidansitirochma/';
  const whatsappUrl = 'https://wa.me/6285854664914';

  return (
    <footer className="relative w-full pt-8 pb-20 px-6 flex flex-col items-center text-center bg-gradient-to-b from-[#F5EFE6] to-[#FAF6F0] border-t border-[#B08968]/30">
      {/* Pita Batik Atas Footer */}
      <BatikBorder className="mb-4 opacity-50" />

      <div className="z-10 w-full max-w-[360px] flex flex-col items-center">
        {/* Gunungan Silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GununganWayang className="w-14 h-20 opacity-80" color="#4A2E1B" accentColor="#D4AF37" />
        </motion.div>

        {/* Teks Penutup */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-3"
        >
          <p className="font-lora text-xs text-[#2C1A0E]/80 leading-relaxed">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu kepada Bidan Siti Rochma.
          </p>

          {/* Kaligrafi Aksara Jawa Matur Nuwun */}
          <AksaraJawaBadge type="matur-nuwun" className="my-3" />

          <p className="font-serif italic text-xs text-[#B08968]">
            Wassalamu’alaikum Warahmatullahi Wabarakatuh
          </p>

          <JasmineDivider className="my-4" />

          {/* Tokoh & Keluarga Besar */}
          <div className="my-2">
            <p className="font-script text-3xl text-[#4A2E1B]">
              Bidan Siti Rochma
            </p>
            <p className="font-serif text-xs font-semibold text-[#B08968] tracking-widest uppercase mt-0.5">
              & Keluarga Besar Mutiara Bunda
            </p>
          </div>

          {/* Social Links & Kontak */}
          <div className="mt-5 flex items-center justify-center gap-3">
            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Mutiara Bunda"
              className="w-10 h-10 rounded-full bg-[#4A2E1B] text-[#E5C158] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md border border-[#D4AF37]/50"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Bidan Siti Rochma"
              className="w-10 h-10 rounded-full bg-[#4A2E1B] text-[#E5C158] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md border border-[#D4AF37]/50"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
          </div>
          <p className="text-[10px] font-sans text-[#4A2E1B]/60 mt-2">
            Hubungi kami melalui WhatsApp: 0858-5466-4914
          </p>

          <div className="mt-8 pt-4 border-t border-[#B08968]/20 flex items-center justify-center gap-1 text-[10px] font-sans text-[#B08968]">
            <span>Dibuat dengan</span>
            <Heart className="w-3 h-3 text-red-700 fill-red-700 inline" />
            <span>untuk Reuni Mutiara Bunda</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
