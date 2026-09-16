import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import { createClient } from "@/utils/supabase/server";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Crosswire account.",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="border-b border-line py-20 md:py-28">
      <Container>
        <h1 className="text-4xl leading-[1.1] md:text-6xl">Welcome back</h1>
        <p className="mt-6 text-lg text-ink-soft">{user.email}</p>
      </Container>
    </section>
  );
}
