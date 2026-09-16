'use client';

import { useActionState, useState } from 'react';
import Image from 'next/image';
import { loginAction } from '@/app/admin/actions/auth';
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-white">
      {/* ── Left Panel: Brand ── */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col items-center justify-center bg-gradient-to-br from-[#d92d45] via-[#b02235] to-[#7b0f20] overflow-hidden p-12">
        {/* Decorative circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full" />
        <div className="absolute -bottom-40 -right-20 w-[480px] h-[480px] bg-white/5 rounded-full" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-sm">
          {/* Logo */}
          {/* <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 shadow-xl">
            <Image
              src="/The-ICT-hub-logo.png"
              alt="The ICT Hub Logo"
              width={160}
              height={60}
              className="object-contain brightness-0 invert"
              priority
            />
          </div> */}
          <Image
            src="/Mhsocialmedia.jpg"
            alt="The ICT Hub"
            width={300}
            height={100}
            className="object-contain h-20 w-auto"
            priority
          />
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
              Welcome Back
            </h1>
            <p className="text-white/70 text-sm leading-relaxed">
              Sign in to manage your content, users, and settings from the ICT Hub control panel.
            </p>
          </div>

          {/* Stats strip */}
          {/* <div className="grid grid-cols-3 gap-4 w-full mt-2">
            {[
              { label: 'Blog Posts', value: '50+' },
              { label: 'Users', value: '12' },
              { label: 'Categories', value: '8' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl py-3 px-2 text-center">
                <p className="text-white font-bold text-lg">{value}</p>
                <p className="text-white/60 text-[10px] uppercase tracking-wide mt-0.5">{label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      {/* ── Right Panel: Form ── */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-10 bg-zinc-50 dark:bg-zinc-950">
        {/* Mobile logo */}
        <div className="lg:hidden mb-8">
          <Image
            src="/The-ICT-hub-logo.png"
            alt="The ICT Hub Logo"
            width={140}
            height={52}
            className="object-contain"
            priority
          />
        </div>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-[#d92d45]/10 text-[#d92d45] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Access Only
            </div>
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Sign in to Dashboard
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5">
              Enter your credentials to continue
            </p>
          </div>

          <form action={formAction} className="space-y-5">
            {/* Error */}
            {state?.error && (
              <div className="flex items-start gap-2.5 p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm rounded-xl">
                <svg className="w-4 h-4 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                {state.error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40 focus:border-[#d92d45] transition-all duration-200"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d92d45]/40 focus:border-[#d92d45] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors p-0.5"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword
                    ? <EyeOff className="h-4 w-4" />
                    : <Eye className="h-4 w-4" />
                  }
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-2.5 px-4 bg-[#d92d45] hover:bg-[#b02235] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#d92d45]/25 hover:shadow-[#d92d45]/40 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Authenticating...
                </>
              ) : 'Sign In to Dashboard'}
            </button>
          </form>

          <p className="text-center text-xs text-zinc-400 dark:text-zinc-600 mt-8">
            © {new Date().getFullYear()} The ICT Hub Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
