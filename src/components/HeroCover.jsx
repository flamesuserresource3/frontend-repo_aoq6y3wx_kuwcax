import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative min-h-[75vh] w-full overflow-hidden bg-[#0c0c0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient veil for contrast (does not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[#0c0c0f]/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 text-center text-white sm:pt-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
          Replit-ready • Node.js + SQLite ERP
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          VVP-ERP Starter
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Role-based dashboards, attendance, results, CSV import/export, and tax-aware invoices — crafted for quick deployments.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#features" className="rounded-md bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-white/90">Explore Features</a>
          <a href="#tax" className="rounded-md border border-white/20 bg-white/5 px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10">Try Tax Calc</a>
        </div>
      </div>
    </section>
  );
}
