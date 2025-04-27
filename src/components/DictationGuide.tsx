'use client';

import { useState } from 'react';

export default function DictationGuide() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="text-blue-600 underline text-sm"
      >
        Dictation Guide
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-64 p-4 bg-white border border-gray-300 rounded shadow-lg text-sm text-gray-700">
          <p className="font-bold mb-2">Speech Commands:</p>
          <ul className="space-y-1">
            <li><strong>period</strong> → .</li>
            <li><strong>comma</strong> → ,</li>
            <li><strong>question mark</strong> → ?</li>
            <li><strong>exclamation mark</strong> → !</li>
            <li><strong>new paragraph</strong> → (double line break)</li>
          </ul>
          <button
            onClick={() => setOpen(false)}
            className="text-blue-500 underline mt-3 block"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
