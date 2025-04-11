import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const HomeContent = dynamic(() => import('./HomeContent'), { ssr: false });

export const metadata: Metadata = {
  title: 'Bible Mentor AI – Your Personal AI Guide for Bible Study',
  description:
    'Grow in faith with Bible Mentor AI – personalized devotionals, AI-guided Bible study, and spiritual insight rooted in Scripture.',
  alternates: {
    canonical: 'https://biblementorai.org/',
  },
};

export default function HomePage() {
  return <HomeContent />;
}
