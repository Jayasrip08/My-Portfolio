'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
  id="home"
  className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 bg-gray-900"
>

      {/* Heading with animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold text-white leading-snug"
      >
        👋 Hi, I&#39;m{' '}
        <span className="block text-purple-500 text-[42px] sm:text-[60px] font-extrabold mt-2">
          Jayasri Panchamurthi
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-6 text-lg text-gray-300 max-w-xl"
      >
        Aspiring Full-Stack Developer | AI Enthusiast | Innovator 💡
      </motion.p>

      {/* Links and Resume */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="flex flex-col items-center gap-4 mt-10"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/Jayasrip08"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white underline hover:text-purple-400 transition"
        >
          🔗 GitHub: Jayasrip08
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://linkedin.com/in/jayasri-panchamurthi-b99a312b6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white underline hover:text-blue-400 transition"
        >
          🔗 LinkedIn: jayasri-panchamurthi
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://drive.google.com/file/d/1npAkeqXMANQRrK3_NyS7O9aAluY6Ymsz/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition"
        >
          📄 View Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
