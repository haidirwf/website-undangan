import React, { useState, useEffect } from 'react';
import { CoverOverlay } from './components/CoverOverlay';
import { HeroSection } from './components/HeroSection';
import { GreetingSection } from './components/GreetingSection';
import { RundownSection } from './components/RundownSection';
import { DresscodeSection } from './components/DresscodeSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { GiftSection } from './components/GiftSection';
import { RsvpSection } from './components/RsvpSection';
import { FooterSection } from './components/FooterSection';

export const App: React.FC = () => {
  const [isCoverOpen, setIsCoverOpen] = useState(true);
  const [guestName, setGuestName] = useState('Tamu Undangan');

  useEffect(() => {
    // Matikan pemulihan scroll otomatis browser agar selalu mulai dari paling atas
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Parse query parameter ?to=Nama+Tamu
    const searchParams = new URLSearchParams(window.location.search);
    const toParam = searchParams.get('to');
    if (toParam && toParam.trim()) {
      setGuestName(toParam.trim());
    }
  }, []);

  // Kunci scroll halaman selama cover pembuka masih aktif
  useEffect(() => {
    if (isCoverOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isCoverOpen]);

  const handleOpenInvitation = () => {
    window.scrollTo(0, 0);
    setIsCoverOpen(false);
  };

  return (
    // Outer Desktop Background (Dark Brown solid with subtle traditional batik ambient)
    <div className={`min-h-screen w-full bg-[#1A0F08] flex justify-center items-center py-0 sm:py-6 relative ${isCoverOpen ? 'h-screen overflow-hidden' : 'overflow-x-hidden'}`}>
      {/* Subtle outer decorative pattern for desktop */}
      <div
        className="fixed inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px), radial-gradient(#B08968 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px',
        }}
      />

      {/* Fixed Mobile Portrait Container: max-width: 430px; dikunci dari scroll sebelum tombol dibuka */}
      <main className={`w-full max-w-[430px] bg-[#F5EFE6] text-[#2C1A0E] shadow-2xl relative border-x border-[#4A2E1B]/40 ${
        isCoverOpen ? 'h-screen overflow-hidden' : 'min-h-screen overflow-x-hidden'
      }`}>
        {/* Cover Pembuka (Overlay 100vh) */}
        <CoverOverlay
          isOpen={isCoverOpen}
          onOpen={handleOpenInvitation}
          guestName={guestName}
        />

        {/* Hero Section */}
        <HeroSection />

        {/* Sambutan Singkat */}
        <GreetingSection />

        {/* Rundown / Rangkaian Acara */}
        <RundownSection />

        {/* Tata Busana / Dress Code Jawa */}
        <DresscodeSection />

        {/* Galeri Foto */}
        <GallerySection />

        {/* Lokasi Acara (Google Maps) */}
        <LocationSection />

        {/* Pemberitahuan Tanda Kasih / Hadiah */}
        <GiftSection />

        {/* Konfirmasi Kehadiran (RSVP) & Ucapan */}
        <RsvpSection initialGuestName={guestName !== 'Tamu Undangan' ? guestName : ''} />

        {/* Footer */}
        <FooterSection />
      </main>
    </div>
  );
};

export default App;
