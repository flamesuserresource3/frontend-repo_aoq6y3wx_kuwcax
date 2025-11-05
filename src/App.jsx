import React from 'react';
import Header from './components/Header';
import SchemaOverview from './components/SchemaOverview';
import TableGrid from './components/TableGrid';
import ERDiagram from './components/ERDiagram';

export default function App() {
  const tables = [
    {
      name: 'profiles',
      scope: 'public',
      description:
        'Public extension of auth.users. Stores display data and user preferences. Primary key mirrors auth.users.id.',
      fields: [
        { name: 'id', type: 'uuid, PK, FK -> auth.users.id', note: 'One-to-one with auth.users' },
        { name: 'full_name', type: 'text' },
        { name: 'avatar_url', type: 'text' },
        { name: 'created_at', type: 'timestamptz (default now())' },
      ],
    },
    {
      name: 'organizations',
      scope: 'public',
      description: 'Top-level tenant container. Use a slug for pretty URLs and unique lookups.',
      fields: [
        { name: 'id', type: 'uuid, PK, default gen_random_uuid()' },
        { name: 'name', type: 'text' },
        { name: 'slug', type: 'text, unique' },
        { name: 'created_at', type: 'timestamptz (default now())' },
      ],
    },
    {
      name: 'organization_members',
      scope: 'public',
      description:
        'Join table mapping users to organizations with a role for RBAC and timestamps for auditing.',
      fields: [
        { name: 'org_id', type: 'uuid, FK -> organizations.id' },
        { name: 'user_id', type: 'uuid, FK -> auth.users.id' },
        { name: 'role', type: 'text', note: 'owner | admin | member' },
        { name: 'joined_at', type: 'timestamptz (default now())' },
        { name: 'PRIMARY KEY', type: '(org_id, user_id)' },
      ],
    },
    {
      name: 'roles',
      scope: 'public (optional)',
      description:
        'Reference table for roles when you want richer metadata than a text enum. Useful for policy-driven UIs.',
      fields: [
        { name: 'key', type: 'text, PK', note: 'e.g., owner, admin, member' },
        { name: 'name', type: 'text' },
        { name: 'description', type: 'text' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      <SchemaOverview />
      <TableGrid tables={tables} />
      <ERDiagram />
      <footer className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-2xl border border-emerald-900/10 bg-emerald-600/5 p-6 text-emerald-900">
          <h3 className="text-lg font-semibold">Implementation tips</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-emerald-900/80">
            <li>Keep auth logic in Supabase Auth; mirror user IDs in public tables.</li>
            <li>Enable Row Level Security and write policies for each table (by user_id/org_id).</li>
            <li>Use Postgres functions for invitations and role changes for an auditable workflow.</li>
            <li>Add indexes on (org_id, user_id) and slug for fast queries.</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
