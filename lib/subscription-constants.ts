export const PLAN_LIMITS = {
  free: {
    maxBooks: 5,
  },
  pro: {
    maxBooks: 100,
  },
} as const;

export type PlanType = keyof typeof PLAN_LIMITS;
