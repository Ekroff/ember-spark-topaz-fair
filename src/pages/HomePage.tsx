import { Flame, Hexagon, Trophy } from "lucide-react";
import { AlgorithmCard } from "@/components/home/AlgorithmCard";
import { StatCard } from "@/components/home/StatCard";
import { listAlgorithms } from "@/algorithms";
import { useProgress } from "@/hooks/useProgress";

export function HomePage() {
  const progress = useProgress();
  const algorithms = listAlgorithms();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <section className="max-w-2xl">
        <p className="reveal text-xs font-medium uppercase tracking-[0.18em] text-subtle">
          Interactive DSA practice
        </p>
        <h1 className="reveal reveal-delay-1 mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
          Master the shortest path.
        </h1>
        <p className="reveal reveal-delay-2 mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Focused graph-algorithm challenges. Start with Floyd–Warshall; Dijkstra, BFS, DFS, and
          Bellman–Ford follow the same module contract.
        </p>
      </section>

      <section aria-labelledby="progress-heading" className="mt-12">
        <h2 id="progress-heading" className="sr-only">
          Progress
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard
            className="reveal reveal-delay-2"
            label="Overall XP"
            value={progress.xp}
            hint="Earn XP by finishing challenges"
            icon={<Trophy className="size-4" />}
          />
          <StatCard
            className="reveal reveal-delay-3"
            label="Current streak"
            value={progress.streak}
            hint="Consecutive days of practice"
            icon={<Flame className="size-4" />}
          />
          <StatCard
            className="reveal reveal-delay-4"
            label="Challenges completed"
            value={progress.challengesCompleted}
            hint="Across every algorithm"
            icon={<Hexagon className="size-4" />}
          />
        </div>
      </section>

      <section aria-labelledby="algorithms-heading" className="mt-14">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="algorithms-heading"
              className="font-display text-2xl font-medium tracking-tight sm:text-3xl"
            >
              Algorithms
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
              Floyd–Warshall is open. Other modules share the same architecture and will unlock in
              later phases.
            </p>
          </div>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {algorithms.map((algorithm) => (
            <AlgorithmCard key={algorithm.id} algorithm={algorithm} />
          ))}
        </div>
      </section>
    </div>
  );
}
