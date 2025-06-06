'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const chapterCounts: Record<string, number> = {
  genesis: 50, exodus: 40, leviticus: 27, numbers: 36, deuteronomy: 34,
  joshua: 24, judges: 21, ruth: 4, '1 samuel': 31, '2 samuel': 24,
  '1 kings': 22, '2 kings': 25, '1 chronicles': 29, '2 chronicles': 36, ezra: 10,
  nehemiah: 13, esther: 10, job: 42, psalms: 150, proverbs: 31,
  ecclesiastes: 12, 'song of solomon': 8, isaiah: 66, jeremiah: 52, lamentations: 5,
  ezekiel: 48, daniel: 12, hosea: 14, joel: 3, amos: 9,
  obadiah: 1, jonah: 4, micah: 7, nahum: 3, habakkuk: 3,
  zephaniah: 3, haggai: 2, zechariah: 14, malachi: 4,
  matthew: 28, mark: 16, luke: 24, john: 21, acts: 28,
  romans: 16, '1 corinthians': 16, '2 corinthians': 13, galatians: 6, ephesians: 6,
  philippians: 4, colossians: 4, '1 thessalonians': 5, '2 thessalonians': 3,
  '1 timothy': 6, '2 timothy': 4, titus: 3, philemon: 1, hebrews: 13, james: 5,
  '1 peter': 5, '2 peter': 3, '1 john': 5, '2 john': 1, '3 john': 1,
  jude: 1, revelation: 22
};

export default function BookChaptersPage() {
  const params = useParams();
  const rawBook = params?.book?.toString() || '';
  const book = decodeURIComponent(rawBook).toLowerCase();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (book && chapterCounts[book]) {
      setCount(chapterCounts[book]);
    }
  }, [book]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 capitalize text-gray-800 dark:text-white">
        {decodeURIComponent(rawBook)}
      </h1>

      {count > 0 ? (
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <Link
              key={i}
              href={`/bible/web/${encodeURIComponent(book)}/${i + 1}`}
              className="bg-blue-100 text-black hover:bg-blue-200 dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-white text-center py-2 rounded font-medium text-sm transition"
            >
              {i + 1}
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">
          No chapter info available for this book.
        </p>
      )}
    </div>
  );
}
