"use client";
import { Button } from "~/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export function TopNav() {
  const { data: session, status } = useSession();
  return (
    <div className="flex justify-between">
      long-life-partner
      <div className="flex items-center justify-end gap-4">
        <div>{session?.user.name}</div>
        {session ? (
          <Button onClick={() => signOut()}>Sign Out</Button>
        ) : (
          <Button onClick={() => signIn()} disabled={status === "loading"}>
            Sign In
          </Button>
        )}
      </div>
    </div>
  );
}
