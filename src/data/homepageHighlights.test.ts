import { describe, expect, it } from "vitest";
import { CLIENT_COUNT, clientCountAtProgress } from "./homepageHighlights";

describe("homepage client count", () => {
  it("uses the user-supplied total of 150 clients", () => {
    expect(CLIENT_COUNT).toBe(150);
    expect(clientCountAtProgress(1)).toBe(150);
  });
  it("counts up from zero without exceeding the total", () => {
    expect(clientCountAtProgress(0)).toBe(0);
    expect(clientCountAtProgress(0.5)).toBe(131);
    expect(clientCountAtProgress(2)).toBe(150);
    expect(clientCountAtProgress(-1)).toBe(0);
  });
});