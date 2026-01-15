'use client';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState('');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        'service_n4cb3m2',     // ✅ Replace with your EmailJS Service ID
        'template_2a8xltv',    // ✅ Replace with your EmailJS Template ID
        form.current!,
        '0qARs1Sn0xwIVu0zo'    // ✅ Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setStatus('✅ Message sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus('❌ Failed to send message. Try again.');
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* 👋 Left Side - Info & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-purple-400">💬 Let’s Connect</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Got a project, idea, or just want to say hi?<br />
            Drop me a message — I’d love to collaborate!
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/jayasri-panchamurthi-b99a312b6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-white hover:text-purple-400 transition"
            >
              <FaLinkedin className="text-2xl" />
              <span>Connect On LinkedIn</span>
            </a>
            <a
              href="https://github.com/Jayasrip08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg text-white hover:text-purple-400 transition"
            >
              <FaGithub className="text-2xl" />
              <span>View My GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* 📝 Right Side - Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="space-y-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.03 }}
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-sm mt-3 text-green-400 font-medium">{status}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
