import { describe, expect, it } from "vitest";
import { matchCoverage } from "@/services/coverageService";
import { selectCoverageService } from "./serviceSelection";

describe("specific service search", () => {
  it.each(["fibre", "5g", "hotspot", "lte"] as const)("shows only the selected %s service", (service) => {
    const result = selectCoverageService(matchCoverage("Soweto"), service);
    expect(result.status === "found" && result.available).toEqual([service]);
    expect(result.status === "found" && result.unavailable).toEqual([]);
  });
  it("keeps all four services when all services is selected", () => {
    const result = selectCoverageService(matchCoverage("Soweto"), "all");
    expect(result.status === "found" && result.available).toEqual(["fibre", "5g", "hotspot", "lte"]);
  });
  it("does not mark an unavailable selected service as available", () => {
    const result = selectCoverageService(matchCoverage("Tembisa"), "fibre");
    expect(result.status === "found" && result.available).toEqual([]);
    expect(result.status === "found" && result.unavailable).toEqual(["fibre"]);
  });
  it("keeps an unknown address unconfirmed for a specific service", () => {
    expect(selectCoverageService(matchCoverage("Unknown location"), "lte").status).toBe("not_found");
  });
});