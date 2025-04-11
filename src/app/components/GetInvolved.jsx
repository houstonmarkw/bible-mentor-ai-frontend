import React from "react";

const GetInvolved = () => {
  return (
    <section id="get-involved" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Get Involved
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Bible Mentor AI is a growing project built by believers, for believers. If you'd like to help shape the future of this platform — in prayer, in testing, in giving, or in wisdom — we’d love to hear from you.
        </p>

        <div className="mb-10 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">Ways to Get Involved:</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>🔍 Beta Testers:</strong> Try new features early and help us improve the experience</li>
            <li><strong>🙏 Prayer Partners:</strong> Pray over the vision, the content, and the people using the app</li>
            <li><strong>✍️ Content Collaborators:</strong> Write devotionals, reflections, or verse insights</li>
            <li><strong>💝 Supporters / Donors:</strong> Help cover hosting, development, and future ministry growth</li>
            <li><strong>⛪ Church Partners:</strong> Introduce BMAI to your congregation or integrate it into discipleship groups</li>
          </ul>
        </div>

        <form
          action="https://formspree.io/f/xblgpwao"
          method="POST"
          className="space-y-6"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Get Involved Submission from BibleMentorAI.org"
          />

          <div>
            <label htmlFor="name" className="block text-gray-800 font-medium">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              autoComplete="off"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-gray-800 font-medium">
              How would you like to get involved? *
            </label>
            <select
              id="role"
              name="role"
              required
              className="mt-1 w-full px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select an option</option>
              <option value="Beta Tester">Beta Tester</option>
              <option value="Prayer Partner">Prayer Partner</option>
              <option value="Content Collaborator">Content Collaborator</option>
              <option value="Supporter / Donor">Supporter / Donor</option>
              <option value="Church Partner">Church Partner</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-800 font-medium">
              Optional Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetInvolved;
