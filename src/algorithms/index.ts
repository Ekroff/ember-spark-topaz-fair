import { floydWarshallModule } from "@/algorithms/floyd-warshall";
import { ALGORITHMS, DEFAULT_ALGORITHM_ID } from "@/data/algorithms";
import type { AlgorithmCatalogEntry, AlgorithmId, AlgorithmModule } from "@/types/algorithm";

const MODULES: Record<string, AlgorithmModule> = {
  [floydWarshallModule.id]: floydWarshallModule,
};

export function listAlgorithms(): AlgorithmCatalogEntry[] {
  return ALGORITHMS;
}

export function getAlgorithm(id: AlgorithmId | string): AlgorithmCatalogEntry | undefined {
  return ALGORITHMS.find((entry) => entry.id === id || entry.slug === id);
}

export function getAlgorithmModule(id: AlgorithmId | string): AlgorithmModule | undefined {
  return MODULES[id];
}

export function getDefaultAlgorithm(): AlgorithmCatalogEntry {
  const entry = getAlgorithm(DEFAULT_ALGORITHM_ID);
  if (!entry) {
    throw new Error("Default algorithm catalog entry is missing.");
  }
  return entry;
}

export { DEFAULT_ALGORITHM_ID };
