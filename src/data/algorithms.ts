import type { AlgorithmCatalogEntry } from "@/types/algorithm";

export const ALGORITHMS: AlgorithmCatalogEntry[] = [
  {
    id: "floyd-warshall",
    slug: "floyd-warshall",
    name: "Floyd–Warshall",
    shortName: "FW",
    category: "graph",
    summary: "All-pairs shortest paths on weighted graphs.",
    description:
      "Compute shortest distances between every pair of vertices using dynamic programming over intermediate nodes.",
    difficulty: "intermediate",
    status: "available",
    topics: ["dynamic programming", "shortest paths", "adjacency matrix"],
  },
  {
    id: "dijkstra",
    slug: "dijkstra",
    name: "Dijkstra",
    shortName: "Dij",
    category: "graph",
    summary: "Single-source shortest paths with non-negative weights.",
    description:
      "Greedy expansion from a source using a priority queue. Coming in a later phase.",
    difficulty: "intermediate",
    status: "coming-soon",
    topics: ["greedy", "priority queue", "shortest paths"],
  },
  {
    id: "bfs",
    slug: "bfs",
    name: "Breadth-First Search",
    shortName: "BFS",
    category: "graph",
    summary: "Level-order traversal and unweighted shortest paths.",
    description: "Explore the graph layer by layer. Coming in a later phase.",
    difficulty: "beginner",
    status: "coming-soon",
    topics: ["traversal", "queues", "unweighted paths"],
  },
  {
    id: "dfs",
    slug: "dfs",
    name: "Depth-First Search",
    shortName: "DFS",
    category: "graph",
    summary: "Recursive exploration for cycles, components, and orderings.",
    description: "Dive along a path until you must backtrack. Coming in a later phase.",
    difficulty: "beginner",
    status: "coming-soon",
    topics: ["traversal", "recursion", "backtracking"],
  },
  {
    id: "bellman-ford",
    slug: "bellman-ford",
    name: "Bellman–Ford",
    shortName: "BF",
    category: "graph",
    summary: "Single-source shortest paths that tolerate negative weights.",
    description: "Relax every edge |V|−1 times and detect negative cycles. Coming in a later phase.",
    difficulty: "advanced",
    status: "coming-soon",
    topics: ["relaxation", "negative weights", "shortest paths"],
  },
];

export const DEFAULT_ALGORITHM_ID = "floyd-warshall" as const;
