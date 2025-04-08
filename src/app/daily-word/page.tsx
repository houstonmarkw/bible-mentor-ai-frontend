'use client';

import { useEffect, useState } from 'react';

type DailyWord = {
  date: string;
  title: string;
  verse: string;
  text: string;
  devotional: string;
  prayer: string;
};

export default function DailyWordPage() {
  const [data, setData] = useState<DailyWord | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/houstonmarkw/bible-mentor-ai-frontend/main/data/daily-word.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-red-600">Failed to load Daily Word.</h2>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-600">Loading Daily Word...</h2>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{data.date}</p>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">{data.verse}</h2>
      <p className="text-gray-700 italic mb-8" dangerouslySetInnerHTML={{ __html: data.text }} />

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Reflection</h3>
      <p className="text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: data.devotional }} />

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer</h3>
      <p className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: data.prayer }} />
    </section>
  );
}
