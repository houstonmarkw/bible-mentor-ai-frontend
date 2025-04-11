import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-8 px-6 md:px-12 text-center text-sm text-gray-600">
      <p className="mb-2 font-semibold">Bible Mentor AI</p>
      <p className="italic text-gray-500 mb-4">Built to guide, not to replace.</p>

      <p className="text-xs text-gray-400">© 2025 Bible Mentor AI • All rights reserved</p>
      <p className="text-xs text-gray-400">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link> ·{' '}
        <Link href="/terms" className="hover:underline">Terms of Use</Link>
      </p>
    </footer>
  );
};

export default Footer;
