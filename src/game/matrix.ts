import { nodeIndexMap, validateDirectedWeightedGraph } from "./graph.ts";
import type { WeightedGraph } from "../types/challenge.ts";
import { INF, type DistanceMatrix } from "../types/matrix.ts";

export function cloneMatrix(matrix: DistanceMatrix): DistanceMatrix {
  return matrix.map((row) => row.slice());
}

/**
 * Add two distances. Any non-finite term (Infinity / NaN) yields INF so
 * Infinity is never combined into a misleading finite or NaN value.
 */
export function addDistances(a: number, b: number): number {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    return INF;
  }
  return a + b;
}

export function createEmptyDistanceMatrix(size: number): DistanceMatrix {
  return Array.from({ length: size }, (_, i) =>
    Array.from({ length: size }, (_, j) => (i === j ? 0 : INF)),
  );
}

/**
 * Adjacency-matrix form of a directed weighted graph.
 * Diagonal is 0. Missing edges are INF. Parallel edges keep the minimum weight.
 * Does not mutate `graph`.
 */
export function buildInitialMatrix(graph: WeightedGraph): DistanceMatrix {
  validateDirectedWeightedGraph(graph);
  const n = graph.nodes.length;
  const dist = createEmptyDistanceMatrix(n);
  const indexById = nodeIndexMap(graph);

  for (const edge of graph.edges) {
    const i = indexById.get(edge.from);
    const j = indexById.get(edge.to);
    if (i === undefined || j === undefined || i === j) {
      continue;
    }
    dist[i][j] = Math.min(dist[i][j], edge.weight);
  }

  return dist;
}
