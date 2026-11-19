import React from 'react';

// Ornamen Janur Kuning untuk sudut kiri dan kanan atas
export const JanurCorner: React.FC<{ position: 'left' | 'right'; className?: string }> = ({ position, className = '' }) => {
  const isLeft = position === 'left';
  return (
    <div
      className={`absolute top-0 ${isLeft ? 'left-0 origin-top-left animate-sway-left' : 'right-0 origin-top-right animate-sway-right'} pointer-events-none z-20 ${className}`}
      style={{ width: '110px', height: '140px' }}
    >
      <svg
        viewBox="0 0 120 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full drop-shadow-md ${isLeft ? '' : 'scale-x-[-1]'}`}
      >
        {/* Batang Janur Utama */}
        <path
          d="M 5 0 C 15 40 40 85 85 145"
          stroke="#B39126"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M 5 0 C 15 40 40 85 85 145"
          stroke="#E5C158"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Anyaman / Rumbai Daun Janur Kuning Khas Tradisi Jawa */}
        <path d="M 12 18 Q 30 18 48 30 Q 32 32 18 24 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 18 32 Q 45 35 65 52 Q 46 54 26 40 Z" fill="#E5C158" opacity="0.95" />
        <path d="M 28 48 Q 62 55 82 78 Q 60 78 37 60 Z" fill="#D4AF37" opacity="0.9" />
        <path d="M 40 68 Q 78 78 98 108 Q 76 104 49 82 Z" fill="#E5C158" opacity="0.95" />
        <path d="M 55 92 Q 92 105 110 138 Q 88 130 65 106 Z" fill="#D4AF37" opacity="0.85" />
        
        {/* Rumbai gantung tipis */}
        <path d="M 22 26 C 24 45 28 65 24 85" stroke="#E5C158" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M 38 45 C 42 70 45 95 40 120" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M 58 72 C 64 95 68 120 62 145" stroke="#E5C158" strokeWidth="1.5" />
        <circle cx="24" cy="86" r="2.5" fill="#D4AF37" />
        <circle cx="40" cy="121" r="2.5" fill="#E5C158" />
        <circle cx="62" cy="146" r="2.5" fill="#D4AF37" />
      </svg>
    </div>
  );
};

