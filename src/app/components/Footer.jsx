
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-6 md:px-12 text-center text-sm text-gray-600">
      <p className="mb-2 font-semibold">Bible Mentor AI</p>
      <p className="italic text-gray-500 mb-4">Built to guide, not to replace.</p>

      <nav className="flex flex-wrap justify-center gap-4 text-gray-500 mb-4">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#waitlist" className="hover:text-black">Waitlist</a>
        <a href="#tracks" className="hover:text-black">Tracks</a>
        <a href="#dailyword" className="hover:text-black">The Daily Word</a>
        <a href="#faq" className="hover:text-black">FAQ</a>
        <a href="#get-involved" className="hover:text-black">Get Involved</a>
      </nav>

      <p className="text-xs text-gray-400">© 2025 Bible Mentor AI, LLC • All rights reserved</p>
      <p className="text-xs text-gray-400">
        <a href="/privacy" className="hover:underline">Privacy Policy</a> · <a href="/terms" className="hover:underline">Terms of Use</a>
      </p>
    </footer>
  );
};

export default Footer;
