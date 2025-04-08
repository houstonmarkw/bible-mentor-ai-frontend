export default function WaitlistThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">You're on the list!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for joining the Bible Mentor AI waitlist. We'll keep you in the loop as we get closer to launch.
      </p>
      <a
        href="/"
        className="inline-block px-6 py-3 bg-blue-900 text-white rounded-md text-lg hover:bg-blue-800 transition"
      >
        Return to Home
      </a>
    </main>
  );
}
