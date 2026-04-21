import {NextResponse} from 'next/server';
import {contactSchema} from '@/lib/schemas';
import {getServerClient} from '@/lib/supabase';

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({error: 'invalid', details: parsed.error.format()}, {status: 400});
  }

  const supabase = await getServerClient();
  if (supabase) {
    const {error} = await supabase.from('leads').insert({
      type: 'contact',
      ...parsed.data,
      created_at: new Date().toISOString()
    });
    if (error) {
      console.error('[contact] supabase insert failed', error);
      return NextResponse.json({error: 'db'}, {status: 500});
    }
  } else {
    console.log('[contact] (stub — no Supabase configured)', parsed.data);
  }

  return NextResponse.json({ok: true});
}
