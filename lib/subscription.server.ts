import { PlanType } from "./subscription-constants";

export async function getUserPlan(): Promise<PlanType> {
  // In the future, this would integrate with Stripe or a DB billing model
  return "free";
}
