'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';

const ROLES = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Problem Solver',
  'Innovator',
  'Python Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < role.length) {
      timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === role.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 1.5rem',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Mesh background orbs */}
      <div className="mesh-bg" />
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(124, 58, 237, 0.15)',
          top: '-100px',
          left: '-150px',
        }}
      />
      <div
        className="orb"
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(6, 182, 212, 0.1)',
          bottom: '-80px',
          right: '-100px',
        }}
      />
      <div
        className="orb"
        style={{
          width: '200px',
          height: '200px',
          background: 'rgba(167, 139, 250, 0.08)',
          top: '40%',
          left: '10%',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', width: '100%' }}>
        {/* Greeting badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            background: 'rgba(124, 58, 237, 0.12)',
            border: '1px solid rgba(124, 58, 237, 0.35)',
            borderRadius: '9999px',
            marginBottom: '1.5rem',
            fontSize: '0.82rem',
            fontWeight: 500,
            color: '#c4b5fd',
            letterSpacing: '0.05em',
          }}
        >
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#06b6d4',
            boxShadow: '0 0 8px #06b6d4',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          Available for opportunities
        </motion.div>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{
            fontSize: 'clamp(2.6rem, 7vw, 5rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            fontFamily: "'Space Grotesk', sans-serif",
            marginBottom: '1rem',
            color: '#f1f5f9',
          }}
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text" style={{ display: 'block' }}>
            Jayasri Panchamurthi
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 600,
            color: '#94a3b8',
            marginBottom: '1.5rem',
            minHeight: '2.2rem',
          }}
        >
          <span style={{ color: '#a78bfa' }}>{displayed}</span>
          <span className="typing-cursor" />
        </motion.div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: '1rem',
            color: '#64748b',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.75,
          }}
        >
          Aspiring developer who loves building real-world solutions by blending
          frontend creativity with backend logic and AI.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <a
            href="https://drive.google.com/file/d/1_edTdioKU4U3PAu47av4A_iMECqGosul/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View Resume ↗
          </a>
          <button
            onClick={() => scrollTo('projects')}
            className="btn-outline"
          >
            View Projects
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem',
          }}
        >
          {[
            {
              href: 'https://github.com/Jayasrip08',
              icon: <FaGithub size={20} />,
              label: 'GitHub',
            },
            {
              href: 'https://linkedin.com/in/jayasri-panchamurthi-b99a312b6',
              icon: <FaLinkedin size={20} />,
              label: 'LinkedIn',
            },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ scale: 1.1, y: -2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '0.75rem',
                color: '#94a3b8',
                fontSize: '0.85rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#a78bfa';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(124,58,237,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
              }}
            >
              {s.icon}
              {s.label}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ delay: 1, duration: 0.5, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            color: '#475569',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <FaArrowDown size={12} />
          Scroll down
        </motion.button>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
      `}</style>
    </section>
  );
}
