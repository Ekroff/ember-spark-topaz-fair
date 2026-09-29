import { Link } from "@tanstack/react-router";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { getDefaultAlgorithm } from "@/algorithms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ResultPage() {
  const algorithm = getDefaultAlgorithm();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Button asChild variant="ghost" size="sm" className="-ml-3 mb-6">
        <Link to="/">
          <ArrowLeft />
          Back to home
        </Link>
      </Button>

      <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Result</p>
      <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">Challenge recap</h1>
      <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
        Scoring, XP, and streak updates will land here after a challenge is evaluated. The layout is
        in place for {algorithm.name}.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Card>
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">Score</p>
          <p className="mt-3 font-mono text-4xl tabular-nums text-foreground">—</p>
          <p className="mt-2 text-sm text-muted">Awaiting evaluation</p>
        </Card>
        <Card>
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">XP earned</p>
          <p className="mt-3 font-mono text-4xl tabular-nums text-foreground">—</p>
          <p className="mt-2 text-sm text-muted">Placeholder until XP is wired</p>
        </Card>
        <Card>
          <p className="text-xs font-medium uppercase tracking-wider text-subtle">Accuracy</p>
          <p className="mt-3 font-mono text-4xl tabular-nums text-foreground">—</p>
          <p className="mt-2 text-sm text-muted">No answers submitted yet</p>
        </Card>
      </div>

      <Card className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-display text-xl font-medium tracking-tight">{algorithm.name}</h2>
            <Badge variant="soon">Not scored</Badge>
          </div>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Result details — shortest-path matrix comparison, missed cells, and time — will appear in
            this panel.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link to="/challenge">
              <RotateCcw />
              Return to challenge
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
