export default function TrustPage() {
  return (
    <section className="bg-white min-h-screen px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Why You Can Trust Us</h1>

        <p className="text-gray-700 mb-6">
          At Bible Mentor AI, we believe your walk with Jesus is sacred. Your spiritual journey should never be mined for profit, tracked for behavior, or treated like a dataset. We store your faith story only so <em>you</em> can reflect on what God has done&mdash;and never for any other reason.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">What We Store &mdash; and Why</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li><strong>Reflections</strong> &mdash; so you can see how your faith grows over time</li>
          <li><strong>Verse highlights</strong> &mdash; to revisit the Scriptures that moved your heart</li>
          <li><strong>Devotional progress</strong> &mdash; to stay consistent in daily discipleship</li>
        </ul>
        <p className="text-gray-700 mb-6">
          We do <strong>not</strong> store tracking cookies, ad behavior, or anything unrelated to your walk with God.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">You're in Control</h2>
        <p className="text-gray-700 mb-6">
          Everything you create is yours:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Edit, tag, or delete any entry</li>
          <li>Download a full copy of your journey anytime</li>
          <li>Request permanent deletion&mdash;we'll honor it, no questions asked</li>
          <li>Want a copy mailed to you? We'll send a USB if that's what it takes</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">How We Protect Your Story</h2>
        <p className="text-gray-700 mb-6">
          Your data is encrypted and securely stored using Google Firebase &amp; Firestore. Only you can view your content&mdash;unless you ask our team for help. We never share, sell, or analyze your information for profit.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">Why Memory Matters in Discipleship</h2>
        <p className="text-gray-700 mb-6">
          Most apps start fresh every time you open them. Bible Mentor AI doesn't. We remember what you've written&mdash;not to track you, but to help you grow.
        </p>
        <p className="text-gray-700 mb-6 italic">
          "We store your story so you can see God's faithfulness&mdash;not so we can use it."
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-2">From the Founder</h2>
        <p className="text-gray-700 mb-6">
          "Bible Mentor AI was born from my own desire to walk with Jesus in a more consistent, real, and anchored way. This app is my witness to the power of grace and the importance of remembering. We're not trying to build the biggest Christian app&mdash;we're trying to build the most faithful one."
        </p>
        <p className="text-gray-700 mb-2 font-semibold">&mdash; Mark Houston, Founder</p>

        <p className="text-center text-sm text-gray-500 mt-12">
          Trust is sacred. We are honored to earn yours.
        </p>

        {/* New Download Section */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">See Our Full Commitment</h3>
            <p className="text-gray-700 mb-6 text-center">
              At Bible Mentor AI, trust is sacred -; and transparency is part of that trust.<br />
              We have put together a full Trust &amp; Security Report to show exactly how we protect your memories, prayers, and reflections.
            </p>
            <div className="flex justify-center">
              <a
                href="/Bible_Mentor_AI_Trust_Report_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
              >
                Download the 2025 Trust &amp; Security Report (PDF)
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
