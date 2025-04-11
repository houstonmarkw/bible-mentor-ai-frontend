'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import TrustSection from '../components/TrustSection';

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

export default function HomeContent() {
  return (
    <div>
      {/* All your section code stays the same */}
      {/* No changes needed inside */}
    </div>
  );
}
