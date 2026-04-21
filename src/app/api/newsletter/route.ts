import {NextResponse} from 'next/server';
import {newsletterSchema} from '@/lib/schemas';
import {getServerClient} from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = newsletterSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({error: 'invalid'}, {status: 400});

  const supabase = await getServerClient();
  if (supabase) {
    const {error} = await supabase
      .from('newsletter_subscribers')
      .insert({email: parsed.data.email, subscribed_at: new Date().toISOString()});
    // 23505 = unique_violation → already subscribed, treat as success
    if (error && error.code !== '23505') {
      console.error('[newsletter] supabase insert failed', error);
      return NextResponse.json({error: 'db'}, {status: 500});
    }
  } else {
    console.log('[newsletter] (stub — no Supabase configured)', parsed.data.email);
  }

  return NextResponse.json({ok: true});
}
