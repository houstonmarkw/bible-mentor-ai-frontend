'use client';

import PrivacyCommitment from '../../components/PrivacyCommitment';

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10 text-center">Effective Date: April 10, 2025</p>

        {/* ✅ Inserted Trust Component */}
        <PrivacyCommitment />

        {/* ✅ Begin full policy content */}
        <p className="text-gray-700 mb-6">
          Bible Mentor AI LLC ("we," "us," "our") is committed to protecting your privacy and honoring the sacred nature of your faith journey. This Privacy Policy explains how we collect, use, store, and protect your information when you use the Bible Mentor AI app ("the App").
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">1. Purpose of Data Collection</h2>
        <p className="text-gray-700 mb-6">
          We collect personal data solely to support your spiritual growth, track your devotional progress, and deliver a personalized faith-based experience. Your reflections, verse highlights, prayer notes, and spiritual milestones are stored securely to help guide your walk with Christ—not for marketing or behavioral profiling.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">2. What Data We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Your name and email (for account registration and communication)</li>
          <li>Reflections and journal entries</li>
          <li>Devotional progress and track selections</li>
          <li>Verse highlights, notes, and tags</li>
          <li>User preferences (e.g., reminder type, theme settings)</li>
          <li>Usage metadata (e.g., timestamps, feature use) via Firebase</li>
        </ul>
        <p className="text-gray-700 mt-2">
          We do not collect biometric or financial information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">3. How We Use Your Data</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Deliver personalized devotional content</li>
          <li>Remember and track your spiritual progress</li>
          <li>Enable reminders and content suggestions</li>
          <li>Improve the app's spiritual tools and experience</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">4. AI Interactions</h2>
        <p className="text-gray-700 mb-6">
          Bible Mentor AI uses artificial intelligence to guide study, offer mentorship prompts, and generate devotionals. Interactions are processed by OpenAI, but long-term user data is not stored by OpenAI. All reflections and memory are stored only in our secure Firebase Firestore database, linked to your user ID.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">5. Data Storage & Security</h2>
        <p className="text-gray-700 mb-6">
          Your data is stored using Google Firebase and Firestore, both of which meet industry-standard encryption protocols. Access is protected by Firebase Authentication. Only you (and optionally our support team, with permission) can access your data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">6. Third-Party Services</h2>
        <p className="text-gray-700 mb-2">We use trusted services, including:</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Firebase (Authentication, Firestore, Hosting)</li>
          <li>Formspree (for contact form submission)</li>
          <li>GitHub (for devotional content hosting)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          These services do not sell or retain ownership of your data. No advertising or tracking cookies are used.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">7. User Controls and Rights</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Edit, tag, or delete reflections</li>
          <li>Highlight or remove verse notes</li>
          <li>Request a data export or account deletion</li>
          <li>Manage reminder and notification preferences</li>
        </ul>
        <p className="text-gray-700 mt-2">
          These tools are available through the “My Journey” section of the App. You're always in control.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">8. Children's Privacy</h2>
        <p className="text-gray-700">
          Bible Mentor AI is not intended for children under 13. All accounts must be created by adults. If your family uses the App together, we recommend doing so with parental guidance. We comply with COPPA and related protections.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">9. Your Rights (GDPR & California Residents)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Request access, correction, or deletion of your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request a copy of your personal information</li>
        </ul>
        <p className="text-gray-700 mt-2">
          To make a request, email us at <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">10. Policy Updates</h2>
        <p className="text-gray-700">
          We may revise this Privacy Policy as the App evolves. We will post all changes in the App. Continued use after changes means you accept the updated policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">11. Contact</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy, please contact:<br />
          <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>
        </p>

        <p className="text-center text-sm text-gray-500 mt-12">
          In faith, privacy is a promise. Your journey is personal. We’re here to support it—not surveil it.
        </p>
      </div>
    </section>
  );
}
