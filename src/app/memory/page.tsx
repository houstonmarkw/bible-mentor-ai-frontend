import Link from "next/link";

export default function MemoryPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Your Faith Journey, Remembered
        </h1>

        <p className="text-lg mb-8 text-center italic text-gray-600">
          How Bible Mentor AI walks with you over time
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Why We Remember</h2>
            <p>
              Most apps give you a verse and send you on your way. Bible Mentor AI was built differently—from the beginning.
              We believe your walk with Jesus is a <em>journey</em>, not a transaction. That means every question, every prayer, every verse that moved your heart matters. Our memory system exists to honor that. To help you grow, reflect, and see what God is doing in your life—day by day.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">What We Save (and Why)</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Reflections</strong> – Things you’ve written in response to Jesus</li>
              <li><strong>Verses</strong> – Highlighted passages that spoke to you</li>
              <li><strong>Insights</strong> – Thoughts, connections, or spiritual breakthroughs</li>
              <li><strong>Questions</strong> – Things you’re wrestling with</li>
              <li><strong>Answered Prayers</strong> – Moments when God came through</li>
            </ul>
            <p className="mt-4">You can add <strong>tags</strong> to everything you save (like grace, fatherhood, calling), so you can revisit them later.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">How It Helps You Grow</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Remind you of past reflections</li>
              <li>Surface themes God is shaping in your life</li>
              <li>Personalize devotional guidance and encouragement</li>
              <li>Show you growth over time</li>
            </ul>
            <p className="mt-4">You’ll see it all on your <strong>My Journey</strong> screen—a personal archive of your walk with God.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">You’re in Control</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Your data is private.</strong> No one sees your reflections but you.</li>
              <li><strong>You can delete anything.</strong> At any time.</li>
              <li><strong>You can export your journey.</strong> As a PDF or timeline (coming soon).</li>
              <li><strong>You can turn memory off.</strong> Want to go incognito for a while? That’s okay too.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Security and Trust</h2>
            <p>
              All your data is encrypted and stored securely in the cloud.
              We don’t sell your data. We don’t track you. We serve you.
              Bible Mentor AI exists to walk alongside you in truth, not to exploit your faith.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">FAQs</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Q: Do I have to use the memory feature?</p>
                <p>A: Nope. You can use Bible Mentor AI without saving anything.</p>
              </div>
              <div>
                <p className="font-semibold">Q: Is this like a journal?</p>
                <p>A: Yes—except smarter. Your reflections connect to Scripture, devotional tracks, and AI-powered encouragement.</p>
              </div>
              <div>
                <p className="font-semibold">Q: Can I delete everything?</p>
                <p>A: Yes. Every single note, question, or saved moment can be deleted by you at any time.</p>
              </div>
              <div>
                <p className="font-semibold">Q: What if I want to keep a record for my kids or spouse someday?</p>
                <p>A: We’re working on <strong>Legacy Export Mode</strong> so you can pass on your journey if you choose to.</p>
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-col items-center space-y-4">
            <Link href="/my-journey" className="text-blue-700 hover:underline font-medium">Explore My Journey</Link>
            <Link href="/privacy" className="text-blue-700 hover:underline font-medium">Read our Privacy Policy</Link>
            <Link href="/settings" className="text-blue-700 hover:underline font-medium">Manage Your Memory Settings</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

