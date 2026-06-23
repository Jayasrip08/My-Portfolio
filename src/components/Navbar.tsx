'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((n) => document.getElementById(n.id));
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActive(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(3, 5, 15, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <motion.button
          onClick={() => scrollTo('home')}
          whileHover={{ scale: 1.04 }}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.35rem',
              background: 'linear-gradient(135deg, #a78bfa 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Jayasri.dev
          </span>
        </motion.button>

        {/* Desktop Nav */}
        <ul
          style={{
            display: 'flex',
            gap: '0.25rem',
            listStyle: 'none',
            alignItems: 'center',
          }}
          className="hidden md:flex"
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: active === item.id ? '#a78bfa' : '#94a3b8',
                  transition: 'color 0.2s, background 0.2s',
                  fontFamily: 'Inter, sans-serif',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (active !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = '#f1f5f9';
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (active !== item.id) {
                    (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  }
                }}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                      borderRadius: '1px',
                      display: 'block',
                    }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA (desktop) */}
        <a
          href="https://drive.google.com/file/d/1_edTdioKU4U3PAu47av4A_iMECqGosul/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary"
          style={{ fontSize: '0.85rem', padding: '0.5rem 1.25rem' }}
        >
          Resume ↗
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '0.5rem',
            padding: '0.4rem 0.6rem',
            cursor: 'pointer',
            color: '#f1f5f9',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block', width: '18px', height: '2px',
            background: '#f1f5f9', borderRadius: '1px',
            transition: 'transform 0.2s',
            transform: isOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '18px', height: '2px',
            background: '#f1f5f9', borderRadius: '1px',
            opacity: isOpen ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', width: '18px', height: '2px',
            background: '#f1f5f9', borderRadius: '1px',
            transition: 'transform 0.2s',
            transform: isOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              background: 'rgba(3, 5, 15, 0.97)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <ul style={{ listStyle: 'none', padding: '1rem 1.5rem 1.5rem' }}>
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => scrollTo(item.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color: active === item.id ? '#a78bfa' : '#94a3b8',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ marginTop: '1rem' }}
              >
                <a
                  href="https://drive.google.com/file/d/1_edTdioKU4U3PAu47av4A_iMECqGosul/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  View Resume ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
