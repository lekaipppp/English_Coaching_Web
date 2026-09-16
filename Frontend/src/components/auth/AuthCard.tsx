import type { ReactNode } from "react";

export default function AuthCard({ children }: { children: ReactNode }) {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-16">
      <div className="w-full max-w-sm border border-line bg-paper-raised px-8 py-10">
        {children}
      </div>
    </section>
  );
}
