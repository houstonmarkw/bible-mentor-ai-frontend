'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../../../lib/firebase';
import VerseModal from '../../../../../components/VerseModal';

export default function ChapterPage() {
  const params = useParams();

  const version = params?.version as string;
  const book = params?.book as string;
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
        const ref = doc(db, 'bible', version.toLowerCase(), book.toLowerCase(), chapter);
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
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {book} {chapter}
      </h1>

      <div className="space-y-4">
        {verses.map(({ verse, text }) => (
          <p
            key={verse}
            onClick={() => setSelectedVerse({ verse, text })}
            className="hover:bg-yellow-100 cursor-pointer px-2 py-1 rounded"
          >
            <span className="font-bold">{verse}</span> {text}
          </p>
        ))}
      </div>

      {selectedVerse && (
        <VerseModal
          verse={selectedVerse}
          book={book}
          chapter={chapter}
          onClose={() => setSelectedVerse(null)}
        />
      )}
    </div>
  );
}
