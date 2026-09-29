import type { AlgorithmId, Challenge, ChallengeResult } from "@/types";

export type GamePhase = "idle" | "playing" | "submitted" | "complete";

export type GameSession = {
  id: string;
  algorithmId: AlgorithmId;
  phase: GamePhase;
  challenge: Challenge | null;
  result: ChallengeResult | null;
  startedAt: string | null;
};
