import type { AlgorithmId } from "./algorithm";

export type GraphNode = {
  id: string;
  label: string;
};

export type GraphEdge = {
  from: string;
  to: string;
  weight: number;
};

export type WeightedGraph = {
  nodes: GraphNode[];
  edges: GraphEdge[];
  directed: boolean;
};

export type ChallengePrompt = {
  id: string;
  algorithmId: AlgorithmId;
  instruction: string;
};

/**
 * Full challenge payload. Graph generation and prompts are filled in later phases.
 */
export type Challenge = {
  id: string;
  algorithmId: AlgorithmId;
  graph?: WeightedGraph;
  prompt?: ChallengePrompt;
};

export type ChallengeResult = {
  challengeId: string;
  algorithmId: AlgorithmId;
  correct: boolean | null;
  score: number | null;
  xpEarned: number | null;
  completedAt: string | null;
};
