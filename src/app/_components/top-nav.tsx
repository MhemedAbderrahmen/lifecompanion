"use client";
import { Button } from "~/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export function TopNav() {
  const { data: session, status } = useSession();
  return (
    <div className="flex justify-between">
      long-life-partner
      <div className="flex items-center justify-end gap-4">
        <div>{session?.user.name}</div>
        <div>
          <Avatar>
            <AvatarImage src={session?.user.image} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
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
