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
  const [entry, setEntry] = useState<DailyWord | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/houstonmarkw/bible-mentor-ai-frontend/main/data/daily-word-collection.json'
        );
        const fullList: DailyWord[] = await res.json();

        const dayOfYear = Math.floor(
          (new Date().getTime() -
            new Date(new Date().getFullYear(), 0, 0).getTime()) /
            (1000 * 60 * 60 * 24)
        );

        const index = dayOfYear % fullList.length;
        setEntry(fullList[index]);
      } catch (e) {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-red-600">
          Failed to load Daily Word.
        </h2>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-600">
          Loading Daily Word...
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">{entry.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{entry.date}</p>

      <h2 className="text-xl font-semibold text-gray-700 mb-2">{entry.verse}</h2>
      <p
        className="text-gray-700 italic mb-8"
        dangerouslySetInnerHTML={{ __html: entry.text }}
      />

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Reflection</h3>
      <p
        className="text-gray-700 leading-relaxed mb-8"
        dangerouslySetInnerHTML={{ __html: entry.devotional }}
      />

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Prayer</h3>
      <p
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: entry.prayer }}
      />
    </section>
  );
}
