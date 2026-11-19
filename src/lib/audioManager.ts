// Audio Manager with graceful Web Audio Gamelan ambient generator & external MP3 support

class AudioManager {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: any = null;
  private audioEl: HTMLAudioElement | null = null;
  private listeners: ((playing: boolean) => void)[] = [];

  constructor() {
    // Soft traditional royalty-free gamelan audio URL
    this.audioEl = new Audio('https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=traditional-asian-gamelan-ambient-112191.mp3');
    this.audioEl.loop = true;
    this.audioEl.volume = 0.45;
  }

  public subscribe(cb: (playing: boolean) => void) {
    this.listeners.push(cb);
    return () => {
      this.listeners = this.listeners.filter(l => l !== cb);
    };
  }

  private notify() {
    this.listeners.forEach(cb => cb(this.isPlaying));
  }

  public getStatus() {
    return this.isPlaying;
  }

  // Fallback synthesizer using Web Audio API in case external MP3 cannot load / CORS
  private playSyntheticGamelan() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }

    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    // Slendro / Pelog tuned frequencies (Hz) for gentle gamelan metallic chime
    // Pelog notes approx: 1(Ji)=280, 2(Ro)=305, 3(Lu)=335, 4(Pat)=390, 5(Ma)=420, 6(Nem)=460, 7(Barang)=520
    const pelogScale = [275, 305, 340, 392, 424, 465, 520, 550, 610, 680];

    const playChime = () => {
      if (!this.isPlaying || !this.audioCtx) return;
      try {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const freq = pelogScale[Math.floor(Math.random() * pelogScale.length)];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);

        // Soft bell-like envelope
        const now = this.audioCtx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 2.3);
      } catch (e) {
        console.warn('Audio chime error:', e);
      }
    };

    // Trigger initial chime
    playChime();
    this.intervalId = setInterval(() => {
      if (this.isPlaying) {
        playChime();
        if (Math.random() > 0.4) {
          setTimeout(playChime, 300);
        }
      }
    }, 1400);
  }

  public async play(): Promise<boolean> {
    this.isPlaying = true;
    this.notify();

    if (this.audioEl) {
      try {
        await this.audioEl.play();
        return true;
      } catch {
        // Fallback to synthetic gamelan if external audio fails or blocked
        this.playSyntheticGamelan();
        return true;
      }
    } else {
      this.playSyntheticGamelan();
      return true;
    }
  }

  public pause() {
    this.isPlaying = false;
    this.notify();

    if (this.audioEl) {
      this.audioEl.pause();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.audioCtx && this.audioCtx.state === 'running') {
      this.audioCtx.suspend();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }
}

export const globalAudio = new AudioManager();
