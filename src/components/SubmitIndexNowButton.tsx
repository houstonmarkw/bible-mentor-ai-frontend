'use client'; // if in App Router

import { useState } from 'react';

export function SubmitIndexNowButton({ url }: { url: string }) {
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    setStatus('Submitting...');
    try {
      const res = await fetch('/api/submit-to-indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      setStatus(data.status === 'success' ? '✅ Submitted!' : '❌ Error');
    } catch (err) {
      setStatus('❌ Failed');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded shadow">
        Submit to IndexNow
      </button>
      {status && <span>{status}</span>}
    </div>
  );
}