// Ornamen Gunungan Wayang Klasik Jawa
export const GununganWayang: React.FC<{ className?: string; color?: string; accentColor?: string }> = ({
  className = 'w-32 h-44',
  color = '#4A2E1B',
  accentColor = '#B08968',
}) => {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-transform duration-700`}
    >
      <defs>
        <radialGradient id="gununganGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo Lembut */}
      <ellipse cx="100" cy="140" rx="90" ry="120" fill="url(#gununganGlow)" />

      {/* Kontur Luar Gunungan / Kayon */}
      <path
        d="M 100 8
           C 112 35 145 60 162 95
           C 178 130 182 165 174 200
           C 168 225 152 245 130 252
           L 130 268
           L 70 268
           L 70 252
           C 48 245 32 225 26 200
           C 18 165 22 130 38 95
           C 55 60 88 35 100 8 Z"
        fill={color}
        stroke={accentColor}
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Garis batas dalam */}
      <path
        d="M 100 18
           C 110 42 138 65 152 96
           C 166 128 170 158 163 190
           C 158 212 144 230 124 238
           L 76 238
           C 56 230 42 212 37 190
           C 30 158 34 128 48 96
           C 62 65 90 42 100 18 Z"
        stroke={accentColor}
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="none"
        opacity="0.8"
      />

      {/* Gagang Cempurit Bawah */}
      <rect x="94" y="252" width="12" height="26" rx="3" fill={accentColor} />

      {/* Pohon Hayat / Batang Pohon Kehidupan Tengah */}
      <path
        d="M 100 45 L 100 230"
        stroke={accentColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Cabang & Ranting Pohon Hayat */}
      <path
        d="M 100 180 C 120 170 140 180 150 165 C 130 160 115 172 100 174
           M 100 180 C 80 170 60 180 50 165 C 70 160 85 172 100 174"
        stroke={accentColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 100 145 C 125 130 145 142 155 125 C 135 120 115 135 100 138
           M 100 145 C 75 130 55 142 45 125 C 65 120 85 135 100 138"
        stroke={accentColor}
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M 100 110 C 120 95 138 105 142 90 C 125 85 112 100 100 102
           M 100 110 C 80 95 62 105 58 90 C 75 85 88 100 100 102"
        stroke={accentColor}
        strokeWidth="1.8"
        fill="none"
      />
      <path
        d="M 100 75 C 112 65 122 72 125 60 C 114 58 107 68 100 70
           M 100 75 C 88 65 78 72 75 60 C 86 58 93 68 100 70"
        stroke={accentColor}
        strokeWidth="1.5"
        fill="none"
      />

      {/* Gapura / Rumah Pendopo di Pangkal Gunungan */}
      <path
        d="M 75 238 L 75 205 L 100 185 L 125 205 L 125 238 Z"
        stroke={accentColor}
        strokeWidth="2"
        fill="#351F11"
      />
      {/* Pintu Pendopo */}
      <path
        d="M 88 238 L 88 212 Q 100 205 112 212 L 112 238 Z"
        fill={accentColor}
      />
      <circle cx="100" cy="45" r="5" fill="#D4AF37" />
    </svg>
  );
};

// Garis Pemisah Bunga Melati (Jasmine Divider)
export const JasmineDivider: React.FC<{ className?: string }> = ({ className = 'my-4' }) => {
  return (
    <div className={`flex items-center justify-center space-x-2 select-none ${className}`}>
      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#B08968] to-[#B08968]" />
      
      {/* Kuntum Melati Kiri */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37" className="rotate-45">
        <path d="M12 2C13.5 6 18 10.5 22 12C18 13.5 13.5 18 12 22C10.5 18 6 13.5 2 12C6 10.5 10.5 6 12 2Z" />
      </svg>
      
      {/* Melati Mekar Utama */}
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none" className="drop-shadow-sm">
        <circle cx="16" cy="16" r="3" fill="#D4AF37" />
        <ellipse cx="16" cy="7" rx="3.5" ry="6" fill="#F5EFE6" stroke="#B08968" strokeWidth="1.2" />
        <ellipse cx="16" cy="25" rx="3.5" ry="6" fill="#F5EFE6" stroke="#B08968" strokeWidth="1.2" />
        <ellipse cx="7" cy="16" rx="6" ry="3.5" fill="#F5EFE6" stroke="#B08968" strokeWidth="1.2" />
        <ellipse cx="25" cy="16" rx="6" ry="3.5" fill="#F5EFE6" stroke="#B08968" strokeWidth="1.2" />
        <circle cx="16" cy="16" r="2.5" fill="#D4AF37" />
      </svg>

      {/* Kuntum Melati Kanan */}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#D4AF37" className="rotate-45">
        <path d="M12 2C13.5 6 18 10.5 22 12C18 13.5 13.5 18 12 22C10.5 18 6 13.5 2 12C6 10.5 10.5 6 12 2Z" />
      </svg>

      <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#B08968] to-[#B08968]" />
    </div>
  );
};

// Ornamen Sudut Batik Kawung / Ukiran Tradisional Jawa
export const CornerOrnament: React.FC<{
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}> = ({ position, className = '', size = 48 }) => {
  let rotation = 'rotate-0';
  if (position === 'top-right') rotation = 'rotate-90';
  if (position === 'bottom-right') rotation = 'rotate-180';
  if (position === 'bottom-left') rotation = '-rotate-90';

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`pointer-events-none ${rotation} ${className}`}
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Sudut Siku berukir */}
        <path d="M 4 56 L 4 4 L 56 4" stroke="#B08968" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 10 50 L 10 10 L 50 10" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 2" />
        
        {/* Lengkung sulur Jawa */}
        <path
          d="M 4 4 C 18 4 30 16 30 30 C 30 20 20 10 10 10 C 20 10 24 24 16 32 C 10 38 4 30 4 20"
          stroke="#4A2E1B"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Motif Bunga / Kawung kecil */}
        <circle cx="16" cy="16" r="3.5" fill="#D4AF37" stroke="#4A2E1B" strokeWidth="1" />
      </svg>
    </div>
  );
};

// Ornamen Gebyok / Ukiran Kayu Khas Jawa untuk Pemisah Sisi
export const GebyokDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden flex items-center justify-center opacity-85 ${className}`}>
      <svg viewBox="0 0 320 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[280px] h-6">
        <path
          d="M 10 14 Q 40 4 80 14 T 160 14 T 240 14 T 310 14"
          stroke="#B08968"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="80" cy="14" r="3" fill="#D4AF37" />
        <circle cx="160" cy="14" r="4.5" fill="#4A2E1B" stroke="#D4AF37" strokeWidth="1" />
        <circle cx="240" cy="14" r="3" fill="#D4AF37" />
        <path d="M 160 2 L 160 26" stroke="#B08968" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
  );
};

