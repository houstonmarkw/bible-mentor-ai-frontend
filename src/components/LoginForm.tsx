'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.reload(); // reload to trigger auth check
    } catch (err) {
      console.error(err);
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-24 space-y-4 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold text-center text-blue-800">Admin Login</h2>
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded px-3 py-2 text-blue-800"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border rounded px-3 py-2 text-blue-800"
      />
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Sign In
      </button>
    </form>
  );
}
