-- 2erre SRL — initial schema
-- Run in Supabase SQL Editor for project eyrvtqqejvnrlknrlipr

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  subscribed_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  type text not null,                -- 'contact' | 'tool'
  tool text,                         -- for type='tool' (e.g. 'qr')
  name text,
  email text not null,
  phone text,
  company text,
  role text,
  website text,
  service text,
  size text,
  revenue text,
  source text,
  message text,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists leads_email_idx on public.leads (email);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row Level Security: block anon reads; inserts go through the server client
alter table public.newsletter_subscribers enable row level security;
alter table public.leads enable row level security;

-- Allow anonymous inserts (the API uses the publishable key server-side).
-- If you later add a SUPABASE_SERVICE_ROLE_KEY, RLS is bypassed automatically.
create policy "anon insert newsletter"
  on public.newsletter_subscribers for insert
  to anon with check (true);

create policy "anon insert leads"
  on public.leads for insert
  to anon with check (true);
