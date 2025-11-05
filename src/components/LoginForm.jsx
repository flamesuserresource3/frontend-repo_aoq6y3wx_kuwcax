import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      setLoading(true);
      // Backend call can be added here. Keeping UI-only per current scope.
      await new Promise((r) => setTimeout(r, 700));
      onSuccess?.({ email });
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
            placeholder="••••••••"
            className="w-full bg-transparent text-white placeholder-white/40 outline-none"
            autoComplete="current-password"
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
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex cursor-pointer items-center gap-2 text-white/70">
          <input type="checkbox" className="h-4 w-4 rounded border-white/20 bg-transparent text-indigo-500 focus:ring-indigo-500/40" />
          Remember me
        </label>
        <a href="#" className="text-white/70 hover:text-white">Forgot password?</a>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:opacity-60"
      >
        <LogIn size={18} />
        {loading ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  );
}
