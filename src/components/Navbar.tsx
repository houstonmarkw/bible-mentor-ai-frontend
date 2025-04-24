'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-blue-700">Bible Mentor AI</span>
        </Link>

        <button
          className="text-blue-700 dark:text-blue-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="bg-white border-t px-6 pb-6 text-gray-700 font-medium">
          <div className="flex flex-col space-y-4 pt-4 text-center">
            <Link href="/">Home</Link>
            <Link href="/bible/web" className="text-blue-700 font-semibold hover:text-blue-900">Bible</Link>
            <Link href="/about">About Us</Link>
            <Link href="/daily-word">Daily Word</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/tracks">Tracks</Link>
            <Link href="/memory">Your Faith Journey</Link>
            <Link href="/get-involved">Get Involved</Link>
            <Link href="/beliefs">Beliefs</Link>
            <Link href="/trustpage" className="hover:text-black">Trust &amp; Philosophy</Link>
            <Link href="/faq">FAQ</Link>
          </div>
        </div>
      )}
    </header>
  );
}
