import React from 'react';
import HeroCover from './components/HeroCover';
import Features from './components/Features';
import TaxCalculator from './components/TaxCalculator';
import DashboardShowcase from './components/DashboardShowcase';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0c] py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-white/60">VVP-ERP Starter • Node.js + Express + SQLite • Replit-ready</p>
        <a href="#features" className="text-sm text-white/70 hover:text-white">View Features</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] antialiased">
      <HeroCover />
      <Features />
      <TaxCalculator />
      <DashboardShowcase />
      <Footer />
    </div>
  );
}
