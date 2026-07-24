import { NextResponse } from 'next/server';
import { logger } from '@/lib/logger';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      logger.error('newsletter', 'Resend env vars are not configured');
      return NextResponse.json(
        { message: 'Newsletter is not available right now.' },
        { status: 503 },
      );
    }

    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      },
    );

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      // Re-subscribing an existing contact shouldn't read as a failure
      if (res.status === 409 || /exists/i.test(data?.message ?? '')) {
        return NextResponse.json(
          { message: "You're already subscribed!" },
          { status: 200 },
        );
      }
      logger.error('newsletter', 'Resend contact creation failed', data);
      return NextResponse.json(
        { message: 'Could not subscribe. Please try again later.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: 'Subscribed!' }, { status: 200 });
  } catch (err) {
    logger.error('newsletter', 'Unhandled error in newsletter route', err);
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}
