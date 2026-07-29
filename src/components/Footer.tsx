'use client';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#03050f',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '3rem 1.5rem 2rem',
        color: '#94a3b8',
        fontSize: '0.875rem',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {/* Top Branding & Nav Links */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            gap: '1rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.15rem',
              background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Jayasri.dev
          </span>

          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {['home', 'about', 'skills', 'projects', 'certifications', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'color 0.2s',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = '#a78bfa';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                }}
              >
                {id}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <a
              href="https://github.com/Jayasrip08"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#f8fafc')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8')}
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jayasri-panchamurthi-b99a312b6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#06b6d4')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8')}
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:jayasrip1808@gmail.com"
              aria-label="Email"
              style={{ color: '#94a3b8', transition: 'color 0.2s' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8')}
            >
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Copyright notice */}
        <div style={{ textAlign: 'center', color: '#475569', fontSize: '0.8rem' }}>
          © {currentYear} Jayasri Panchamurthi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
