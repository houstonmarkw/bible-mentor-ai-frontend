'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';

type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  content: string; // now in Markdown format
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch('/data/blog-posts.json');
        if (!res.ok) throw new Error('Failed to load blog data');
        const posts: BlogPost[] = await res.json();
        const found = posts.find((p) => p.slug === slug);
        if (!found) throw new Error('Post not found');
        setPost(found);
      } catch (e) {
        setError(true);
        console.error('Blog fetch error:', e);
      }
    };
    fetchPost();
  }, [slug]);

  if (error) {
    return (
      <div className="bg-white min-h-screen text-center py-20">
        <h2 className="text-xl text-red-600 font-semibold">Post not found.</h2>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-white min-h-screen text-center py-20">
        <h2 className="text-xl text-gray-600 font-semibold">Loading blog post...</h2>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} – Bible Mentor AI</title>
        <meta name="description" content={post.summary} />
        <link rel="canonical" href={`https://biblementorai.org/blog/${post.slug}`} />
      </Head>

      <section className="bg-white px-6 py-20 min-h-screen">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-800 mb-2">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-6">
            {post.date} • {post.category} • by {post.author}
          </p>

          <ReactMarkdown className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
            {post.content}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
}
