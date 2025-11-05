import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Check } from 'lucide-react';

export default function RegisterForm({ onSuccess }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name || !email || !password || !confirm) {
      setError('Please fill in all fields.');
      return;
    }
    if (!/.+@.+\..+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!agree) {
      setError('Please accept the terms to continue.');
      return;
    }

    try {
      setLoading(true);
      // Backend call can be added here. Keeping UI-only per current scope.
      await new Promise((r) => setTimeout(r, 800));
      onSuccess?.({ name, email });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-sm text-white/80" htmlFor="name">Full name</label>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/50">
          <User size={18} className="text-white/60" />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            autoComplete="name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-white/80" htmlFor="email">Email</label>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/50">
          <Mail size={18} className="text-white/60" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-white/80" htmlFor="password">Password</label>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/50">
          <Lock size={18} className="text-white/60" />
          <input
            id="password"
            type={showPwd ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPwd((s) => !s)}
            className="text-white/60 transition hover:text-white"
            aria-label={showPwd ? 'Hide password' : 'Show password'}
          >
            {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <p className="text-xs text-white/50">Must be at least 6 characters.</p>
      </div>

      <div className="space-y-2">
        <label className="block text-sm text-white/80" htmlFor="confirm">Confirm password</label>
        <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-500/50">
          <Lock size={18} className="text-white/60" />
          <input
            id="confirm"
            type={showPwd ? 'text' : 'password'}
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Re-enter password"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            autoComplete="new-password"
          />
        </div>
      </div>

      <label className="mt-2 inline-flex cursor-pointer items-center gap-2 text-sm text-white/70">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          className="h-4 w-4 rounded border-white/20 bg-transparent text-indigo-500 focus:ring-indigo-500/40"
        />
        <span className="flex items-center gap-1">
          <Check size={14} /> I agree to the <a className="text-white hover:underline" href="#">Terms</a>
        </span>
      </label>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:opacity-60"
      >
        {loading ? 'Creating account…' : 'Create account'}
      </button>
    </form>
  );
}
