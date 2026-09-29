export type StudentProgress = {
  xp: number;
  streak: number;
  challengesCompleted: number;
  lastCompletedAt: string | null;
};

export const EMPTY_PROGRESS: StudentProgress = {
  xp: 0,
  streak: 0,
  challengesCompleted: 0,
  lastCompletedAt: null,
};
