'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TrustSection from '../components/TrustSection'; // ✅ fixed path

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <motion.section
        className="text-center py-20 bg-gradient-to-br from-blue-50 to-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">Bible Mentor AI</h1>
        <h2 className="text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Guiding you <span className="text-blue-600">through</span> the Word,<br />
          <span className="text-blue-600">in</span> the Word, and <span className="text-blue-600">with</span> the Word.
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Personalized devotionals, daily Bible study, and spiritual mentorship — delivered through intelligent guidance rooted in Scripture.
        </p>
        <a
          href="mailto:support@biblementorai.org"
          className="inline-block mt-8 px-8 py-4 bg-blue-700 text-white font-semibold rounded-full shadow-lg hover:bg-blue-800 transition"
        >
          Contact Us
        </a>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-6 bg-white"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-800 mb-4">About Bible Mentor AI</h3>
            <p className="text-gray-700 leading-relaxed">
              Bible Mentor AI was built for people who want more than just a daily verse. Whether you're just starting your journey with Christ or growing deeper in faith, our tools meet you where you are — every day.
              We pair spiritual mentorship with modern technology to make faith feel real, actionable, and deeply personal.
            </p>
            <p className="text-blue-800 italic mt-4">
              Bible Mentor AI remembers so you don’t forget what God has done.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Differentiator Section */}
      <motion.section
        id="differentiator"
        className="bg-blue-50 py-20 px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-800 mb-8">What Makes Us Different</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: 'Guided, Not Replaced',
                desc: 'We support your walk with Christ — not automate it. We’re not here to replace pastors or prayer, but to point you to the Word daily.',
              },
              {
                title: 'Daily, Not Sporadic',
                desc: 'Devotion is a rhythm. Our tools guide you day by day, reinforcing spiritual growth through consistency and grace.',
              },
              {
                title: 'We Remember Your Journey',
                desc: 'Your reflections are stored safely—not for us, but for you. We help you see your walk with Jesus over time and revisit what God has done.',
              },
            ].map((card, i) => (
              <motion.div key={i} variants={fadeInUp} className="bg-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">{card.title}</h4>
                <p className="text-gray-700">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <Link
            href="/get-involved"
            className="inline-block mt-12 px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition"
          >
            Start Your Journey
          </Link>
        </div>
      </motion.section>

      {/* Trust Section */}
      <TrustSection />

      {/* Waitlist Section */}
      <motion.section
        id="waitlist"
        className="bg-white py-16 px-6 text-center border-t border-gray-200"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h4 className="text-xl font-semibold text-blue-800 mb-4">Bible Mentor AI app coming Q4 2025 — stay tuned!</h4>
        <p className="text-gray-600">
          Join our waitlist or contact us directly at{' '}
          <a href="mailto:support@biblementorai.org" className="underline">support@biblementorai.org</a>
        </p>
      </motion.section>
    </div>
  );
}
