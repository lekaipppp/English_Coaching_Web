"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UserMenu({ avatarUrl }: { avatarUrl: string | null }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  return (
    <div ref={menuRef} className="relative self-start md:self-center">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Account menu"
        aria-expanded={open}
        className="block h-9 w-9 overflow-hidden rounded-full border border-line"
      >
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-paper-raised text-sm text-ink-soft">
            ?
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-40 border border-line bg-paper-raised py-1 text-sm">
          <button
            type="button"
            onClick={handleLogout}
            className="block w-full px-4 py-2 text-left text-ink-soft transition-colors hover:text-ink"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
