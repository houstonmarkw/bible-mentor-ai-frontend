import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Bible Mentor AI',
  description: 'Guiding you through the Word, in the Word, and with the Word.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <body className="bg-gray-50 text-gray-800 scroll-smooth">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-12 text-center text-sm text-gray-600">
          <div className="mb-2">© 2025 Bible Mentor AI. All rights reserved.</div>
          <div className="space-x-4">
            <a href="https://docs.google.com/document/d/1yoZD6n..." target="_blank" rel="noopener noreferrer" className="hover:underline">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/1AY7ECb..." target="_blank" rel="noopener noreferrer" className="hover:underline">Terms of Use</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
