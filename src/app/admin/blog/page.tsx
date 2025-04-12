'use client';

import { useState } from 'react';
import Head from 'next/head';

export default function AdminBlogPage() {
  const [form, setForm] = useState({
    title: '',
    slug: '',
    summary: '',
    date: new Date().toISOString().slice(0, 10),
    author: 'Mark Houston',
    category: '',
    content: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.slug || !form.content) {
      alert('Title, Slug, and Content are required.');
      return;
    }

    console.log('📝 New blog post data:', form);
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Blog Admin – Bible Mentor AI</title>
      </Head>

      <section className="bg-white min-h-screen px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">New Blog Post</h1>

          {submitted && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-6 text-sm text-center">
              Post submitted! Check the console — Firestore integration coming next.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-blue-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Slug (URL)</label>
              <input
                name="slug"
                value={form.slug}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-blue-800"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Summary</label>
              <textarea
                name="summary"
                value={form.summary}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-blue-800"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-blue-800"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 text-blue-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Content (Markdown)</label>
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 text-blue-800"
                rows={10}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
