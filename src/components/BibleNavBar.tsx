'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const books = [
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy',
  'joshua', 'judges', 'ruth', '1 samuel', '2 samuel',
  '1 kings', '2 kings', '1 chronicles', '2 chronicles', 'ezra',
  'nehemiah', 'esther', 'job', 'psalms', 'proverbs',
  'ecclesiastes', 'song of solomon', 'isaiah', 'jeremiah', 'lamentations',
  'ezekiel', 'daniel', 'hosea', 'joel', 'amos',
  'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk',
  'zephaniah', 'haggai', 'zechariah', 'malachi',
  'matthew', 'mark', 'luke', 'john', 'acts',
  'romans', '1 corinthians', '2 corinthians', 'galatians', 'ephesians',
  'philippians', 'colossians', '1 thessalonians', '2 thessalonians', '1 timothy',
  '2 timothy', 'titus', 'philemon', 'hebrews', 'james',
  '1 peter', '2 peter', '1 john', '2 john', '3 john',
  'jude', 'revelation'
];

export default function BibleNavBar() {
  const params = useParams();
  const rawBook = params?.book?.toString() || '';
  const book = decodeURIComponent(rawBook).toLowerCase(); // ✅ decode properly
  const chapter = Number(params?.chapter);

  return (
    <div className="flex flex-wrap justify-between items-center mb-6 gap-2 text-sm">
      <Link href="/bible/web" className="text-blue-600 hover:underline">
        ← All Books
      </Link>

      <div className="flex gap-2 items-center">
        <span className="text-gray-600 dark:text-gray-300">Book:</span>
        <select
          value={book}
          onChange={(e) => {
            window.location.href = `/bible/web/${e.target.value}/1`;
          }}
          className="border rounded p-1 bg-white dark:bg-gray-800 dark:text-white"
        >
          {books.map((b) => (
            <option key={b} value={b}>
              {b.charAt(0).toUpperCase() + b.slice(1)}
            </option>
          ))}
        </select>

        <span className="text-gray-600 dark:text-gray-300">Chapter:</span>
        <input
          type="number"
          min={1}
          value={chapter}
          onChange={(e) =>
            (window.location.href = `/bible/web/${encodeURIComponent(book)}/${e.target.value}`)
          }
          className="border rounded p-1 w-16 bg-white dark:bg-gray-800 dark:text-white"
        />
      </div>
    </div>
  );
}
