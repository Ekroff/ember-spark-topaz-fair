import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { AlgorithmCatalogEntry } from "@/types/algorithm";
import { cn } from "@/utils/cn";

const DIFFICULTY_LABEL: Record<AlgorithmCatalogEntry["difficulty"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

type AlgorithmCardProps = {
  algorithm: AlgorithmCatalogEntry;
};

export function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  const available = algorithm.status === "available";

  return (
    <Card className={cn("flex h-full flex-col", !available && "opacity-80")}>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <MatrixMark highlighted={available} />
          <div className="flex flex-wrap justify-end gap-1.5">
            <Badge variant="difficulty">{DIFFICULTY_LABEL[algorithm.difficulty]}</Badge>
            <Badge variant={available ? "available" : "soon"}>
              {available ? "Available" : "Coming soon"}
            </Badge>
          </div>
        </div>
        <CardTitle className="mt-4">{algorithm.name}</CardTitle>
        <CardDescription>{algorithm.summary}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="flex flex-wrap gap-1.5">
          {algorithm.topics.map((topic) => (
            <li key={topic}>
              <Badge>{topic}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {available ? (
          <Button asChild className="w-full sm:w-auto">
            <Link to="/challenge">
              Start challenge
              <ArrowRight />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled className="w-full sm:w-auto">
            Not yet available
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

function MatrixMark({ highlighted }: { highlighted: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="8" className="fill-elevated" />
      {[0, 1, 2, 3].flatMap((row) =>
        [0, 1, 2, 3].map((col) => {
          const filled = row === col || (highlighted && (row + col) % 3 === 0);
          return (
            <rect
              key={`${row}-${col}`}
              x={7 + col * 7}
              y={7 + row * 7}
              width="5"
              height="5"
              rx="1"
              className={filled ? "fill-accent" : "fill-border-strong"}
            />
          );
        }),
      )}
    </svg>
  );
}
