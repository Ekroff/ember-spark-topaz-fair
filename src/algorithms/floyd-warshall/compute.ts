import { addDistances, buildInitialMatrix, cloneMatrix } from "../../game/matrix.ts";
import type { WeightedGraph } from "../../types/challenge.ts";
import type { DistanceMatrix, FloydWarshallRun } from "../../types/matrix.ts";

/**
 * Standard Floyd–Warshall on a distance matrix.
 * Recurrence: dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).
 * Returns a new matrix; does not mutate `matrix`.
 */
export function floydWarshall(matrix: DistanceMatrix): DistanceMatrix {
  const n = matrix.length;
  if (n === 0 || matrix.some((row) => row.length !== n)) {
    throw new Error("Floyd–Warshall requires a square distance matrix.");
  }

  const dist = cloneMatrix(matrix);

  for (let k = 0; k < n; k += 1) {
    for (let i = 0; i < n; i += 1) {
      for (let j = 0; j < n; j += 1) {
        const throughK = addDistances(dist[i][k], dist[k][j]);
        if (throughK < dist[i][j]) {
          dist[i][j] = throughK;
        }
      }
    }
  }

  return dist;
}

/** Graph → initial matrix → final shortest-distance matrix. Does not mutate `graph`. */
export function runFloydWarshall(graph: WeightedGraph): FloydWarshallRun {
  const initial = buildInitialMatrix(graph);
  const final = floydWarshall(initial);
  return { initial, final };
}
