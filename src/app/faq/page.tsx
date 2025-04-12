'use client';

import Head from 'next/head';

export default function FAQPage() {
  const qa = [
    {
      q: 'Do I need to be Christian to use Bible Mentor AI?',
      a: 'No. Bible Mentor AI is open to anyone curious about faith, Jesus, or the Bible. Whether you\'re exploring, returning to faith, or deeply committed, you\'re welcome here.'
    },
    {
      q: 'What version of the Bible do you use?',
      a: 'We primarily use the World English Bible (WEB), a public domain, modern English translation. You can also explore verses in other translations.'
    },
    {
      q: 'Is Bible Mentor AI aligned with a specific denomination?',
      a: 'No. We aim to represent core Christian beliefs while fairly acknowledging denominational perspectives where helpful. Our focus is on helping people know Jesus.'
    },
    {
      q: 'How do you handle theological differences?',
      a: 'Respectfully. We explain key viewpoints (Catholic, Protestant, Orthodox, etc.) when appropriate, but always center on Scripture and the person of Christ.'
    },
    {
      q: 'Can I ask personal faith questions?',
      a: 'Yes! Bible Mentor AI is built to respond to your questions, struggles, and reflections with grace and guidance. You’re not alone.'
    },
    {
      q: 'Is this a replacement for church?',
      a: 'No. Bible Mentor AI can supplement your faith, but it’s not a substitute for community worship, sacraments, or pastoral care.'
    },
    {
      q: 'What if I don’t understand the Bible?',
      a: 'That’s okay! Bible Mentor AI breaks down Scripture into approachable lessons, reflections, and study questions. We grow by walking with Jesus daily.'
    },
    {
      q: 'Is this project trying to convert people?',
      a: 'Our goal is to help people encounter Jesus through His Word. Transformation happens in hearts, not through pressure. We trust the Spirit to work.'
    },
    {
      q: 'Is it okay to have doubts?',
      a: 'Yes. Faith often starts with honest questions. Jesus welcomed the doubtful, the skeptical, and the broken. We do too.'
    },
    {
      q: 'How can I support Bible Mentor AI?',
      a: 'You can share the app, pray for its mission, or offer donations if available. Every step of faith you take matters.'
    },
    {
      q: 'How can I give feedback or ask for spiritual help?',
      a: 'You can reach out through our contact form or submit questions directly through the app. We’re here to help you grow and walk closer with Jesus.'
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ – Bible Mentor AI</title>
        <meta
          name="description"
          content="Frequently asked questions about Bible Mentor AI – how it works, how your data is used, and how to grow spiritually through your personalized journey."
        />
        <link rel="canonical" href="https://biblementorai.org/faq" />
      </Head>

      <section className="bg-white min-h-screen px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">Spiritual FAQ</h1>
          {qa.map((item, idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Q: {item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
          <p className="text-center text-sm text-gray-500 mt-12">
            Learn. Carry. Follow. <br />
            <span className="font-medium text-blue-700">Bible Mentor AI:</span> Guiding you through the Word, in the Word, and with the Word.
          </p>
        </div>
      </section>
    </>
  );
}
