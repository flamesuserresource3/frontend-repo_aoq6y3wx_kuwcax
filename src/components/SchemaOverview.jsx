import React from 'react';
import { Users, KeyRound, Layers } from 'lucide-react';

export default function SchemaOverview() {
  const items = [
    {
      icon: Users,
      title: 'Profiles tied to Supabase Auth',
      text:
        'Extend auth.users with a public profiles table for names, avatars, and preferences. Keep PII minimal and scoped.',
    },
    {
      icon: Layers,
      title: 'Organizations & Membership',
      text:
        'Users can belong to multiple organizations. Membership rows include role and metadata for invitations and status.',
    },
    {
      icon: KeyRound,
      title: 'Role-based Access Control',
      text:
        'Define roles per organization and enforce access with RLS policies. Store role on the membership record for fast checks.',
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm shadow-emerald-900/5"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-emerald-900">{title}</h3>
            <p className="mt-2 text-emerald-900/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
