"use client";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Cake } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function LoginComponent() {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.push("/");
  }, [router, status]);

  return (
    <Card className="flex h-80 w-full max-w-80 flex-col items-center justify-center text-center">
      <CardHeader>
        Authentication
        <CardDescription>Sign In with your discord below</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={() => signIn()}>
          <Cake />
          Sign in with discord
        </Button>
      </CardContent>
    </Card>
  );
}
