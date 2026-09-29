export type AlgorithmId = "floyd-warshall" | "dijkstra" | "bfs" | "dfs" | "bellman-ford";

export type AlgorithmDifficulty = "beginner" | "intermediate" | "advanced";

export type AlgorithmStatus = "available" | "coming-soon";

export type AlgorithmCategory = "graph";

export type AlgorithmCatalogEntry = {
  id: AlgorithmId;
  slug: string;
  name: string;
  shortName: string;
  category: AlgorithmCategory;
  summary: string;
  description: string;
  difficulty: AlgorithmDifficulty;
  status: AlgorithmStatus;
  topics: string[];
};

/**
 * Per-algorithm module contract. Challenge generation, computation,
 * and evaluation are added in later phases.
 */
export type AlgorithmModule = {
  id: AlgorithmId;
};
