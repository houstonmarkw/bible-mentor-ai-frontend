import { db } from './firebase'
import {
  collection,
  addDoc,
  getDocs,
  Timestamp,
  DocumentData,
} from 'firebase/firestore'

// Save a new blog post
export async function saveBlogPost(post: {
  title: string;
  slug: string;
  summary: string;
  date: string;
  author: string;
  category: string;
  content: string;
}) {
  const newPost = {
    ...post,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  }

  return await addDoc(collection(db, 'blogPosts'), newPost)
}

// Fetch all blog posts from Firestore
export async function fetchAllBlogPosts(): Promise<DocumentData[]> {
  const snapshot = await getDocs(collection(db, 'blogPosts'))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}
export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
  const ref = doc(db, 'blogPosts', id)
  return await updateDoc(ref, {
    ...data,
    updatedAt: Timestamp.now(),
  })
}

export async function deleteBlogPost(id: string) {
  const ref = doc(db, 'blogPosts', id)
  return await deleteDoc(ref)
}
