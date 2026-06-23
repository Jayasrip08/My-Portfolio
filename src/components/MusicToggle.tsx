'use client';
import { useRef, useState, useEffect } from 'react';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src="/lofi.mp3" loop preload="none" />
      <button
        onClick={() => setPlaying(!playing)}
        aria-label={playing ? 'Pause music' : 'Play music'}
        title={playing ? 'Pause lofi music' : 'Play lofi music'}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          left: '1.5rem',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.5rem 0.9rem',
          background: 'rgba(3, 5, 15, 0.85)',
          border: playing
            ? '1px solid rgba(124, 58, 237, 0.5)'
            : '1px solid rgba(255,255,255,0.1)',
          borderRadius: '9999px',
          backdropFilter: 'blur(12px)',
          cursor: 'pointer',
          transition: 'border-color 0.3s, box-shadow 0.3s',
          boxShadow: playing ? '0 0 20px rgba(124,58,237,0.25)' : 'none',
        }}
      >
        {/* Equalizer bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '16px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: '3px',
                borderRadius: '2px',
                background: playing ? '#a78bfa' : '#475569',
                height: playing ? undefined : '6px',
                animation: playing ? `eq${i} ${0.6 + i * 0.15}s ease-in-out infinite alternate` : 'none',
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 500,
            color: playing ? '#a78bfa' : '#475569',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {playing ? 'Lofi on' : 'Lofi'}
        </span>
      </button>

      <style jsx>{`
        @keyframes eq1 { from { height: 4px; } to { height: 14px; } }
        @keyframes eq2 { from { height: 8px; } to { height: 5px; } }
        @keyframes eq3 { from { height: 12px; } to { height: 7px; } }
        @keyframes eq4 { from { height: 5px; } to { height: 13px; } }
      `}</style>
    </>
  );
}
