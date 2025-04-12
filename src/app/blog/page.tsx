'use client';

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/data/blog-posts.json');
        if (!res.ok) throw new Error('Failed to fetch blog data');
        const data: BlogPost[] = await res.json();
        setPosts(data);
      } catch (err) {
        console.error('Blog fetch failed:', err);
        setError(true);
      }
    };

    fetchPosts();
  }, []);

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

          {error ? (
            <p className="text-center text-red-600">Failed to load blog posts.</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts found yet.</p>
          ) : (
            <div className="space-y-10">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <h2 className="text-xl font-semibold text-blue-700">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mt-2">{post.summary}</p>
                  <p className="text-sm text-gray-400 mt-2">{post.date}</p>
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
