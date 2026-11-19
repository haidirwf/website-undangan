import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, MessageSquare, Users, AlertCircle, Heart } from 'lucide-react';
import { RSVP, AttendanceStatus } from '../types';
import { fetchRSVPs, insertRSVP, isSupabaseConfigured, supabase } from '../lib/supabase';
import { JasmineDivider, GununganWayang } from './ornaments/JavaneseOrnaments';

interface RsvpSectionProps {
  initialGuestName?: string;
}

export const RsvpSection: React.FC<RsvpSectionProps> = ({ initialGuestName = '' }) => {
  const [nama, setNama] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<AttendanceStatus>('Hadir');
  const [guests, setGuests] = useState<number>(1);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  // Load RSVPs on mount
  useEffect(() => {
    loadData();

    // Setup Supabase Realtime subscription if configured
    if (isSupabaseConfigured && supabase) {
      const client = supabase;
      const channel = client
        .channel('public:rsvps')
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'rsvps' },
          (payload) => {
            const newRsvp = payload.new as RSVP;
            setRsvps((prev) => [newRsvp, ...prev.filter((item) => item.id !== newRsvp.id)]);
          }
        )
        .subscribe();

      return () => {
        client.removeChannel(channel);
      };
    }
  }, []);

  // Sync initialGuestName if provided and not yet filled
  useEffect(() => {
    if (initialGuestName && !nama) {
      setNama(initialGuestName);
    }
  }, [initialGuestName]);

  const loadData = async () => {
    const list = await fetchRSVPs();
    setRsvps(list);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!nama.trim()) {
      setErrorMsg('Mohon isi nama lengkap Anda.');
      return;
    }

    setLoading(true);
    const result = await insertRSVP({
      nama: nama.trim(),
      attendance,
      guests: Number(guests) || 1,
      message: message.trim(),
    });
    setLoading(false);

    if (result.success) {
      setSuccessMsg('Matur nuwun! Konfirmasi kehadiran & ucapan Anda berhasil dikirim.');
      setMessage('');
      if (result.data) {
        setRsvps((prev) => [result.data!, ...prev.filter((item) => item.id !== result.data!.id)]);
      }
      setTimeout(() => setSuccessMsg(''), 6000);
    } else {
      setErrorMsg(result.error || 'Terjadi kendala saat mengirim. Silakan coba kembali.');
    }
  };

  // Helper badge color bernuansa hijau dan merah halus
  const getBadgeStyle = (status: AttendanceStatus) => {
    switch (status) {
      case 'Hadir':
        return 'bg-[#EAF5EE] text-[#1E562A] border border-[#B7E4C7] font-medium';
      case 'Tidak Hadir':
        return 'bg-[#FDF0F0] text-[#992626] border border-[#F8C8C8] font-medium';
      case 'Ragu':
      default:
        return 'bg-[#FAF3E8] text-[#7A5626] border border-[#E0D0B6] font-medium';
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return '';
    }
  };

  return (
    <section className="relative w-full py-12 px-6 flex flex-col items-center bg-[#F5EFE6] overflow-hidden">
      {/* Siluet Wayang / Pendopo Redup di Background Bawah */}
      <div className="absolute -bottom-10 inset-x-0 flex justify-center opacity-10 pointer-events-none">
        <GununganWayang className="w-96 h-96" color="#4A2E1B" accentColor="#4A2E1B" />
      </div>

      <div className="z-10 w-full max-w-[370px]">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[11px] font-sans tracking-[0.2em] text-[#B08968] font-semibold uppercase">
            Reservasi & Doa Restu
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#4A2E1B] mt-1">
            Konfirmasi Kehadiran
          </h2>
          <JasmineDivider className="my-3" />
          <p className="font-lora text-xs text-[#2C1A0E]/75 px-2">
            Mohon kesediaan Bapak/Ibu/Saudara/i untuk mengonfirmasi kehadiran demi kelancaran jamuan kami.
          </p>
        </motion.div>

        {/* Form RSVP */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          onSubmit={handleSubmit}
          className="mt-6 bg-[#FAF6F0] border border-[#B08968]/40 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5"
        >
          {/* Input Nama */}
          <div>
            <label className="block text-[11px] font-sans font-semibold text-[#4A2E1B] uppercase tracking-wider mb-1">
              Nama Lengkap <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Contoh: Bpk. Joko Santoso"
              required
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#B08968]/40 bg-[#F5EFE6] text-xs font-sans text-[#2C1A0E] focus:outline-none focus:border-[#4A2E1B] focus:ring-1 focus:ring-[#4A2E1B] transition-colors"
            />
          </div>

          {/* Status Kehadiran dengan Warna Hijau & Merah Halus */}
          <div>
            <label className="block text-[11px] font-sans font-semibold text-[#4A2E1B] uppercase tracking-wider mb-1.5">
              Konfirmasi Kehadiran <span className="text-red-600">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {/* Tombol Hadir (Hijau Halus) */}
              <button
                type="button"
                onClick={() => setAttendance('Hadir')}
                className={`py-2.5 px-1 text-center rounded-xl text-xs font-sans transition-all border ${
                  attendance === 'Hadir'
                    ? 'bg-[#2D6A4F] text-white border-[#2D6A4F] font-semibold shadow-sm'
                    : 'bg-[#EAF5EE] text-[#225732] border-[#B7E4C7] hover:bg-[#D8EFE0]'
                }`}
              >
                Hadir
              </button>

              {/* Tombol Tidak Hadir (Merah Halus) */}
              <button
                type="button"
                onClick={() => setAttendance('Tidak Hadir')}
                className={`py-2.5 px-1 text-center rounded-xl text-xs font-sans transition-all border ${
                  attendance === 'Tidak Hadir'
                    ? 'bg-[#A33B3B] text-white border-[#A33B3B] font-semibold shadow-sm'
                    : 'bg-[#FDF0F0] text-[#8C2B2B] border-[#F8C8C8] hover:bg-[#FBE4E4]'
                }`}
              >
                Tidak Hadir
              </button>

              {/* Tombol Masih Ragu */}
              <button
                type="button"
                onClick={() => setAttendance('Ragu')}
                className={`py-2.5 px-1 text-center rounded-xl text-xs font-sans transition-all border ${
                  attendance === 'Ragu'
                    ? 'bg-[#8C6D46] text-white border-[#8C6D46] font-semibold shadow-sm'
                    : 'bg-[#FAF3E8] text-[#7A5626] border-[#E0D0B6] hover:bg-[#F0E4D0]'
                }`}
              >
                Masih Ragu
              </button>
            </div>
          </div>

          {/* Jumlah Tamu (jika hadir) */}
          {attendance === 'Hadir' && (
            <div>
              <label className="block text-[11px] font-sans font-semibold text-[#4A2E1B] uppercase tracking-wider mb-1">
                Jumlah Tamu (Orang)
              </label>
              <div className="relative">
                <select
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#B08968]/40 bg-[#F5EFE6] text-xs font-sans text-[#2C1A0E] focus:outline-none focus:border-[#4A2E1B] transition-colors appearance-none"
                >
                  <option value={1}>1 Orang</option>
                  <option value={2}>2 Orang</option>
                  <option value={3}>3 Orang</option>
                  <option value={4}>4 Orang</option>
                  <option value={5}>5 Orang atau lebih</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#B08968]">
                  <Users className="w-4 h-4" />
                </div>
              </div>
            </div>
          )}

          {/* Ucapan / Doa */}
          <div>
            <label className="block text-[11px] font-sans font-semibold text-[#4A2E1B] uppercase tracking-wider mb-1">
              Ucapan / Doa Restu
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tuliskan ucapan selamat ulang tahun atau doa untuk Bidan Hj Siti Rochma & Mutiara Bunda..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#B08968]/40 bg-[#F5EFE6] text-xs font-sans text-[#2C1A0E] focus:outline-none focus:border-[#4A2E1B] focus:ring-1 focus:ring-[#4A2E1B] transition-colors resize-none"
            />
          </div>

          {/* Messages */}
          {errorMsg && (
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-red-50 text-red-700 text-xs font-sans border border-red-200">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="flex items-center gap-1.5 p-2 rounded-lg bg-green-50 text-green-800 text-xs font-sans border border-green-200">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-[#4A2E1B] hover:bg-[#351F11] text-[#F5EFE6] font-serif text-xs font-semibold tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 disabled:opacity-70 border border-[#D4AF37]/50"
          >
            {loading ? (
              <span>Mengirim data...</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5 text-[#E5C158]" />
                <span>Kirim Konfirmasi</span>
              </>
            )}
          </button>
        </motion.form>

        {/* Daftar Ucapan Real-Time */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
              <h3 className="font-serif text-sm font-bold text-[#4A2E1B]">
                Untaian Doa & Ucapan
              </h3>
            </div>
            <span className="text-[11px] font-sans font-medium text-[#B08968] bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#B08968]/30">
              {rsvps.length} Pesan
            </span>
          </div>

          {/* Scrollable Container */}
          <div className="w-full max-h-[360px] overflow-y-auto space-y-2.5 pr-1 custom-scrollbar">
            {rsvps.length === 0 ? (
              <div className="text-center py-6 bg-[#FAF6F0] rounded-xl border border-[#B08968]/30">
                <Heart className="w-6 h-6 text-[#B08968] mx-auto mb-1.5 opacity-60" />
                <p className="text-xs font-lora text-[#2C1A0E]/70">
                  Belum ada ucapan. Jadilah yang pertama memberikan doa restu!
                </p>
              </div>
            ) : (
              rsvps.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF6F0] border border-[#B08968]/30 rounded-xl p-3 shadow-xs hover:border-[#B08968]/60 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-serif text-xs font-bold text-[#4A2E1B] leading-snug">
                      {item.nama}
                    </p>
                    <span
                      className={`text-[9px] font-sans px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold whitespace-nowrap ${getBadgeStyle(
                        item.attendance
                      )}`}
                    >
                      {item.attendance}
                    </span>
                  </div>

                  {item.message ? (
                    <p className="font-lora text-xs text-[#2C1A0E]/85 mt-1.5 leading-relaxed bg-[#F5EFE6]/60 p-2 rounded-lg border border-[#B08968]/15">
                      "{item.message}"
                    </p>
                  ) : null}

                  <div className="mt-1.5 text-[9px] font-sans text-[#B08968] text-right">
                    {formatDate(item.created_at)}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
