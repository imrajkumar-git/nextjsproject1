import { NextResponse } from 'next/server';
import { Forminit } from 'forminit';

const forminit = new Forminit({
  apiKey: process.env.FORMINIT_API_KEY,
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const result = await forminit.submit('qsqrdghrp1s', formData);

    if (result.error) {
      return NextResponse.json({ error: result.error }, { status: result.error.code || 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: { message: 'Unable to submit contact form', details: error instanceof Error ? error.message : String(error) } },
      { status: 500 }
    );
  }
}
