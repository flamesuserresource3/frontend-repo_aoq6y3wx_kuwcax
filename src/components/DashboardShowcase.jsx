import React from 'react';
import { User, Settings, Home } from 'lucide-react';

const cards = [
  {
    role: 'Admin',
    icon: Settings,
    desc: 'Manage users, departments, imports, and invoices with tax.',
    color: 'from-emerald-500/15 to-emerald-500/0',
  },
  {
    role: 'Teacher',
    icon: User,
    desc: 'Mark attendance, upload results, and track performance.',
    color: 'from-cyan-500/15 to-cyan-500/0',
  },
  {
    role: 'Student',
    icon: Home,
    desc: 'View attendance, results, and download invoices/receipts.',
    color: 'from-fuchsia-500/15 to-fuchsia-500/0',
  },
];

export default function DashboardShowcase() {
  return (
    <section className="bg-[#0c0c0f] py-16 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold md:text-3xl">Dashboards</h2>
        <p className="mt-2 max-w-prose text-white/70">
          Purpose-built spaces keep everyone focused and productive.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ role, icon: Icon, desc, color }) => (
            <article key={role} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <div className={`h-24 w-full bg-gradient-to-r ${color}`} />
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-white/10 p-2"><Icon className="h-5 w-5 text-white" /></div>
                  <h3 className="text-lg font-semibold">{role} Dashboard</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
