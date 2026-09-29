import { EMPTY_PROGRESS, type StudentProgress } from "@/types/progress";

/**
 * Default student progress used until localStorage persistence
 * is wired in a later phase.
 */
export function getPlaceholderProgress(): StudentProgress {
  return { ...EMPTY_PROGRESS };
}
