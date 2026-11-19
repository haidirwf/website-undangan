# Website Undangan Digital — Ulang Tahun & Reuni Alumni Mutiara Bunda (Bidan Siti Rochma)

Website undangan digital bergaya undangan pernikahan tradisional Jawa klasik, datar, dan simpel (referensi estetika wekita.co & our-wedding.link/design/traditional-java).

## 1. Fitur Utama
- **Fixed Mobile Portrait (Non-Responsive Container)**: Dikunci pada `max-width: 430px` dengan background desktop coklat tua beraksen batik redup.
- **Cover Pembuka (100vh Overlay)**: Ornamen Gunungan Wayang, pembacaan nama tamu dinamis (`?to=Nama+Tamu`), efek konfeti emas, dan tombol "Buka Undangan".
- **Backsound Gamelan / Jawa Tradisional**: Pemutar audio gamelan lembut otomatis saat tombol dibuka, dilengkapi floating audio control (Play/Pause) di pojok kanan bawah dengan fallback Web Audio synthesizer.
- **Hero & Countdown Timer**: Ornamen Janur Kuning melengkung dengan animasi goyang halus (*sway*), bingkai foto lengkung Jawa bernuansa sepia, dan hitung mundur menuju 13 Desember 2026 09.00 WIB.
- **Sambutan Silaturahmi**: Teks sambutan paseduluran dengan siluet Gunungan dan untaian melati (*jasmine divider*).
- **Rundown Acara**: Timeline vertikal klasik berisi Temu Kangen, Makan-makan & Ramah Tamah, Doorprize, dan Pembagian Souvenir.
- **Galeri Foto**: Grid 2 kolom dengan ornamen sudut Jawa dan modal *lightbox zoom*.
- **Lokasi Acara**: Informasi gedung, rute peta, embed Google Maps, dan tombol direct link navigasi.
- **Buku Tamu / RSVP & Doa Restu**: Form konfirmasi kehadiran dan daftar ucapan real-time dengan Supabase (disertai fallback *localStorage* saat mode demo / offline).
- **Footer**: Kontak WhatsApp (0858-5466-4914) dan Instagram resmi Mutiara Bunda Bidan Siti Rochma.

## 2. Struktur Proyek
```
undangan/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
├── supabase/
│   └── schema.sql        # Skema SQL tabel rsvps dan RLS policy
└── src/
    ├── types/            # Tipe data TypeScript (RSVP, Attendance, Rundown)
    ├── lib/
    │   ├── audioManager.ts  # Audio player gamelan lembut
    │   └── supabase.ts      # Koneksi client Supabase & fallback
    ├── components/
    │   ├── ornaments/    # SVG Gunungan, Janur Kuning, Melati, Gebyok
    │   ├── CoverOverlay.tsx
    │   ├── HeroSection.tsx
    │   ├── CountdownTimer.tsx
    │   ├── GreetingSection.tsx
    │   ├── RundownSection.tsx
    │   ├── GallerySection.tsx
    │   ├── LocationSection.tsx
    │   ├── RsvpSection.tsx
    │   ├── FooterSection.tsx
    │   └── FloatingAudioButton.tsx
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

## 3. Menjalankan di Lokal

1. Pasang dependensi:
   ```bash
   npm install
   ```
2. Jalankan server pengembang:
   ```bash
   npm run dev
   ```
3. Buka di browser: `http://localhost:5173`
   - Uji nama tamu: `http://localhost:5173/?to=Bpk.+Hartono+dan+Keluarga`

## 4. Setup Database Supabase

1. Buat project baru di [Supabase](https://supabase.com/).
2. Masuk ke menu **SQL Editor**, buka file `supabase/schema.sql`, salin isinya dan klik **Run**:
   ```sql
   CREATE TABLE IF NOT EXISTS public.rsvps (
       id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
       nama TEXT NOT NULL,
       attendance TEXT NOT NULL CHECK (attendance IN ('Hadir', 'Tidak Hadir', 'Ragu')),
       guests INT2 DEFAULT 1,
       message TEXT,
       created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
   );

   ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

   CREATE POLICY "Public Read Access" ON public.rsvps FOR SELECT TO anon, authenticated USING (true);
   CREATE POLICY "Public Insert Access" ON public.rsvps FOR INSERT TO anon, authenticated WITH CHECK (true);
   ALTER PUBLICATION supabase_realtime ADD TABLE public.rsvps;
   ```
3. Buat file `.env` di root proyek:
   ```env
   VITE_SUPABASE_URL=https://<project-id>.supabase.co
   VITE_SUPABASE_ANON_KEY=<your-anon-key>
   ```

## 5. Deploy ke Vercel

1. Push repository ke GitHub / GitLab.
2. Impor repositori ke [Vercel](https://vercel.com/).
3. Pada bagian **Environment Variables** di Vercel, tambahkan:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Klik **Deploy**.
