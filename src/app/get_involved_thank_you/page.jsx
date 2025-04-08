export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-white text-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Thank You!</h1>
      <p className="text-lg text-gray-700 mb-6">
        We’ve received your submission and we’re grateful you want to help shape Bible Mentor AI.
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
