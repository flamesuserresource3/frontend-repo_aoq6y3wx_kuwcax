import React from 'react';
import { Link as LinkIcon } from 'lucide-react';

export default function ERDiagram() {
  // Simple SVG-based ERD to visualize relationships
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-4 flex items-center gap-2 text-emerald-900">
        <LinkIcon className="h-5 w-5 text-emerald-600" />
        <h2 className="text-xl font-semibold">Entity Relationship Diagram</h2>
      </div>
      <div className="overflow-hidden rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm shadow-emerald-900/5">
        <svg viewBox="0 0 1100 460" className="h-[360px] w-full">
          {/* auth.users */}
          <g>
            <rect x="40" y="40" width="230" height="110" rx="14" fill="#ecfdf5" stroke="#059669" />
            <text x="55" y="70" fontSize="16" fontWeight="700" fill="#064e3b">auth.users</text>
            <text x="55" y="98" fontSize="13" fill="#065f46">id (uuid, PK)</text>
            <text x="55" y="118" fontSize="13" fill="#065f46">email (text)</text>
          </g>

          {/* profiles */}
          <g>
            <rect x="370" y="40" width="250" height="130" rx="14" fill="#ffffff" stroke="#065f46" />
            <text x="385" y="70" fontSize="16" fontWeight="700" fill="#064e3b">profiles</text>
            <text x="385" y="98" fontSize="13" fill="#065f46">id (uuid, PK, FK -> auth.users.id)</text>
            <text x="385" y="118" fontSize="13" fill="#065f46">full_name (text)</text>
            <text x="385" y="138" fontSize="13" fill="#065f46">avatar_url (text)</text>
          </g>

          {/* organizations */}
          <g>
            <rect x="40" y="240" width="250" height="130" rx="14" fill="#ffffff" stroke="#065f46" />
            <text x="55" y="270" fontSize="16" fontWeight="700" fill="#064e3b">organizations</text>
            <text x="55" y="298" fontSize="13" fill="#065f46">id (uuid, PK)</text>
            <text x="55" y="318" fontSize="13" fill="#065f46">name (text)</text>
            <text x="55" y="338" fontSize="13" fill="#065f46">slug (text, unique)</text>
          </g>

          {/* organization_members */}
          <g>
            <rect x="370" y="240" width="320" height="160" rx="14" fill="#ffffff" stroke="#065f46" />
            <text x="385" y="270" fontSize="16" fontWeight="700" fill="#064e3b">organization_members</text>
            <text x="385" y="298" fontSize="13" fill="#065f46">org_id (uuid, FK -> organizations.id)</text>
            <text x="385" y="318" fontSize="13" fill="#065f46">user_id (uuid, FK -> auth.users.id)</text>
            <text x="385" y="338" fontSize="13" fill="#065f46">role (text)</text>
            <text x="385" y="358" fontSize="13" fill="#065f46">joined_at (timestamptz)</text>
          </g>

          {/* roles (optional, reference) */}
          <g>
            <rect x="750" y="240" width="250" height="130" rx="14" fill="#ffffff" stroke="#065f46" />
            <text x="765" y="270" fontSize="16" fontWeight="700" fill="#064e3b">roles</text>
            <text x="765" y="298" fontSize="13" fill="#065f46">key (text, PK)</text>
            <text x="765" y="318" fontSize="13" fill="#065f46">name (text)</text>
            <text x="765" y="338" fontSize="13" fill="#065f46">description (text)</text>
          </g>

          {/* Connectors */}
          {/* users -> profiles */}
          <line x1="270" y1="95" x2="370" y2="95" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* users -> organization_members */}
          <line x1="155" y1="180" x2="530" y2="240" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* organizations -> organization_members */}
          <line x1="290" y1="305" x2="370" y2="305" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
          {/* roles -> organization_members */}
          <line x1="750" y1="305" x2="690" y2="305" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />

          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#10b981" />
            </marker>
          </defs>
        </svg>
        <p className="mt-3 text-sm text-emerald-900/70">
          Note: Supabase provides auth.users for core authentication. You extend it via foreign keys in public tables
          like profiles and organization_members, then enforce access with Row Level Security.
        </p>
      </div>
    </section>
  );
}
