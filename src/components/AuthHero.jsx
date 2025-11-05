import React from 'react';
import { Shield, Users, BarChart3, Settings, Home } from 'lucide-react';

function Pill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      <Icon size={14} className="text-white/80" />
      <span>{label}</span>
    </div>
  );
}

export default function AuthHero() {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-cyan-500/10 p-6 md:h-full">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(34,211,238,0.15),transparent_40%)]" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
            <Shield size={14} />
            <span>Secure access</span>
          </div>
          <h2 className="text-2xl font-semibold">Welcome to VVP‑ERP</h2>
          <p className="mt-2 max-w-sm text-sm text-white/70">
            Unified dashboards for Admins, Teachers, and Students with role-based access and analytics.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          <Pill icon={Users} label="Role-based" />
          <Pill icon={BarChart3} label="Analytics" />
          <Pill icon={Settings} label="Configurable" />
          <Pill icon={Home} label="Dashboards" />
        </div>
      </div>
    </div>
  );
}
