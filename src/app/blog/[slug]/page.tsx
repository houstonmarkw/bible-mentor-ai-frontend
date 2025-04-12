'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../lib/firebase';

type BlogPost = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  content: string; // Markdown
};

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogPosts'));
        const allPosts = querySnapshot.docs.map((doc) => doc.data() as BlogPost);
        const match = allPosts.find((p) => p.slug === slug);
        if (!match) throw new Error('Not found');
        setPost(match);
      } catch (e) {
        console.error('❌ Failed to load blog post:', e);
        setError(true);
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

          <div className="prose prose-blue max-w-none text-gray-800 leading-relaxed">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}
