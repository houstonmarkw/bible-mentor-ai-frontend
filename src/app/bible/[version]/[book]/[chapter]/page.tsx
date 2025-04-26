'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../lib/firebase';
import VerseModal from '../../../../../components/VerseModal';
import BibleNavBar from '../../../../../components/BibleNavBar';

export default function ChapterPage() {
  const params = useParams();

  const version = params?.version as string;
  const rawBook = params?.book?.toString() || '';
  const book = decodeURIComponent(rawBook).toLowerCase(); // ✅ decode %20 back to spaces
  const chapter = params?.chapter as string;

  const [verses, setVerses] = useState<{ verse: string; text: string }[]>([]);
  const [selectedVerse, setSelectedVerse] = useState<{
    verse: string;
    text: string;
  } | null>(null);

  useEffect(() => {
    if (!book || !chapter || !version) return;

    const fetchChapter = async () => {
      try {
          console.log('🔥 Fetching Firestore doc path:', version.toLowerCase(), book, chapter);
        const ref = doc(db, 'bible', version.toLowerCase(), book, chapter);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          const data = snap.data();
          const versesObject = data.verses;

          if (versesObject && typeof versesObject === 'object') {
            const parsed = Object.entries(versesObject).map(([verse, text]) => ({
              verse,
              text: text as string,
            }));
            setVerses(parsed);
          } else {
            console.error('❌ verses object is missing or malformed');
          }
        } else {
          console.warn(`❌ Chapter not found in Firestore: ${book} ${chapter}`);
        }
      } catch (err) {
        console.error('💥 Firestore fetch error:', err);
      }
    };

    fetchChapter();
  }, [version, book, chapter]);

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* 🧭 Top Navigation */}
      <BibleNavBar />

      {/* Chapter Title */}
      <h1 className="text-2xl font-bold mb-4 capitalize text-gray-800 dark:text-white">
        {decodeURIComponent(rawBook)} {chapter}
      </h1>

      {/* Verse List */}
      <div className="space-y-4">
        {verses.map(({ verse, text }) => (
          <p
            key={verse}
            onClick={() => setSelectedVerse({ verse, text })}
            className="hover:bg-yellow-100 dark:hover:bg-yellow-600 cursor-pointer px-2 py-1 rounded text-black dark:text-white"
          >
            <span className="font-bold">{verse}</span> {text}
          </p>
        ))}
      </div>

      {/* Next / Previous Buttons */}
      <div className="mt-10 flex justify-between">
        {Number(chapter) > 1 ? (
          <Link
            href={`/bible/${version}/${encodeURIComponent(book)}/${Number(chapter) - 1}`}
            className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
          >
            ← Previous
          </Link>
        ) : (
          <div />
        )}

        <Link
          href={`/bible/${version}/${encodeURIComponent(book)}/${Number(chapter) + 1}`}
          className="px-4 py-2 rounded bg-blue-700 text-white hover:bg-blue-800"
        >
          Next →
        </Link>
      </div>

      {/* Modal */}
      {selectedVerse && (
        <VerseModal
          verse={selectedVerse}
          book={decodeURIComponent(rawBook)}
          chapter={chapter}
          onClose={() => setSelectedVerse(null)}
        />
      )}
    </div>
  );
}
