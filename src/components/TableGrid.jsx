import React from 'react';
import { Table as TableIcon } from 'lucide-react';

function Field({ name, type, note }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-emerald-500" />
      <div>
        <p className="text-sm font-medium text-emerald-900">{name} <span className="font-normal text-emerald-900/60">({type})</span></p>
        {note ? <p className="text-xs text-emerald-900/60">{note}</p> : null}
      </div>
    </li>
  );
}

function TableCard({ table }) {
  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm shadow-emerald-900/5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
            <TableIcon className="h-5 w-5" />
          </span>
          <h4 className="text-lg font-semibold text-emerald-900">{table.name}</h4>
        </div>
        <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">{table.scope}</span>
      </div>
      <p className="mb-4 text-sm text-emerald-900/70">{table.description}</p>
      <ul className="space-y-2">
        {table.fields.map((f) => (
          <Field key={f.name} name={f.name} type={f.type} note={f.note} />)
        )}
      </ul>
    </div>
  );
}

export default function TableGrid({ tables }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12">
      <h2 className="mb-4 text-xl font-semibold text-emerald-900">Tables</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tables.map((t) => (
          <TableCard key={t.name} table={t} />
        ))}
      </div>
    </section>
  );
}
