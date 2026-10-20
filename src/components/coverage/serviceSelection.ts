import type { CoverageResult, TechnologyId } from "@/types";

export type ServiceSelection = "all" | TechnologyId;

/** Presentation-only filtering; the coverage lookup remains service-independent. */
export function selectCoverageService(result: CoverageResult, service: ServiceSelection): CoverageResult {
  if (result.status === "not_found" || service === "all") return result;
  return {
    ...result,
    available: result.available.filter((id) => id === service),
    unavailable: result.unavailable.filter((id) => id === service),
  };
}