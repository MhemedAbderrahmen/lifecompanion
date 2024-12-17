import { ToggleTheme } from "./toggle-theme";

export function Footer() {
  return (
    <footer suppressHydrationWarning className="flex justify-center p-10">
      <ToggleTheme />
    </footer>
  );
}
