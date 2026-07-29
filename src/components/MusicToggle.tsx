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
          gap: '0.45rem',
          padding: '0.45rem 0.85rem',
          background: playing ? '#eff6ff' : '#f8fafc',
          border: playing
            ? '1px solid #bfdbfe'
            : '1px solid #e2e8f0',
          borderRadius: '9999px',
          cursor: 'pointer',
          transition: 'border-color 0.25s, background 0.25s',
          boxShadow: '0 1px 6px rgba(15,23,42,0.06)',
        }}
      >
        {/* Equalizer bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              style={{
                width: '3px',
                borderRadius: '2px',
                background: playing ? '#2563eb' : '#94a3b8',
                height: playing ? undefined : '5px',
                animation: playing ? `eq${i} ${0.6 + i * 0.15}s ease-in-out infinite alternate` : 'none',
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontSize: '0.72rem',
            fontWeight: 600,
            color: playing ? '#2563eb' : '#64748b',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {playing ? 'Lofi on' : 'Lofi'}
        </span>
      </button>

      <style jsx>{`
        @keyframes eq1 { from { height: 4px; } to { height: 13px; } }
        @keyframes eq2 { from { height: 8px; } to { height: 5px; } }
        @keyframes eq3 { from { height: 11px; } to { height: 6px; } }
        @keyframes eq4 { from { height: 5px; } to { height: 12px; } }
      `}</style>
    </>
  );
}
