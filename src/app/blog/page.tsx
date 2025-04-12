'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  author: string;
  category: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogPosts'));
        const data: BlogPost[] = querySnapshot.docs.map((doc) => doc.data() as BlogPost);
        const allCategories = Array.from(new Set(data.map((p) => p.category)));
        setPosts(data);
        setCategories(allCategories);
      } catch (err) {
        console.error('Firestore fetch failed:', err);
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head>
        <title>Blog – Bible Mentor AI</title>
        <meta
          name="description"
          content="Explore faith reflections, app updates, and behind-the-scenes stories from Bible Mentor AI. Discover how AI and Scripture can grow your walk with Christ."
        />
        <link rel="canonical" href="https://biblementorai.org/blog" />
      </Head>

      <section className="bg-white min-h-screen px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">Bible Mentor Blog</h1>
          <p className="text-gray-700 text-lg mb-10 text-center">
            Stories of spiritual growth, tech with purpose, and walking in faith.
          </p>

          {/* 🔍 Search Input */}
          <div className="mb-6 flex justify-center">
            <input
              type="text"
              placeholder="Search blog posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm text-blue-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* 🏷️ Category Filters */}
          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  selectedCategory === null
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    selectedCategory === cat
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* 📝 Blog Post List */}
          {error ? (
            <p className="text-center text-red-600">Failed to load blog posts.</p>
          ) : filteredPosts.length === 0 ? (
            <p className="text-center text-gray-500">No matching posts found.</p>
          ) : (
            <div className="space-y-10">
              {filteredPosts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h2 className="text-xl font-semibold text-blue-700">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-gray-400 mt-1">
                    {post.date} • {post.category} • by {post.author}
                  </p>
                  <p className="text-gray-600 mt-2">{post.summary}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-blue-600 underline mt-2 inline-block"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
