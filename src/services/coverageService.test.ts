import { describe, expect, it } from "vitest";
import { matchCoverage, validateAddress } from "./coverageService";

describe("coverage demo lookup", () => {
  it("Soweto demo address has all four technologies", () => {
    const r = matchCoverage("12 Vilakazi Street, Orlando West, Soweto");
    expect(r.status === "found" && r.available).toEqual(["fibre", "5g", "hotspot", "lte"]);
  });
  it("Tembisa shows only hotspot and LTE", () => {
    const r = matchCoverage("Tembisa 1632");
    expect(r.status === "found" && r.available).toEqual(["hotspot", "lte"]);
  });
  it("unknown address is not found rather than 'no coverage'", () => {
    expect(matchCoverage("1 Long Street, Cape Town").status).toBe("not_found");
  });
  it("rejects empty address", () => {
    expect(validateAddress("  ")).not.toBeNull();
  });
});
