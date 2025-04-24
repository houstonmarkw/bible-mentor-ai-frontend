// src/utils/indexNow.ts
export async function submitToIndexNow(url: string) {
  const key = '8330bfa211ff49a0b53882caa9c37e2a';
  const endpoint = 'https://www.bing.com/indexnow';

  const submitUrl = `${endpoint}?url=${encodeURIComponent(url)}&key=${key}`;

  try {
    const res = await fetch(submitUrl);
    const data = await res.text();

    console.log('IndexNow response:', data);
    return data;
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    throw error;
  }
}
