export default function OnboardingTrust() {
  return (
    <section className="bg-gray-50 min-h-screen px-6 py-20 flex flex-col justify-center items-center text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">You Own Your Journey</h1>
        <p className="text-gray-700 text-lg mb-4">
          We walk with you in your faith—but the journey is always yours.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 text-base mb-6">
          <li>We remember your reflections so you can reflect later</li>
          <li>You can download, edit, or delete anything at any time</li>
          <li>We don’t sell, share, or monetize your personal data</li>
        </ul>
        <p className="text-sm text-gray-600 mb-8">
          Need a copy of your reflections? Want to start fresh? Just ask. We'll make it happen—even if it means mailing you a flash drive.
        </p>
        <p className="italic text-blue-800 font-medium mb-8">
          Your story is sacred. We’re just here to help you see it more clearly.
        </p>
        <button className="bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800 transition">
          Continue
        </button>
      </div>
    </section>
  );
}
