// /app/bible/page.tsx
'use client';

import Link from 'next/link';

const booksOT = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
  '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles', 'Ezra',
  'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs',
  'Ecclesiastes', 'Song of Solomon', 'Isaiah', 'Jeremiah', 'Lamentations',
  'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos',
  'Obadiah', 'Jonah', 'Micah', 'Nahum', 'Habakkuk',
  'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
];

const booksNT = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts',
  'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy',
  '2 Timothy', 'Titus', 'Philemon', 'Hebrews', 'James',
  '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
  'Jude', 'Revelation',
];

const BookGrid = ({ books, title }: { books: string[]; title: string }) => (
  <>
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-6">
      {books.map((book) => (
        <Link
          key={book}
          href={`/bible/web/${book.toLowerCase()}`} // ✅ FIXED: Added /web/
          className="block bg-blue-100 hover:bg-blue-200 text-center px-4 py-2 rounded text-sm font-medium"
        >
          {book}
        </Link>
      ))}
    </div>
  </>
);

export default function BibleNavPage() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Select a Book</h1>
      <BookGrid books={booksOT} title="Old Testament" />
      <BookGrid books={booksNT} title="New Testament" />
    </div>
  );
}
