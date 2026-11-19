import { createClient } from '@supabase/supabase-js';
import { RSVP } from '../types';

const defaultSupabaseUrl = 'https://wyowfpispfgstzareivk.supabase.co';
const defaultSupabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3dmcGlzcGZnc3R6YXJlaXZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUwNjc0MTIsImV4cCI6MjExMDY0MzQxMn0.ikZtMp6RmNJ16k6xz8ERY1NeqIiPULc4eGFa5SOxwps';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || defaultSupabaseUrl;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || defaultSupabaseAnonKey;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes('your-project-id')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

const LOCAL_STORAGE_KEY = 'mutiara_bunda_rsvps';

export async function fetchRSVPs(): Promise<RSVP[]> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching RSVPs from Supabase:', error.message);
        return getFallbackRSVPs();
      }

      return (data || []) as RSVP[];
    } catch (err) {
      console.warn('Network or Supabase error, falling back to local store:', err);
      return getFallbackRSVPs();
    }
  }

  return getFallbackRSVPs();
}

export async function insertRSVP(rsvp: Omit<RSVP, 'id' | 'created_at'>): Promise<{ success: boolean; data?: RSVP; error?: string }> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('rsvps')
        .insert([rsvp])
        .select()
        .single();

      if (error) {
        console.error('Error inserting RSVP to Supabase:', error.message);
        return saveFallbackRSVP(rsvp);
      }

      return { success: true, data: data as RSVP };
    } catch (err: any) {
      console.warn('Network or Supabase insert error:', err);
      return saveFallbackRSVP(rsvp);
    }
  }

  return saveFallbackRSVP(rsvp);
}

function getFallbackRSVPs(): RSVP[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Bersihkan data dummy lama jika ada
      return parsed.filter(item => !['1', '2', '3', '4'].includes(item.id));
    }
    return [];
  } catch {
    return [];
  }
}

function saveFallbackRSVP(rsvp: Omit<RSVP, 'id' | 'created_at'>): { success: boolean; data?: RSVP; error?: string } {
  try {
    const current = getFallbackRSVPs();
    const newEntry: RSVP = {
      ...rsvp,
      id: crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    const updated = [newEntry, ...current];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    return { success: true, data: newEntry };
  } catch (e: any) {
    return { success: false, error: e?.message || 'Gagal menyimpan konfirmasi' };
  }
}
