import { MOCK_COVERAGE } from "@/data/mockCoverage";
import { TECHNOLOGIES } from "@/data/mockProducts";
import type { AddressSearchRequest, CoverageResult } from "@/types";

export const MIN_ADDRESS_LENGTH = 3;
export const MAX_ADDRESS_LENGTH = 200;

export function validateAddress(raw: string): string | null {
  const v = raw.trim();
  if (!v) return "Please enter your address, suburb or postal code.";
  if (v.length < MIN_ADDRESS_LENGTH) return "Please enter a little more of your address.";
  if (v.length > MAX_ADDRESS_LENGTH) return "That address is too long. Please shorten it.";
  return null;
}

/** Pure matcher — swap for a Firestore / API call later. */
export function matchCoverage(address: string): CoverageResult {
  const q = address.toLowerCase();
  const record = MOCK_COVERAGE.find((r) => r.keywords.some((k) => q.includes(k)));
  if (!record) return { status: "not_found", address };
  return {
    status: "found",
    address,
    areaLabel: record.label,
    available: TECHNOLOGIES.filter((t) => record.available.includes(t.id)).map((t) => t.id),
    unavailable: TECHNOLOGIES.filter((t) => !record.available.includes(t.id)).map((t) => t.id),
  };
}

/** Simulated async lookup. Addresses are never stored. */
export async function checkCoverage(req: AddressSearchRequest): Promise<CoverageResult> {
  const error = validateAddress(req.address);
  if (error) throw new Error(error);
  await new Promise((r) => setTimeout(r, 900));
  return matchCoverage(req.address.trim());
}
