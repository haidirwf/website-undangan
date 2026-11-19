-- Skema Tabel RSVP Undangan Digital Mutiara Bunda (Bidan Siti Rochma)
-- Jalankan query ini di SQL Editor dashboard Supabase Anda

CREATE TABLE IF NOT EXISTS public.rsvps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama TEXT NOT NULL,
    attendance TEXT NOT NULL CHECK (attendance IN ('Hadir', 'Tidak Hadir', 'Ragu')),
    guests INT2 DEFAULT 1,
    message TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Aktifkan Row Level Security (RLS)
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;

-- Kebijakan RLS: Anonim dapat membaca semua data ucapan & kehadiran
CREATE POLICY "Public Read Access"
ON public.rsvps
FOR SELECT
TO anon, authenticated
USING (true);

-- Kebijakan RLS: Anonim dapat menambahkan konfirmasi kehadiran (INSERT)
CREATE POLICY "Public Insert Access"
ON public.rsvps
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Opsional: Realtime publication agar ucapan langsung muncul tanpa refresh
ALTER PUBLICATION supabase_realtime ADD TABLE public.rsvps;
