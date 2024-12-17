import { HydrateClient } from "~/trpc/server";
import { LoginComponent } from "../_components/login-component";

export default function SignIn() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen w-full items-center justify-center p-10">
        <LoginComponent />
      </main>
    </HydrateClient>
  );
}
