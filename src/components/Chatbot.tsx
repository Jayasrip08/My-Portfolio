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
• Or use the Contact section to send a message directly!`,

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
      reply = `Hi there! I'm Jayasri's portfolio assistant. Ask me about her projects, skills, certifications, or contact details!`;
    else if (lower.includes('resume'))
      reply = `You can view Jayasri's resume here: https://drive.google.com/file/d/1_edTdioKU4U3PAu47av4A_iMECqGosul/view`;

    setTimeout(() => {
      setChat((prev) => [...prev, { role: 'bot', text: reply }]);
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chatbot"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          zIndex: 50,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: isOpen ? '#f1f5f9' : '#2563eb',
          border: '1px solid #e2e8f0',
          color: isOpen ? '#475569' : '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
          transition: 'background 0.25s, color 0.25s',
        }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <FaTimes size={17} />
            </motion.span>
          ) : (
            <motion.span key="robot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }}>
              <FaRobot size={17} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            style={{
              position: 'fixed',
              bottom: '5.25rem',
              right: '1.5rem',
              zIndex: 40,
              width: '320px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 16px 48px rgba(15,23,42,0.12)',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '0.9rem 1.1rem',
                borderBottom: '1px solid #f1f5f9',
                background: '#f8fafc',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
              }}
            >
              <div
                style={{
                  width: '30px', height: '30px', borderRadius: '50%',
                  background: '#2563eb',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <FaRobot size={13} color="#fff" />
              </div>
              <div>
                <div style={{ color: '#0f172a', fontWeight: 600, fontSize: '0.85rem' }}>Portfolio Assistant</div>
                <div style={{ color: '#22c55e', fontSize: '0.68rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              style={{
                height: '250px',
                overflowY: 'auto',
                padding: '0.85rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                background: '#fafafa',
              }}
            >
              {chat.length === 0 && (
                <div
                  style={{
                    padding: '0.7rem 0.9rem',
                    background: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    borderRadius: '0.75rem 0.75rem 0.75rem 0.15rem',
                    color: '#1d4ed8',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                  }}
                >
                  Hi! I&apos;m Jayasri&apos;s portfolio assistant.<br />
                  Ask me about her <strong>projects</strong>, <strong>skills</strong>, <strong>certifications</strong>, or <strong>contact info</strong>.
                </div>
              )}

              {chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '0.55rem 0.8rem',
                    borderRadius: msg.role === 'user'
                      ? '0.75rem 0.75rem 0.15rem 0.75rem'
                      : '0.75rem 0.75rem 0.75rem 0.15rem',
                    background: msg.role === 'user' ? '#2563eb' : '#ffffff',
                    border: msg.role === 'bot' ? '1px solid #e2e8f0' : 'none',
                    color: msg.role === 'user' ? '#fff' : '#374151',
                    fontSize: '0.8rem',
                    lineHeight: 1.65,
                    whiteSpace: 'pre-line',
                    boxShadow: msg.role === 'bot' ? '0 1px 4px rgba(15,23,42,0.04)' : 'none',
                  }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {loading && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    padding: '0.55rem 0.85rem',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '0.75rem 0.75rem 0.75rem 0.15rem',
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
                        background: '#93c5fd',
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
                padding: '0.65rem 0.85rem',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                gap: '0.45rem',
                background: '#ffffff',
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
                  padding: '0.5rem 0.75rem',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.5rem',
                  color: '#0f172a',
                  fontSize: '0.8rem',
                  outline: 'none',
                  fontFamily: 'Inter, sans-serif',
                }}
              />
              <button
                onClick={sendToBot}
                disabled={loading || !input.trim()}
                style={{
                  padding: '0.5rem 0.7rem',
                  background: loading || !input.trim() ? '#e2e8f0' : '#2563eb',
                  border: 'none',
                  borderRadius: '0.5rem',
                  color: loading || !input.trim() ? '#94a3b8' : '#fff',
                  cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                  transition: 'background 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <FaPaperPlane size={12} />
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
