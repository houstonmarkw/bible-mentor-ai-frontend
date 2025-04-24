'use client';

import { useState } from 'react';
import { httpsCallable } from 'firebase/functions';
import { functions } from '@/lib/firebase'; // Adjust path if needed

interface VerseModalProps {
  verse: {
    verse: string;
    text: string;
  };
  book: string;
  chapter: string;
  onClose: () => void;
}

const tagOptions = [
  'Faith',
  'Love',
  'Prayer',
  'Parenting',
  'Hope',
  'Obedience',
  'Forgiveness',
];

export default function VerseModal({ verse, book, chapter, onClose }: VerseModalProps) {
  const [reflection, setReflection] = useState('');
  const [highlighted, setHighlighted] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const version = 'web'; // static for now

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSave = async () => {
    setSubmitting(true);
    try {
      if (reflection || tags.length || highlighted) {
        const saveReflection = httpsCallable(functions, 'saveBibleReflection');
        await saveReflection({
          version,
          book,
          chapter,
          verse: verse.verse,
          text: verse.text,
          reflection,
          tags,
          highlighted,
        });
        console.log('✅ Reflection saved');
      } else if (highlighted) {
        const saveHighlight = httpsCallable(functions, 'saveHighlight');
        await saveHighlight({
          version,
          book,
          chapter,
          verse: verse.verse,
        });
        console.log('✅ Highlight saved');
      }
    } catch (err) {
      console.error('❌ Error saving reflection or highlight', err);
    } finally {
      setSubmitting(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-lg font-bold mb-2">
          {book} {chapter}:{verse.verse}
        </h2>
        <p className="mb-4">{verse.text}</p>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Reflection</label>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            className="w-full border rounded p-2"
            rows={3}
            placeholder="What does this verse mean to you?"
          />
        </div>

        <div className="mb-4">
          <label className="font-semibold block mb-1">Tags</label>
          <div className="flex flex-wrap gap-2">
            {tagOptions.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full border ${
                  tags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={highlighted}
              onChange={() => setHighlighted(!highlighted)}
            />
            Highlight this verse
          </label>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => {
              alert('Coming soon: Discuss with Bible Mentor AI');
            }}
            className="text-blue-600 hover:underline"
          >
            Discuss with Mentor
          </button>
          <button
            onClick={handleSave}
            disabled={submitting}
            className="bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            {submitting ? 'Saving...' : 'Save Reflection'}
          </button>
        </div>
      </div>
    </div>
  );
}
