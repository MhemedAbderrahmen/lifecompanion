"use client";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import { Cake } from "lucide-react";

export function LoginComponent() {
  return (
    <Card className="flex h-80 w-full max-w-80 flex-col items-center justify-center text-center">
      <CardHeader>
        Authentication
        <CardDescription>Sign In with your discord below</CardDescription>
      </CardHeader>
      <CardContent>
        <Button>
          <Cake />
          Sign in with discord
        </Button>
      </CardContent>
    </Card>
  );
}
