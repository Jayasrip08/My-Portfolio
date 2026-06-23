'use client';
import { motion } from 'framer-motion';

const stats = [
  { number: '5+', label: 'Projects Built' },
  { number: '7+', label: 'Certifications' },
  { number: '17+', label: 'Technologies' },
  { number: '1+', label: 'Years Learning' },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '6rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background accent */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-200px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-heading">
            Passionate about building{' '}
            <span className="gradient-text">meaningful things</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="glass-card"
              style={{
                borderRadius: '1.5rem',
                padding: '2rem',
                marginBottom: '1.5rem',
              }}
            >
              {/* Avatar initial */}
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '1.25rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                JP
              </div>
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  marginBottom: '0.75rem',
                }}
              >
                Jayasri Panchamurthi
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                A curious and creative Full-Stack Developer and IT graduate. I love transforming ideas into powerful, real-world solutions by blending
                frontend creativity with backend logic and AI.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                I explore new technologies daily, catch ideas quickly, and turn them into
                impactful creations. My goal is to build the future — one innovation at a time.
              </p>
            </div>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Location', value: 'India 🇮🇳' },
                { label: 'Focus', value: 'Full-Stack & AI Development' },
                { label: 'Status', value: 'Open to opportunities' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.7rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '0.75rem',
                  }}
                >
                  <span style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 500 }}>
                    {item.label}
                  </span>
                  <span style={{ color: '#c4b5fd', fontSize: '0.85rem', fontWeight: 600 }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stats + Projects highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {/* Stats grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
              }}
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Key projects card */}
            <div
              className="glass-card"
              style={{ borderRadius: '1.5rem', padding: '1.75rem' }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '1.25rem',
              }}>
                <div style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#06b6d4', flexShrink: 0,
                }} />
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1rem' }}>
                  Key Projects
                </h3>
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { name: 'SmartMail AI', desc: 'AI Gmail assistant with Gemini API' },
                  { name: 'Hospital Booking System', desc: 'Full-stack React + .NET Core' },
                  { name: 'AI Tool Recommender', desc: 'NLP chatbot with Streamlit' },
                  { name: '50+ Python Mini Tools', desc: 'Flask & MySQL utility hub' },
                ].map((p) => (
                  <li
                    key={p.name}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.15rem',
                      paddingBottom: '0.9rem',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ color: '#a78bfa', fontWeight: 600, fontSize: '0.9rem' }}>
                      {p.name}
                    </span>
                    <span style={{ color: '#64748b', fontSize: '0.8rem' }}>{p.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
