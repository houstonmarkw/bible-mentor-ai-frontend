'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LoginForm from '@/components/LoginForm';
import {
  saveBlogPost,
  fetchAllBlogPosts,
  updateBlogPost,
  deleteBlogPost,
} from '@/lib/blog';
import type { BlogPost } from '@/types/blog';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function AdminBlogPage() {
  const [form, setForm] = useState<BlogPost>({
    title: '',
    slug: '',
    summary: '',
    date: new Date().toISOString().slice(0, 10),
    author: 'Mark Houston',
    category: '',
    content: '',
  });

  const [formId, setFormId] = useState<string | null>(null);
  const [savedPosts, setSavedPosts] = useState<BlogPost[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const isEditing = !!formId;

  const adminEmails = [
    'markhouston@biblementorai.org',
    'ryandanley@biblementorai.org',
  ];

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserEmail(user?.email || null);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userEmail && adminEmails.includes(userEmail)) {
      fetchAllBlogPosts().then((posts) => {
        setSavedPosts(posts as BlogPost[]);
      });
    }
  }, [userEmail]);

  if (authLoading) {
    return <p className="text-center mt-24">Checking authentication...</p>;
  }

  if (!userEmail || !adminEmails.includes(userEmail)) {
    return <LoginForm />;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.title || !form.slug || !form.content) {
      alert('Title, Slug, and Content are required.');
      return;
    }

    try {
      if (isEditing && formId) {
        await updateBlogPost(formId, form);
      } else {
        await saveBlogPost(form);
      }

      setSubmitted(true);
      setFormId(null);
      setForm({
        title: '',
        slug: '',
        summary: '',
        date: new Date().toISOString().slice(0, 10),
        author: 'Mark Houston',
        category: '',
        content: '',
      });

      const posts = await fetchAllBlogPosts();
      setSavedPosts(posts as BlogPost[]);
    } catch (error) {
      console.error('Failed to save post:', error);
      alert('Error saving blog post. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      window.location.href = '/admin/blog';
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Error signing out.');
    }
  };

  return (
    <>
      <Head>
        <title>Blog Admin – Bible Mentor AI</title>
      </Head>

      <section className="bg-white min-h-screen px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800">
              {isEditing ? 'Edit Blog Post' : 'New Blog Post'}
            </h1>
            <button
              onClick={handleLogout}
              className="text-sm bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Log Out
            </button>
          </div>

          {submitted && (
            <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-6 text-sm text-center">
              Post {isEditing ? 'updated' : 'submitted'}! Preview updated below.
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
              <label className="block text-sm font-medium text-gray-700 mb-1">Content (Rich Text)</label>
              <RichTextEditor
                content={form.content}
                onChange={(val) => setForm((prev) => ({ ...prev, content: val }))}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition"
            >
              {isEditing ? 'Update Post' : 'Submit Post'}
            </button>
          </form>
        </div>

        {savedPosts.length > 0 && (
          <div className="max-w-3xl mx-auto mt-16 space-y-10">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Saved Posts</h2>
            {savedPosts.map((post) => (
              <div key={post.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-blue-700">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {post.date} • {post.category} • by {post.author}
                </p>
                <div
                  className="text-gray-700 mt-2 prose prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => {
                      setFormId(post.id || null);
                      setForm({
                        title: post.title,
                        slug: post.slug,
                        summary: post.summary,
                        date: post.date,
                        author: post.author,
                        category: post.category,
                        content: post.content,
                      });
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={async () => {
                      const confirmed = confirm(`Delete post "${post.title}"?`);
                      if (!confirmed) return;
                      await deleteBlogPost(post.id!);
                      setSavedPosts((prev) => prev.filter((p) => p.id !== post.id));
                    }}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
