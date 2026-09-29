import { getPlaceholderProgress } from "@/data/progress";
import type { StudentProgress } from "@/types/progress";

/**
 * Student progress hook.
 *
 * Returns placeholder zeros for now. A later phase will persist XP,
 * streaks, and completions in localStorage.
 */
export function useProgress(): StudentProgress {
  return getPlaceholderProgress();
}
