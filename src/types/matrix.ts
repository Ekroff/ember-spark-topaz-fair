/** Unreachable pair. Use this sentinel instead of adding Infinity values directly. */
export const INF = Number.POSITIVE_INFINITY;

/** Square distance matrix. Unreachable entries are `INF`. */
export type DistanceMatrix = number[][];

export type FloydWarshallRun = {
  initial: DistanceMatrix;
  final: DistanceMatrix;
};
