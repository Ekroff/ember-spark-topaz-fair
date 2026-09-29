import type { AlgorithmId } from "@/types/algorithm";
import type { GameSession } from "./types";

/**
 * Session helpers. Challenge generation, scoring, XP, and streaks
 * are implemented in later phases — these signatures are the contract.
 */

export function createIdleSession(algorithmId: AlgorithmId): GameSession {
  return {
    id: "pending",
    algorithmId,
    phase: "idle",
    challenge: null,
    result: null,
    startedAt: null,
  };
}
