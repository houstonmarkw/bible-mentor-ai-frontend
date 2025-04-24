import { notFound } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const ref = doc(db, 'blogPosts', slug);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    notFound();
  }

  const post = snapshot.data();

  return (
    <main className="min-h-screen bg-white text-slate-800 px-6 py-16">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.date} • {post.category} • by {post.author}
        </p>

        <div
          className="prose prose-lg prose-blue max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </main>
  );
}