// ==========================================
// KOMPONEN JAWA BARU (PENGAYAAN TRADISIONAL)
// ==========================================

// 1. Pita Pembatas Motif Batik Kawung & Parang Seling
export const BatikBorder: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden py-1.5 flex justify-center items-center select-none ${className}`}>
      <svg
        viewBox="0 0 400 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[400px] h-4 opacity-75"
        preserveAspectRatio="repeat"
      >
        <pattern id="batikPattern" width="40" height="16" patternUnits="userSpaceOnUse">
          {/* Garis batas atas & bawah tipis */}
          <line x1="0" y1="1" x2="40" y2="1" stroke="#B08968" strokeWidth="1" strokeDasharray="3 1" />
          <line x1="0" y1="15" x2="40" y2="15" stroke="#B08968" strokeWidth="1" strokeDasharray="3 1" />

          {/* Motif Parang Seling miring */}
          <path d="M 2 14 L 14 2 M 6 14 L 18 2" stroke="#4A2E1B" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="10" cy="8" r="1.5" fill="#D4AF37" />

          {/* Motif Kawung 4 Daun Tengah */}
          <ellipse cx="26" cy="4" rx="3.5" ry="2" fill="#D4AF37" opacity="0.85" />
          <ellipse cx="26" cy="12" rx="3.5" ry="2" fill="#D4AF37" opacity="0.85" />
          <ellipse cx="22" cy="8" rx="2" ry="3.5" fill="#B08968" opacity="0.85" />
          <ellipse cx="30" cy="8" rx="2" ry="3.5" fill="#B08968" opacity="0.85" />
          <circle cx="26" cy="8" r="1.2" fill="#4A2E1B" />

          {/* Titik pembatas */}
          <circle cx="38" cy="8" r="1" fill="#B08968" />
        </pattern>
        <rect width="400" height="16" fill="url(#batikPattern)" />
      </svg>
    </div>
  );
};

// 2. Kaligrafi Aksara Jawa Berbingkai Estetis
export const AksaraJawaBadge: React.FC<{
  type: 'sugeng-rawuh' | 'matur-nuwun';
  className?: string;
}> = ({ type, className = '' }) => {
  const isSugeng = type === 'sugeng-rawuh';
  const aksaraText = isSugeng ? 'ꦱꦸꦒꦼꦁꦫꦮꦸꦃ' : 'ꦩꦠꦸꦂꦤꦸꦮꦸꦤ꧀';
  const latinText = isSugeng ? 'Sugeng Rawuh' : 'Matur Nuwun';

  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#D4AF37]" />
        <span className="font-serif text-sm tracking-widest text-[#4A2E1B] font-semibold opacity-90 px-1">
          {aksaraText}
        </span>
        <div className="h-[1px] w-6 bg-gradient-to-l from-transparent to-[#D4AF37]" />
      </div>
      <span className="text-[10px] font-sans font-medium tracking-[0.25em] text-[#B08968] uppercase -mt-0.5">
        {latinText}
      </span>
    </div>
  );
};

// 3. Ornamen Mahkota Joglo / Gapura Atap Ukir Jawa
export const JogloCrown: React.FC<{ className?: string; width?: number }> = ({ className = '', width = 120 }) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <svg
        viewBox="0 0 160 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: `${width}px`, height: `${(width * 36) / 160}px` }}
      >
        {/* Atap Brunjung Joglo */}
        <path
          d="M 80 2 L 68 14 L 30 18 L 10 28 L 80 22 L 150 28 L 130 18 L 92 14 Z"
          fill="#4A2E1B"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
        {/* Lambang Sari / Puncak Mahkota Emas */}
        <path
          d="M 80 2 L 77 8 L 80 12 L 83 8 Z"
          fill="#E5C158"
        />
        <circle cx="80" cy="1" r="2" fill="#D4AF37" />
        {/* Sulur sayap kiri & kanan */}
        <path
          d="M 10 28 C 18 24 24 28 32 26 C 24 28 18 32 10 28 Z"
          fill="#D4AF37"
        />
        <path
          d="M 150 28 C 142 24 136 28 128 26 C 136 28 142 32 150 28 Z"
          fill="#D4AF37"
        />
        {/* Untaian gantung tengah kecil */}
        <circle cx="80" cy="27" r="1.8" fill="#D4AF37" />
        <circle cx="80" cy="32" r="1.2" fill="#B08968" />
      </svg>
    </div>
  );
};

// 4. Untaian Ronce Bunga Melati Gantung (Melati Manten / Tasyakuran)
export const RonceMelatiGarland: React.FC<{
  position: 'left' | 'right';
  className?: string;
  length?: number;
}> = ({ position, className = '', length = 5 }) => {
  const isLeft = position === 'left';
  const nodes = Array.from({ length });

  return (
    <div
      className={`absolute top-0 ${isLeft ? 'left-3 sm:left-4' : 'right-3 sm:right-4'} flex flex-col items-center pointer-events-none z-10 opacity-80 ${className}`}
    >
      {/* Tali gantung awal */}
      <div className="w-[1px] h-3 bg-[#B08968]" />
      
      {/* Untaian Kuntum Melati Bertingkat */}
      {nodes.map((_, i) => (
        <React.Fragment key={i}>
          <div className="w-2.5 h-2.5 rounded-full bg-[#FAF6F0] border border-[#D4AF37] shadow-xs flex items-center justify-center my-[2px]">
            <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
          </div>
          {i < nodes.length - 1 && <div className="w-[1px] h-2 bg-[#B08968]/70" />}
        </React.Fragment>
      ))}

      {/* Kuncup Bunga Kantil di Ujung Bawah */}
      <div className="w-[1px] h-2.5 bg-[#D4AF37]" />
      <svg width="8" height="14" viewBox="0 0 10 18" fill="none">
        <path d="M 5 0 C 8 4 9 10 5 18 C 1 10 2 4 5 0 Z" fill="#E5C158" stroke="#B08968" strokeWidth="0.8" />
      </svg>
    </div>
  );
};

// 5. Siluet Wayang Kulit Halus (Tokoh Pewayangan Jawa)
export const WayangSilhouette: React.FC<{
  side: 'left' | 'right';
  className?: string;
}> = ({ side, className = '' }) => {
  const isLeft = side === 'left';

  return (
    <div className={`pointer-events-none select-none opacity-[0.06] ${className}`}>
      <svg
        viewBox="0 0 120 220"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-28 h-52 text-[#4A2E1B] ${isLeft ? '' : 'scale-x-[-1]'}`}
      >
        {/* Mahkota / Jamang Wayang */}
        <path d="M 60 10 C 65 2 75 8 72 20 C 70 28 65 32 55 35 Z" />
        <path d="M 55 35 C 50 30 52 24 60 22 Z" />
        {/* Profil Muka Halus Wayang Purwa */}
        <path d="M 55 35 L 72 45 L 68 52 L 60 52 L 58 58 L 52 56 L 50 50 Z" />
        {/* Sumping / Hiasan Telinga */}
        <circle cx="48" cy="48" r="4" />
        {/* Leher & Bahu */}
        <path d="M 52 56 C 45 65 38 78 40 92 L 60 88 C 62 76 60 65 52 56 Z" />
        {/* Tangan Wayang Melengkung Luwes */}
        <path d="M 40 92 C 28 110 20 135 24 150 C 27 150 32 142 34 130 C 36 118 42 105 45 95 Z" />
        {/* Badan & Dodot / Kain Jarik Wayang */}
        <path d="M 50 90 C 52 110 48 135 45 160 C 55 170 65 175 75 165 C 68 140 65 115 62 90 Z" />
        {/* Celana / Uncal Kencana Wayang */}
        <path d="M 45 160 L 40 200 L 52 205 L 56 168 Z" />
        <path d="M 65 165 L 68 200 L 78 202 L 72 165 Z" />
      </svg>
    </div>
  );
};
