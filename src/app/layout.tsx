import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // ✅ Add this

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bible Mentor AI',
  description: 'Guiding you through the Word, in the Word, and with the Word.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer /> {/* ✅ Add this */}
      </body>
    </html>
  );
}
