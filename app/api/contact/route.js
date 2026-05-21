// Optional Next.js API route to receive contact messages.
// Wire this up to an SMTP service (Resend / SendGrid / SES) when deploying.

export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }

    // TODO: integrate with email provider, e.g.
    // await resend.emails.send({ from, to, subject, text: message });

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false, error: String(err) }, { status: 500 });
  }
}
