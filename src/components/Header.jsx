import React from 'react';
import { Database, Shield } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6 py-16 text-white">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
            <Database className="h-6 w-6" />
          </span>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Supabase Database Design</h1>
        </div>
        <p className="mt-4 max-w-3xl text-white/90">
          A clean, scalable schema for authentication, teams, and access control using Supabase. Built to
          plug into your product with minimal friction.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm">
          <Shield className="h-4 w-4" />
          <span>Secure by default • Row Level Security friendly</span>
        </div>
      </div>
    </header>
  );
}
