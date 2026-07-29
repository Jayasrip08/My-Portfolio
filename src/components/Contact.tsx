'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const socials = [
  {
    icon: <FaEnvelope size={18} />,
    label: 'Email',
    sub: 'jayasrip1808@gmail.com',
    href: 'mailto:jayasrip1808@gmail.com',
    color: '#06b6d4',
  },
  {
    icon: <FaLinkedin size={18} />,
    label: 'LinkedIn',
    sub: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/jayasri-panchamurthi-b99a312b6',
    color: '#7c3aed',
  },
  {
    icon: <FaGithub size={18} />,
    label: 'GitHub',
    sub: 'Check my code repositories',
    href: 'https://github.com/Jayasrip08',
    color: '#38bdf8',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.85rem 1rem',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.09)',
  borderRadius: '0.75rem',
  color: '#f1f5f9',
  fontSize: '0.9rem',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setStatus('');

    emailjs
      .sendForm(
        'service_n4cb3m2',
        'template_2a8xltv',
        form.current!,
        '0qARs1Sn0xwIVu0zo'
      )
      .then(
        () => { setStatus('success'); setSending(false); form.current?.reset(); },
        () => { setStatus('error'); setSending(false); }
      );
  };

  return (
    <section
      id="contact"
      style={{ padding: '6rem 1.5rem 7rem', position: 'relative' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">
            Let&apos;s{' '}
            <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: '#94a3b8', marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '460px', margin: '0.75rem auto 0' }}>
            Got a project, idea, or just want to say hi? Drop me a message — I&apos;d love to connect!
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <div
              className="glass-card"
              style={{ borderRadius: '1.25rem', padding: '2rem' }}
            >
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                Connect with me
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                I&apos;m actively looking for opportunities. Whether it&apos;s a full-time role,
                freelance project, or a collaboration, feel free to reach out!
              </p>

              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    color: '#94a3b8',
                    transition: 'background 0.2s',
                    marginBottom: '0.25rem',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#f1f5f9';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#94a3b8';
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '0.6rem',
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: s.color,
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{s.label}</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{s.sub}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div
              className="glass-card"
              style={{ borderRadius: '1.25rem', padding: '2rem' }}
            >
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                Send a message
              </h3>
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(124,58,237,0.5)'; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.09)'; }}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(6,182,212,0.5)'; }}
                  onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.09)'; }}
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(124,58,237,0.5)'; }}
                  onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(255,255,255,0.09)'; }}
                />

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: '0.85rem',
                    background: sending
                      ? 'rgba(124,58,237,0.4)'
                      : 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                    border: 'none',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'box-shadow 0.2s',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px rgba(124,58,237,0.4)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                  }}
                >
                  <FaPaperPlane size={14} />
                  {sending ? 'Sending...' : 'Send Message'}
                </motion.button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.3)',
                      borderRadius: '0.75rem',
                      color: '#34d399',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(239,68,68,0.1)',
                      border: '1px solid rgba(239,68,68,0.3)',
                      borderRadius: '0.75rem',
                      color: '#f87171',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                    }}
                  >
                    ✗ Failed to send. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
