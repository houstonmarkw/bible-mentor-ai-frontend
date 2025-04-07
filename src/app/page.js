// src/app/page.js
// updated homepage for Bible Mentor AI

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Top banner */}
      <div className="bg-yellow-100 text-yellow-800 text-center py-2 font-medium">
        📱 Bible Mentor AI app coming Q4 2025 — stay tuned!
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="text-xl font-bold text-blue-900">Bible Mentor AI</div>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><Link href="/" className="text-blue-800 hover:underline">Home</Link></li>
          <li><Link href="/dailyword" className="text-blue-800 hover:underline">Daily Word</Link></li>
          <li><a href="https://analytics.google.com" target="_blank" className="text-blue-800 hover:underline">Analytics</a></li>
          <li><a href="https://www.google.com/search?q=bible+mentor+ai" target="_blank" className="text-blue-800 hover:underline">Google Search</a></li>
        </ul>
      </nav>

      <section className="bg-gradient-to-br from-gray-100 to-blue-50 py-20 text-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Bible Mentor AI</h1>
        <h2 className="text-xl md:text-2xl mb-4">Helping You Walk with Jesus</h2>
        <p className="max-w-xl mx-auto text-gray-600 text-lg">
          Personalized devotionals, daily Bible study, and spiritual mentorship—delivered through intelligent guidance rooted in Scripture.
        </p>
        <a
          href="mailto:markhouston@biblementorai.org"
          className="inline-block mt-8 px-6 py-3 bg-blue-900 text-white rounded-md text-lg"
        >
          Contact Us
        </a>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#f9fafb"
              d="M0,192L60,202.7C120,213,240,235,360,240C480,245,600,235,720,229.3C840,224,960,224,1080,218.7C1200,213,1320,203,1380,197.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="mb-4">
          Bible Mentor AI was built for people who want more than just a daily verse. Whether you're just starting your journey with Christ or growing deeper in faith, our tools meet you where you are—every day. We pair spiritual mentorship with modern technology to make faith feel real, actionable, and deeply personal.
        </p>
        <p><strong>App Release:</strong> Q4 2025</p>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto bg-white rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">What You'll Experience</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2">🕊️ Daily Word</h3>
            <p>Wake up to a devotional personalized to your current walk—directly rooted in Scripture.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2">💬 Ask Your Mentor</h3>
            <p>Explore faith questions in a judgment-free zone—Bible Mentor gives clear, loving answers.</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-lg font-semibold mb-2">🌱 Grace → Growth</h3>
            <p>Track your spiritual journey with practical steps and personal reflection moments.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Join the Waitlist</h2>
        <form
          action="https://formspree.io/f/mgvanqol"
          method="POST"
          className="bg-white p-6 rounded-md shadow-md"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-3 rounded text-lg"
          >
            Notify Me
          </button>
        </form>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">My Story</h2>
        <div className="bg-white p-6 rounded-md shadow border-l-4 border-blue-900">
          <p className="italic mb-4">
            "Bible Mentor AI came from a place of personal hunger. I didn't grow up with strong religious structure, but when I started reading the Bible for myself—especially the Gospel of John—everything changed. I realized faith wasn't just tradition. It was relationship, truth, and peace. This app is for people like me: curious, searching, and ready to walk with Jesus."
          </p>
          <p className="font-semibold text-blue-900">— Mark Houston, Founder</p>
        </div>
      </section>

      <footer className="text-center py-8 text-sm text-gray-500">
        &copy; 2025 Bible Mentor AI. All rights reserved.
      </footer>
    </main>
  );
}

