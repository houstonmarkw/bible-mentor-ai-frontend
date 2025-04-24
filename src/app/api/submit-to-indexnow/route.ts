// src/app/api/submit-to-indexnow/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { submitToIndexNow } from '../../../utils/indexNow';

export async function POST(req: NextRequest) {
  const { url } = await req.json();

  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
  }

  try {
    const result = await submitToIndexNow(url);
    return NextResponse.json({ status: 'success', result });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit to IndexNow' }, { status: 500 });
  }
}
