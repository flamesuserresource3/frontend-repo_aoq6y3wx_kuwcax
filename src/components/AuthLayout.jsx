import React from 'react';

export default function AuthLayout({ title, subtitle, children, side }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0e] via-[#0b0b0e] to-[#0e0e12] text-white">
      <div className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 gap-8 px-6 py-8 md:grid-cols-2 md:py-12">
        <div className="order-2 flex items-center md:order-1">
          <div className="w-full">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
              {subtitle && (
                <p className="mt-2 text-white/70">{subtitle}</p>
              )}
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              {children}
            </div>
            <p className="mt-6 text-center text-sm text-white/60">
              By continuing you agree to our
              {' '}<a className="text-white hover:underline" href="#">Terms</a>
              {' '}and{' '}
              <a className="text-white hover:underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          {side}
        </div>
      </div>
    </div>
  );
}
