export default function TracksPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Explore Your Path</h1>

        <p className="text-gray-700 mb-6 text-lg">
          Bible Mentor AI offers guided spiritual growth through curated tracks — structured journeys designed to help you grow in faith one day at a time.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-4 mb-10">
          <li><strong>7-Day Tracks</strong> — A great way to start your journey or go deeper in a single theme</li>
          <li><strong>14-Day Tracks</strong> — Perfect for short commitments or spiritual resets</li>
          <li><strong>21-Day Tracks</strong> — Build consistent habits and stay rooted in Scripture</li>
          <li><strong>30-Day Tracks</strong> — Dive deeper into themes like grace, prayer, or purpose</li>
        </ul>

        <p className="text-gray-700 mb-6">
          Each track includes a Daily Word devotional, relevant Scripture, a reflection prompt, and a place to journal your thoughts. Whether you&apos;re new to faith or seeking renewal, you&apos;ll always know what to read next.
        </p>

        <p className="text-gray-700">
          You can begin a track anytime. Your progress is remembered, your reflections saved, and your growth encouraged.
        </p>
      </div>
    </section>
  );
}
