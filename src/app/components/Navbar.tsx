'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <span className="text-xl font-bold text-blue-700">Bible Mentor AI</span>
        </Link>
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#differentiator">What Makes Us Different</a>
          <Link href="/daily-word">Daily Word</Link>
        </nav>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <a href="#about">About</a>
          <a href="#differentiator">What Makes Us Different</a>
          <Link href="/daily-word">Daily Word</Link>
        </div>
      )}
    </header>
  );
}
