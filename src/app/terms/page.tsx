'use client';

import Head from 'next/head';

export default function TermsOfUsePage() {
  return (
    <>
      <Head>
        <title>Terms of Use – Bible Mentor AI</title>
        <meta
          name="description"
          content="Review the Terms of Use for Bible Mentor AI. Understand how to use the app responsibly, including guidelines around spiritual content, AI interaction, account security, and user rights."
        />
        <link rel="canonical" href="https://biblementorai.org/terms" />
      </Head>

      <section className="bg-white min-h-screen px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Terms of Use</h1>
          <p className="text-sm text-gray-500 mb-10 text-center">Effective Date: April 10, 2025</p>

          <p className="text-gray-700 mb-6">
            Welcome to Bible Mentor AI (“the App”), operated by Bible Mentor AI LLC (“we,” “us,” or “our”). These Terms of Use govern your use of the App, including all features, content, and services provided.
          </p>
          <p className="text-gray-700 mb-6">
            By using the App, you agree to these Terms. If you do not agree, please do not use the App.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">1. Purpose and Scope</h2>
          <p className="text-gray-700 mb-6">
            Bible Mentor AI is designed to provide personalized Bible study tools, spiritual reflection, and guided faith growth through AI-assisted mentorship. It is not a replacement for church, pastoral care, or licensed counseling.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">2. User Responsibilities</h2>
          <p className="text-gray-700 mb-6">
            By using the App, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide accurate information during account setup</li>
            <li>Use the App only for lawful, personal, and spiritual purposes</li>
            <li>Not misuse, reverse-engineer, or attempt to disrupt the platform</li>
            <li>Respect the privacy and dignity of other users, if shared spaces are enabled</li>
          </ul>
          <p className="text-gray-700 mt-2">
            You retain full ownership of the content you create in the App (e.g., reflections, tags, highlights). We store it only to support your discipleship journey. You may download or delete your data at any time.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">3. Age Requirements</h2>
          <p className="text-gray-700 mb-6">
            You must be at least 13 years old to use the App. Users under 18 should only use the App with parental or guardian consent and supervision.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">4. Account Security</h2>
          <p className="text-gray-700 mb-6">
            You are responsible for keeping your account credentials secure. If you believe your account has been compromised, please contact us immediately at <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">5. AI Guidance and Limitations</h2>
          <p className="text-gray-700 mb-6">
            Bible Mentor AI uses artificial intelligence to generate devotional insights, biblical encouragement, and spiritual reflection prompts. While rooted in Scripture, AI responses are not infallible, authoritative, or a substitute for the Holy Spirit or trusted spiritual leaders.
          </p>
          <p className="text-gray-700 mb-6">
            Always compare AI responses with the Bible, and seek wisdom from your church or spiritual mentors. Do not use the App for medical, legal, or emergency support. If you are in crisis, please contact a qualified professional or emergency services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">6. Intellectual Property</h2>
          <p className="text-gray-700 mb-6">
            All App content, including devotionals, design, code, and user interface, is the intellectual property of Bible Mentor AI LLC. You may not copy, sell, or distribute any part of the App without written permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">7. Termination of Use</h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to suspend or terminate your access if you violate these Terms, misuse the platform, or create risk to our users or services. You may delete your account at any time.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">8. Service Modifications</h2>
          <p className="text-gray-700 mb-6">
            We may update or remove features from the App at any time. While we strive for continuity and reliability, we cannot guarantee uninterrupted service or permanent access to all data. We recommend downloading important reflections periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">9. Disclaimers</h2>
          <p className="text-gray-700 mb-6">
            The App is provided “as-is” without warranties of any kind. We cannot guarantee results from use or ensure spiritual outcomes. Use of the App is at your discretion and risk.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">10. Governing Law</h2>
          <p className="text-gray-700 mb-6">
            These Terms are governed by the laws of the State of Colorado, USA, without regard to conflict-of-law principles.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">11. Contact</h2>
          <p className="text-gray-700">
            For questions or support regarding these Terms, email us at:<br />
            <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>
          </p>

          <p className="text-center text-sm text-gray-500 mt-12">
            Thank you for using Bible Mentor AI with honesty, humility, and a heart to grow in faith.
          </p>
        </div>
      </section>
    </>
  );
}
