"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FormEvent } from "react";
import AuthCard from "@/components/auth/AuthCard";
import OAuthOptions from "@/components/auth/OAuthOptions";
import { createClient } from "@/utils/supabase/client";

export default function RegisterForm() {
  const router = useRouter();

  async function handleGoogleSignIn() {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error(error);
    }
  }

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error(error);
      return;
    }

    router.push("/");
  }

  return (
    <AuthCard>
      <h1 className="text-2xl">Create your account</h1>

      <div className="mt-8">
        <OAuthOptions onGoogle={handleGoogleSignIn} />
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
