import React, { useMemo, useState } from 'react';

function formatCurrency(n) {
  if (Number.isNaN(n)) return '-';
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n);
}

export default function TaxCalculator() {
  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState('18');

  const { tax, total } = useMemo(() => {
    const base = parseFloat(amount) || 0;
    const r = parseFloat(rate) || 0;
    const t = base * (r / 100);
    return { tax: t, total: base + t };
  }, [amount, rate]);

  return (
    <section id="tax" className="bg-[#0a0a0c] py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Quick Tax Calculator</h2>
          <p className="mt-2 max-w-prose text-white/70">
            Prototype and validate your invoice logic. Enter a base amount and a tax rate to see the exact tax and total.
          </p>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-sm text-white/70">Base Amount</span>
                <input
                  type="number"
                  className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none ring-emerald-400/0 transition placeholder:text-white/40 focus:border-emerald-400/40 focus:ring-2"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm text-white/70">Tax Rate (%)</span>
                <input
                  type="number"
                  className="w-full rounded-md border border-white/10 bg:black/40 px-3 py-2 outline-none ring-emerald-400/0 transition placeholder:text-white/40 focus:border-emerald-400/40 focus:ring-2"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </label>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <div className="text-white/60">Tax</div>
                <div className="mt-1 text-lg font-semibold">{formatCurrency(tax)}</div>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/30 p-4">
                <div className="text-white/60">Total</div>
                <div className="mt-1 text-lg font-semibold">{formatCurrency(total)}</div>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/50">
              This is a client-side demo. In the full ERP, invoices are stored and rendered as PDFs server-side.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-fuchsia-500/10 p-6">
          <h3 className="text-lg font-semibold">How it works</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
            <li>Base × (Rate / 100) = Tax</li>
            <li>Base + Tax = Total</li>
            <li>Use the same formula server-side for consistent invoices.</li>
            <li>Export to PDF and CSV from the admin dashboard.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
