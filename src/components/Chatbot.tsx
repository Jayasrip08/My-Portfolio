'use client';
import { useEffect, useRef, useState } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

type Message = { role: 'user' | 'bot'; text: string };

const predefined: Record<string, string> = {
  projects: `Here are Jayasri's key projects:
• SmartMail AI — Gmail assistant using Gemini API & Google Cloud
• Hospital Booking System — React + .NET Core + SQLite
• AI Tool Recommender — NLP chatbot built with Streamlit
• 50+ Python Mini Tools — Flask & PostgreSQL utility hub
• Student & Course Tracker — Full MERN stack app`,

  skills: `Jayasri's tech stack:
• Frontend: React, Next.js, TypeScript, HTML5, CSS3
• Backend: Python, Node.js, .NET Core, Django, Flask
• Databases: MySQL, PostgreSQL, SQLite
• AI/Cloud: Google Cloud, Streamlit, Gemini API`,

  contact: `You can reach Jayasri at:
• GitHub: github.com/Jayasrip08
• LinkedIn: linkedin.com/in/jayasri-panchamurthi-b99a312b6
• Or use the Contact section below to send a message directly!`,

  certifications: `Jayasri's certifications include:
• Full Stack Web Dev — Edureka, Topper World, Prompt Infotech
• Gen-AI Course — NXT-WAVE
• AI Bootcamp — NXT-WAVE & Great Learning
• Java & Python 100 Days Mastery — Udemy & Simplilearn`,

  default: `Hi! I'm Jayasri's portfolio assistant.
You can ask me about her projects, skills, contact info, or certifications.`,
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat, loading]);

  const sendToBot = () => {
    if (!input.trim() || loading) return;
    const userText = input.trim();
    setChat((prev) => [...prev, { role: 'user', text: userText }]);
    setInput('');
    setLoading(true);

    const lower = userText.toLowerCase();
    let reply = predefined.default;
    if (lower.includes('project') || lower.includes('built') || lower.includes('work'))
      reply = predefined.projects;
    else if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech'))
      reply = predefined.skills;
    else if (lower.includes('contact') || lower.includes('email') || lower.includes('linkedin'))
      reply = predefined.contact;
    else if (lower.includes('cert') || lower.includes('course'))
      reply = predefined.certifications;
    else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey'))
      reply = `Hi there! 👋 I'm Jayasri's portfolio assistant. Ask me about her projects, skills, certifications, or contact details!`;
    else if (lower.includes('resume'))
      reply = `You can view Jayasri's resume here: https://drive.google.com/file/d/1_edTdioKU4U3PAu47av4A_iMECqGosul/view?usp=sharing`;

    setTimeout(() => {
      setChat((prev) => [...prev, { role: 'bot', text: reply }]);
      setLoading(false);
    }, 750);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
        animate={isOpen ? {} : { scale: [1, 1.06, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: isOpen
            ? 'rgba(30, 10, 60, 0.9)'
            : 'linear-gradient(135deg, #7c3aed, #06b6d4)',
          border: '1px solid rgba(124,58,237,0.4)',
          backdropFilter: 'blur(12px)',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
          transition: 'background 0.3s',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <FaTimes size={18} />
            </motion.span>
          ) : (
            <motion.span key="robot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <FaRobot size={18} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed',
              bottom: '5.5rem',
              right: '1.5rem',
              zIndex: 40,
              width: '320px',
              background: 'rgba(8, 6, 22, 0.92)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '1.25rem',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.1)',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <div
                style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <FaRobot size={14} color="#fff" />
              </div>
              <div>
                <div style={{ color: '#f1f5f9', fontWeight: 600, fontSize: '0.88rem' }}>Portfolio Assistant</div>
                <div style={{ color: '#06b6d4', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#06b6d4', display: 'inline-block' }} />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                height: '260px',
                overflowY: 'auto',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {chat.length === 0 && (
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    borderRadius: '0.75rem 0.75rem 0.75rem 0.1rem',
                    color: '#c4b5fd',
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                  }}
                >
                  👋 Hi! I&apos;m Jayasri&apos;s portfolio assistant.<br />
                  Ask me about her <strong>projects</strong>, <strong>skills</strong>, <strong>certifications</strong>, or <strong>contact info</strong>.
                </div>
              )}

              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: msg.role === 'user'
                      ? '0.75rem 0.75rem 0.1rem 0.75rem'
                      : '0.75rem 0.75rem 0.75rem 0.1rem',
                    background: msg.role === 'user'
                      ? 'linear-gradient(135deg, #7c3aed, #5b21b6)'
                      : 'rgba(255,255,255,0.05)',
                    border: msg.role === 'bot' ? '1px solid rgba(255,255,255,0.07)' : 'none',
                    color: msg.role === 'user' ? '#fff' : '#cbd5e1',
                    fontSize: '0.8rem',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {loading && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    padding: '0.6rem 0.85rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '0.75rem 0.75rem 0.75rem 0.1rem',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: '#a78bfa',
                        animation: `bounce 1s ease-in-out ${i * 0.15}s infinite`,
                      }}
                    />
                  ))}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div
              style={{
                padding: '0.75rem 1rem',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex',
                gap: '0.5rem',
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendToBot()}
                placeholder="Ask anything..."
                style={{
                  flex: 1,
                  padding: '0.55rem 0.8rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '0.6rem',
                  color: '#f1f5f9',
                  fontSize: '0.82rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
              <button
                onClick={sendToBot}
                disabled={loading || !input.trim()}
                style={{
                  padding: '0.55rem 0.75rem',
                  background: 'linear-gradient(135deg, #7c3aed, #5b21b6)',
                  border: 'none',
                  borderRadius: '0.6rem',
                  color: '#fff',
                  cursor: 'pointer',
                  opacity: loading || !input.trim() ? 0.5 : 1,
                  transition: 'opacity 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaPaperPlane size={13} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
