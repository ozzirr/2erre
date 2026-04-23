/**
 * Supabase client factories. Env vars (set in .env.local) gate real usage:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   NEXT_PUBLIC_SUPABASE_ANON_KEY
 *   SUPABASE_SERVICE_ROLE_KEY   (server-only)
 *
 * If missing, helpers return null so routes/pages can gracefully stub.
 * Install @supabase/supabase-js only when ready to wire — this module uses
 * dynamic imports to avoid build errors before install.
 */

export type SupabaseConfig = {
  url: string;
  anonKey: string;
  serviceKey?: string;
};

let browserClientPromise: Promise<Awaited<ReturnType<typeof createBrowserClientInternal>> | null> | null = null;

export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return {url, anonKey, serviceKey: process.env.SUPABASE_SERVICE_ROLE_KEY};
}

export async function getServerClient() {
  const cfg = getSupabaseConfig();
  if (!cfg) return null;
  try {
    const {createClient} = await import('@supabase/supabase-js');
    return createClient(cfg.url, cfg.serviceKey ?? cfg.anonKey, {
      auth: {persistSession: false}
    });
  } catch {
    return null;
  }
}

export async function getBrowserClient() {
  if (browserClientPromise) return browserClientPromise;
  browserClientPromise = createBrowserClientInternal();
  return browserClientPromise;
}

async function createBrowserClientInternal() {
  const cfg = getSupabaseConfig();
  if (!cfg) return null;
  try {
    const {createClient} = await import('@supabase/supabase-js');
    return createClient(cfg.url, cfg.anonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  } catch {
    browserClientPromise = null;
    return null;
  }
}
