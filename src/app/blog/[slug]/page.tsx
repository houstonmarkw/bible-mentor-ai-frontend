import { notFound } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const docRef = doc(db, 'blogPosts', slug);
  const snapshot = await getDoc(docRef);

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
