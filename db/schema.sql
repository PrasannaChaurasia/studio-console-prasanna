create table if not exists projects (
  slug text primary key,
  title text not null,
  category text not null,
  tags text[] not null default '{}',
  summary text not null,
  long_description text not null,
  year text,
  pdf_url text,
  media_class text not null default 'media-real',
  sort_order integer not null default 99,
  featured boolean not null default false,
  published boolean not null default true,
  case_study jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists contact_leads (
  id bigserial primary key,
  name text not null,
  email text not null,
  phone text,
  company text,
  message text not null,
  interest_area text not null default 'General',
  source_page text not null default 'contact',
  status text not null default 'new',
  created_at timestamptz not null default now()
);

create index if not exists projects_published_sort_idx
  on projects (published, sort_order, title);

create index if not exists contact_leads_status_created_idx
  on contact_leads (status, created_at desc);
