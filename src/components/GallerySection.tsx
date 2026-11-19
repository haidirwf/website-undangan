import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { JasmineDivider, CornerOrnament, JogloCrown } from './ornaments/JavaneseOrnaments';

interface PhotoItem {
  id: number;
  url: string;
  caption: string;
  category: string;
}

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  const photos: PhotoItem[] = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=700&auto=format&fit=crop',
      caption: 'Pendopo Klasik Bernuansa Ukiran Jawa',
      category: 'Suasana Klasik',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=700&auto=format&fit=crop',
      caption: 'Detail Kebaya Tradisional & Jarik Batik',
      category: 'Busana Adat',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=700&auto=format&fit=crop',
      caption: 'Ornamen Ukiran Kayu Gebyok Jepara',
      category: 'Kesenian Tradisional',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=700&auto=format&fit=crop',
      caption: 'Perjamuan Ramah Tamah Bersama',
      category: 'Kehangatan Silaturahmi',
    },
  ];

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center bg-[#F5EFE6]">
      <div className="z-10 w-full max-w-[370px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <JogloCrown width={85} className="mb-1 opacity-80" />
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Dokumentasi & Kenangan
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Galeri Suasana
          </h2>
          <JasmineDivider className="my-3" />
          <p className="font-lora text-xs text-[#2C1A0E]/70 mb-6">
            Momen kebersamaan dan keindahan adat Jawa yang penuh kehangatan.
          </p>
        </motion.div>

        {/* 2-Column Photo Grid */}
        <div className="grid grid-cols-2 gap-3.5">
          {photos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative cursor-pointer rounded-xl overflow-hidden bg-[#FAF6F0] p-1.5 border border-[#B08968]/40 shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              {/* Corner Batik Accents */}
              <div className="absolute top-1 left-1 z-10 pointer-events-none">
                <CornerOrnament position="top-left" size={24} />
              </div>
              <div className="absolute bottom-1 right-1 z-10 pointer-events-none">
                <CornerOrnament position="bottom-right" size={24} />
              </div>

              {/* Photo Box */}
              <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden bg-[#E8DFD1]">
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover sepia-[0.25] group-hover:scale-110 group-hover:sepia-0 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-[#4A2E1B]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#FAF6F0]/90 flex items-center justify-center text-[#4A2E1B] shadow">
                    <ZoomIn className="w-4 h-4 text-[#4A2E1B]" />
                  </div>
                </div>
              </div>

              <p className="font-serif text-[11px] font-medium text-[#4A2E1B] mt-1.5 line-clamp-1">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-[390px] w-full bg-[#FAF6F0] rounded-2xl p-3 border-2 border-[#D4AF37] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-[#4A2E1B] text-[#F5EFE6] flex items-center justify-center hover:bg-[#351F11] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="rounded-xl overflow-hidden aspect-[4/5] bg-black">
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.caption}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3 text-center">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#B08968] font-semibold">
                  {selectedPhoto.category}
                </span>
                <p className="font-serif text-sm font-bold text-[#4A2E1B] mt-0.5">
                  {selectedPhoto.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
