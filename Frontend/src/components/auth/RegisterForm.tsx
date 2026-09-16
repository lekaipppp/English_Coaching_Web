"use client";

import Link from "next/link";
import type { FormEvent } from "react";
import AuthCard from "@/components/auth/AuthCard";
import OAuthOptions from "@/components/auth/OAuthOptions";

export default function RegisterForm() {
  function handleGoogleSignIn() {
    // TODO: connect Supabase Auth here
  }

  function handleFacebookSignIn() {
    // TODO: connect Supabase Auth here
  }

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: connect Supabase Auth here
  }

  return (
    <AuthCard>
      <h1 className="text-2xl">Create your account</h1>
      <p className="mt-2 text-sm text-muted">
        Account access is coming soon. This form is a placeholder.
      </p>

      <div className="mt-8">
        <OAuthOptions
          onGoogle={handleGoogleSignIn}
          onFacebook={handleFacebookSignIn}
        />
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm text-ink-soft">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="border border-line bg-paper px-3 py-2 text-ink placeholder:text-muted focus:border-ink-soft focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="password" className="text-sm text-ink-soft">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className="border border-line bg-paper px-3 py-2 text-ink placeholder:text-muted focus:border-ink-soft focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="confirm-password" className="text-sm text-ink-soft">
            Confirm password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            className="border border-line bg-paper px-3 py-2 text-ink placeholder:text-muted focus:border-ink-soft focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-ink px-4 py-2.5 font-medium text-paper"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-sm text-muted">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-ink-soft underline underline-offset-4"
        >
          Log in
        </Link>
      </p>

      <p className="mt-2 text-sm text-muted">
        Just here to look around?{" "}
        <Link href="/" className="text-ink-soft underline underline-offset-4">
          Back to home
        </Link>
      </p>
    </AuthCard>
  );
}
