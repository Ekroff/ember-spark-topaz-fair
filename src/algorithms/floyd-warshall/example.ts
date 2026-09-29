import { INF, type DistanceMatrix } from "../../types/matrix.ts";
import type { WeightedGraph } from "../../types/challenge.ts";

/**
 * Deterministic 4-vertex directed graph:
 * 0 → 1 = 5, 0 → 3 = 10, 1 → 2 = 3, 2 → 3 = 1
 */
export const EXAMPLE_GRAPH: WeightedGraph = {
  directed: true,
  nodes: [
    { id: "0", label: "0" },
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
  ],
  edges: [
    { from: "0", to: "1", weight: 5 },
    { from: "0", to: "3", weight: 10 },
    { from: "1", to: "2", weight: 3 },
    { from: "2", to: "3", weight: 1 },
  ],
};

export const EXPECTED_INITIAL_MATRIX: DistanceMatrix = [
  [0, 5, INF, 10],
  [INF, 0, 3, INF],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0],
];

export const EXPECTED_FINAL_MATRIX: DistanceMatrix = [
  [0, 5, 8, 9],
  [INF, 0, 3, 4],
  [INF, INF, 0, 1],
  [INF, INF, INF, 0],
];
