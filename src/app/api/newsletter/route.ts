import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }

    // ── Wire up your email service here ──────────────────────────────────────
    // Examples:
    //
    // Resend audience:
    //   const resend = new Resend(process.env.RESEND_API_KEY);
    //   await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID! });
    //
    // Mailchimp:
    //   await fetch(`https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members`, {
    //     method: 'POST',
    //     headers: { Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}` },
    //     body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    //   });
    //
    // ConvertKit:
    //   await fetch(`https://api.convertkit.com/v3/forms/<form_id>/subscribe`, {
    //     method: 'POST',
    //     body: JSON.stringify({ api_key: process.env.CONVERTKIT_API_KEY, email }),
    //   });
    // ─────────────────────────────────────────────────────────────────────────

    // Temporary: log to console until a service is connected
    console.log('[newsletter] new subscriber:', email);

    return NextResponse.json({ message: 'Subscribed!' }, { status: 200 });
  } catch {
    return NextResponse.json({ message: 'Server error.' }, { status: 500 });
  }
}
