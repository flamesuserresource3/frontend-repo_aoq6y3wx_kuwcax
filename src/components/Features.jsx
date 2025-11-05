import React from 'react';
import { Shield, Users, Upload, FileDown, Receipt, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Role-based Access',
    desc: 'Admin, Teacher, and Student spaces with secure session auth.',
  },
  {
    icon: Users,
    title: 'Students & Attendance',
    desc: 'Manage rosters and mark attendance with ease.',
  },
  {
    icon: Upload,
    title: 'CSV Import',
    desc: 'Bulk upload students and attendance with preview.',
  },
  {
    icon: FileDown,
    title: 'CSV/PDF Export',
    desc: 'Download reports and invoices instantly.',
  },
  {
    icon: Receipt,
    title: 'Tax-aware Invoices',
    desc: 'Automatic tax calculation for payroll and fees.',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    desc: 'Chart-powered insights for quick decision making.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative -mt-20 bg-[#0c0c0f] pb-20 pt-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">What you get</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A compact ERP scaffold with batteries included — deployable on Replit for free.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
