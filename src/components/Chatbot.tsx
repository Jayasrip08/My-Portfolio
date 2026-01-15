'use client';
import { useEffect, useRef, useState } from 'react';
import { FaRobot, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const predefinedAnswers: { [key: string]: string } = {
    projects: `🧠 Jayasri's Projects:
1. 📨 SmartMail AI – Gmail assistant using Google Cloud + Gemini API.
2. 🏥 Hospital Booking System – React + .NET + MySQL.
3. 🤖 AI Tool Recommender – Chatbot using NLP & Streamlit.
4. 🛠️ 50+ Python mini tools – built using Flask and SQLite.`,

    skills: `🛠️ Jayasri’s Skills:
- Full-Stack Web Development (React, .NET Core)
- AI & Machine Learning Enthusiast
- Python, MySQL, SQLite, Streamlit
- UI Design & Problem Solving`,

    contact: `📬 Contact Info:
🔗 GitHub: https://github.com/Jayasrip08
🔗 LinkedIn: https://linkedin.com/in/jayasri-panchamurthi-b99a312b6`,

    certifications: `📜 Certifications:
- Full Stack Web Development (Edureka, Topper World, Prompt Infotech)
- AI Bootcamp (NXT-WAVE, Great Learning)
- Java & Python Mastery (Udemy, Simplilearn)`,

    default: `🤖 I'm Jayasri's portfolio assistant!  
You can ask me about her "projects", "skills", "contact info", or "certifications".`,
  };

  const sendToBot = () => {
    if (!input.trim()) return;
    setChat((prev) => [...prev, `🧑‍💻 ${input}`]);
    setLoading(true);

    const lower = input.toLowerCase();
    let reply = predefinedAnswers.default;

    if (
      lower.includes('project') ||
      lower.includes('built') ||
      lower.includes('work') ||
      lower.includes('application')
    )
      reply = predefinedAnswers.projects;
    else if (lower.includes('skill') || lower.includes('know') || lower.includes('stack'))
      reply = predefinedAnswers.skills;
    else if (lower.includes('contact') || lower.includes('linkedin') || lower.includes('github'))
      reply = predefinedAnswers.contact;
    else if (
      lower.includes('certification') ||
      lower.includes('course') ||
      lower.includes('certificate')
    )
      reply = predefinedAnswers.certifications;

    setTimeout(() => {
      setChat((prev) => [...prev, `🤖 ${reply}`]);
      setInput('');
      setLoading(false);
    }, 700);
  };

  return (
    <>
      {/* Floating Pulse Icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Toggle Chatbot"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={20} />}
      </motion.button>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-20 right-6 w-80 bg-gray-900 text-white p-4 rounded-xl shadow-xl z-40 border border-purple-500"
        >
          <div className="overflow-y-auto max-h-64 mb-3 text-sm space-y-1 scrollbar-thin pr-2">
            {/* Welcome Message */}
            {chat.length === 0 && (
              <p className="text-purple-400 animate-pulse mb-2">
                👋 Hi! I’m Jayasri’s portfolio assistant. Ask me anything!
              </p>
            )}

            {chat.map((msg, i) => (
              <p key={i} className={msg.startsWith('🤖') ? 'text-purple-300' : 'text-gray-200'}>
                {msg}
              </p>
            ))}
            {loading && (
              <p className="text-purple-500 flex items-center gap-1">
                🤖 Typing<span className="animate-pulse">...</span>
              </p>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field */}
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendToBot()}
              className="flex-grow px-3 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none"
              placeholder="Ask about Jayasri..."
            />
            <button
              onClick={sendToBot}
              className="px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
