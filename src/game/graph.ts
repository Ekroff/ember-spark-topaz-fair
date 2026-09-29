import type { GraphEdge, WeightedGraph } from "../types/challenge.ts";

export const MIN_VERTEX_COUNT = 3;
export const MAX_VERTEX_COUNT = 10;

export function cloneWeightedGraph(graph: WeightedGraph): WeightedGraph {
  return {
    directed: graph.directed,
    nodes: graph.nodes.map((node) => ({ ...node })),
    edges: graph.edges.map((edge) => ({ ...edge })),
  };
}

export function nodeIndexMap(graph: WeightedGraph): Map<string, number> {
  const indexById = new Map<string, number>();
  for (let i = 0; i < graph.nodes.length; i += 1) {
    const id = graph.nodes[i].id;
    if (indexById.has(id)) {
      throw new Error(`Duplicate vertex id "${id}".`);
    }
    indexById.set(id, i);
  }
  return indexById;
}

export function validateDirectedWeightedGraph(graph: WeightedGraph): void {
  const n = graph.nodes.length;
  if (n < MIN_VERTEX_COUNT || n > MAX_VERTEX_COUNT) {
    throw new Error(`Graph must have ${MIN_VERTEX_COUNT}–${MAX_VERTEX_COUNT} vertices, got ${n}.`);
  }
  if (!graph.directed) {
    throw new Error("Floyd–Warshall engine expects a directed graph.");
  }

  const indexById = nodeIndexMap(graph);
  for (const edge of graph.edges) {
    validateEdge(edge, indexById);
  }
}

function validateEdge(edge: GraphEdge, indexById: Map<string, number>): void {
  if (!indexById.has(edge.from)) {
    throw new Error(`Edge refers to unknown vertex "${edge.from}".`);
  }
  if (!indexById.has(edge.to)) {
    throw new Error(`Edge refers to unknown vertex "${edge.to}".`);
  }
  if (!Number.isInteger(edge.weight) || edge.weight <= 0) {
    throw new Error(`Edge ${edge.from}→${edge.to} must have a positive integer weight.`);
  }
}
