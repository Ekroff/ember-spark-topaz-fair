import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">Page not found</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        That route is not part of Axiom yet. Head home to continue practicing.
      </p>
      <Button asChild className="mt-8">
        <Link to="/">Back to home</Link>
      </Button>
    </div>
  );
}
