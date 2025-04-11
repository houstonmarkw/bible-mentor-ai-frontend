import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white py-20 text-center px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Bible Mentor AI
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
        Built to guide, not to replace.
      </p>
      <div className="text-gray-600 text-base md:text-lg space-y-1">
        <p>Walk with Christ. Every day.</p>
        <p>Not chat. Communion.</p>
        <p>Made by believers, for believers.</p>
        <p>Devotion. Direction. Daily.</p>
      </div>
      <a
        href="#waitlist"
        className="mt-10 inline-block bg-black text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
      >
        Start Your Journey
      </a>
    </section>
  );
};

export default Hero;
