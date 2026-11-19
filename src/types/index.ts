export type AttendanceStatus = 'Hadir' | 'Tidak Hadir' | 'Ragu';

export interface RSVP {
  id: string;
  nama: string;
  attendance: AttendanceStatus;
  guests: number;
  message: string;
  created_at: string;
}

export interface RundownItem {
  id: string;
  time: string;
  title: string;
  desc: string;
  icon: string;
}
