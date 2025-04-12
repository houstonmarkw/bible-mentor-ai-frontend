'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  category: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filtered, setFiltered] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/data/blog-posts.json');
        if (!res.ok) throw new Error('Failed to fetch blog data');
        const data: BlogPost[] = await res.json();

        const allCategories = Array.from(new Set(data.map((p) => p.category)));
        setPosts(data);
        setFiltered(data);
        setCategories(allCategories);
      } catch (err) {
        console.error('Blog fetch failed:', err);
        setError(true);
      }
    };

    fetchPosts();
  }, []);

  const handleFilter = (category: string | null) => {
    setSelected(category);
    if (!category) {
      setFiltered(posts);
    } else {
      setFiltered(posts.filter((p) => p.category === category));
    }
  };

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

          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              <button
                onClick={() => handleFilter(null)}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  selected === null
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleFilter(cat)}
                  className={`px-4 py-1 rounded-full text-sm font-medium ${
                    selected === cat
                      ? 'bg-blue-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {error ? (
            <p className="text-center text-red-600">Failed to load blog posts.</p>
          ) : filtered.length === 0 ? (
            <p className="text-center text-gray-500">No posts found.</p>
          ) : (
            <div className="space-y-10">
              {filtered.map((post) => (
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
