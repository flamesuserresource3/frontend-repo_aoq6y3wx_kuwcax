import React, { useState } from 'react';
import AuthLayout from './components/AuthLayout';
import AuthHero from './components/AuthHero';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  const [tab, setTab] = useState('login');
  const isLogin = tab === 'login';

  return (
    <AuthLayout
      title={isLogin ? 'Welcome back' : 'Create your account'}
      subtitle={
        isLogin
          ? 'Sign in to access your dashboards, analytics, and tools.'
          : 'Join VVP‑ERP to manage roles, invoices, analytics, and more.'
      }
      side={<AuthHero />}
    >
      <div className="mb-6 grid grid-cols-2 gap-2">
        <button
          onClick={() => setTab('login')}
          className={`${
            isLogin ? 'bg-white/15 text-white' : 'bg-transparent text-white/70 hover:text-white'
          } rounded-lg border border-white/10 px-4 py-2 transition`}
        >
          Sign in
        </button>
        <button
          onClick={() => setTab('register')}
          className={`${
            !isLogin ? 'bg-white/15 text-white' : 'bg-transparent text-white/70 hover:text-white'
          } rounded-lg border border-white/10 px-4 py-2 transition`}
        >
          Create account
        </button>
      </div>

      {isLogin ? (
        <LoginForm onSuccess={() => alert('Signed in!')} />
      ) : (
        <RegisterForm onSuccess={() => alert('Account created!')} />
      )}

      <p className="mt-6 text-center text-sm text-white/60">
        {isLogin ? (
          <>
            New here?{' '}
            <button onClick={() => setTab('register')} className="text-white hover:underline">
              Create an account
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={() => setTab('login')} className="text-white hover:underline">
              Sign in
            </button>
          </>
        )}
      </p>
    </AuthLayout>
  );
}
