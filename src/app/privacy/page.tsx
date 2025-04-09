export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Privacy Policy</h1>

        <p className="text-sm text-gray-500 mb-10 text-center">Effective Date: [April 9, 2025]</p>

        <p className="text-gray-700 mb-6">
          Bible Mentor AI LLC (“we,” “us,” “our”) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use the Bible Mentor AI app (“the App”).
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Your first name or display name (optional)</li>
          <li>Your faith journey preferences (e.g., devotional track)</li>
          <li>Questions or messages you send to the AI</li>
          <li>Anonymous usage data (e.g., which features you use)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          We do not ask for sensitive personal information such as health data, financial details, or passwords.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Provide personalized devotionals and guidance</li>
          <li>Improve the App experience for all users</li>
          <li>Respond to user questions or support requests</li>
          <li>Track engagement with devotional content and features</li>
        </ul>
        <p className="text-gray-700 mt-2">
          Your data may be used anonymously to help refine the AI’s performance and improve future features.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">3. Third-Party Services</h2>
        <p className="text-gray-700 mb-2">
          We use trusted platforms like:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Glide (for app development)</li>
          <li>OpenAI (for language generation)</li>
          <li>Google Sheets or Firebase (for backend storage, if applicable)</li>
        </ul>
        <p className="text-gray-700 mt-2">
          These services may process data on our behalf but do not own or sell your information.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">4. Cookies & Tracking</h2>
        <p className="text-gray-700">
          If you access the App via a web browser, basic cookies or similar technologies may be used to remember your settings or track app performance. No targeted advertising cookies are used.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">5. Data Security</h2>
        <p className="text-gray-700">
          We take reasonable measures to secure your data, but no system is 100% secure. Do not share sensitive information through the App.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">6. Data Retention</h2>
        <p className="text-gray-700">
          We retain user data only as long as needed for app functionality, improvement, or user support. You may request deletion of your data by contacting us.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">7. Children’s Privacy</h2>
        <p className="text-gray-700">
          The App is intended for users 13 years and older. If you are under 18, please use the App with parental or guardian supervision.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">8. Your Rights (GDPR & California Residents)</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Access, correct, or delete your data</li>
          <li>Withdraw consent at any time</li>
          <li>Request a copy of your personal data</li>
        </ul>
        <p className="text-gray-700 mt-2">
          To make a request, contact us at <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">9. Policy Updates</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be posted in the App. Continued use after changes means you accept the revised policy.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-2">10. Contact</h2>
        <p className="text-gray-700">
          If you have questions about this Privacy Policy or your data, contact: <br />
          <a href="mailto:support@biblementorai.org" className="text-blue-700 underline">support@biblementorai.org</a>
        </p>

        <p className="text-center text-sm text-gray-500 mt-12">
          Thank you for trusting Bible Mentor AI with your spiritual journey.
        </p>
      </div>
    </section>
  );
}
