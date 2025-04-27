import { db } from './firebase'
import {
  collection,
  setDoc,
  getDocs,
  Timestamp,
  DocumentData,
  doc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'
import type { BlogPost } from '@/types/blog'

// Save a new blog post
export async function saveBlogPost(slug: string, post: BlogPost) {
  const newPost = {
    ...post,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  }

  const ref = doc(db, 'blogPosts', slug) // ← Use slug as document ID
  return await setDoc(ref, newPost)
}

// Fetch all blog posts from Firestore
export async function fetchAllBlogPosts(): Promise<DocumentData[]> {
  const snapshot = await getDocs(collection(db, 'blogPosts'))
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
}

// Update a blog post
export async function updateBlogPost(id: string, data: Partial<BlogPost>) {
  const ref = doc(db, 'blogPosts', id)
  return await updateDoc(ref, {
    ...(data as any),
    updatedAt: Timestamp.now(),
  })
}

// Delete a blog post
export async function deleteBlogPost(id: string) {
  const ref = doc(db, 'blogPosts', id)
  return await deleteDoc(ref)
}
