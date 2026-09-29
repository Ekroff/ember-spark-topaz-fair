import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getDefaultAlgorithm } from "@/algorithms";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createIdleSession } from "@/game";

export function ChallengePage() {
  const algorithm = getDefaultAlgorithm();
  const session = createIdleSession(algorithm.id);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <Button asChild variant="ghost" size="sm" className="-ml-3 mb-6">
        <Link to="/">
          <ArrowLeft />
          Back to home
        </Link>
      </Button>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Challenge</p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight">{algorithm.name}</h1>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">{algorithm.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="available">Workspace ready</Badge>
          <Badge variant="difficulty">{session.phase === "idle" ? "Not started" : session.phase}</Badge>
        </div>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card className="flex min-h-72 flex-col items-center justify-center rounded-xl p-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">
            Graph visualization
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Random graph generation and the interactive canvas arrive in a later phase. This panel
            is the mount point.
          </p>
        </Card>

        <Card className="flex min-h-72 flex-col rounded-xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-subtle">Prompt</p>
          <h2 className="mt-3 font-display text-2xl font-medium tracking-tight">
            All-pairs distances
          </h2>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
            You will fill a distance matrix for a generated graph. Scoring, answer evaluation, and
            submit flow are not wired yet.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row">
            <Button disabled className="w-full sm:w-auto">
              Submit answer
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/result">View result shell</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
