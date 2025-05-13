'use client';

import Link from 'next/link';

export default function AccessibilityPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
          Accessibility Commitment
        </h1>

        <p className="text-gray-700 mb-6">
          At Bible Mentor AI, we believe the Gospel is for everyone — and so is this platform.
        </p>

        <p className="text-gray-700 mb-6">
          We are committed to making our website and services accessible to all people, regardless of ability. Our goal is to meet or exceed the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards wherever possible.
        </p>

        <p className="text-gray-700 mb-6">
          We actively review our website using both automated tools and real user feedback to identify and address accessibility issues. We also engage with community members to better understand real-world needs, and we welcome ongoing input from all users.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
          Reporting Accessibility Issues
        </h2>

        <p className="text-gray-700 mb-6">
          If you encounter any accessibility barriers while using Bible Mentor AI, we want to know. Your feedback helps us make the experience better for everyone.
        </p>

        <p className="text-gray-700 mb-6">
          Please contact us at: <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>
        </p>

        <p className="text-gray-700 mb-6">
          We will make every effort to address your concerns promptly and meaningfully.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-10 mb-4">
          Standards and Commitment
        </h2>

        <p className="text-gray-700 mb-6">
          Bible Mentor AI strives to meet or exceed the requirements of WCAG 2.1 Level AA and is committed to continuous improvement as standards evolve.
        </p>

        <p className="text-gray-700 text-sm mt-12 text-center">
          Last Reviewed: April 27, 2025
        </p>

        <div className="text-center mt-8">
          <Link href="/" className="text-blue-700 underline">
            Return to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
