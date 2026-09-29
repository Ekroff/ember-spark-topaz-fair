import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { LogoMark } from "@/components/brand/LogoMark";
import { cn } from "@/utils/cn";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/challenge", label: "Challenge" },
  { to: "/result", label: "Result" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 text-foreground">
            <LogoMark />
            <span className="font-display text-lg tracking-tight">Axiom</span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "inline-flex h-11 items-center rounded-md px-3 text-sm text-muted",
                  "transition-[color,background-color] duration-150 ease-out",
                  "hover:bg-elevated hover:text-foreground",
                )}
                activeProps={{
                  className: "text-foreground bg-elevated",
                }}
                activeOptions={item.to === "/" ? { exact: true } : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-6 sm:px-6">
          <p className="text-xs text-subtle">Axiom — interactive DSA practice</p>
          <p className="text-xs text-subtle">No account required</p>
        </div>
      </footer>
    </div>
  );
}
