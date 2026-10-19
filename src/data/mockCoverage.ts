import type { MockCoverageRecord } from "@/types";

/**
 * DEMONSTRATION DATA ONLY. These records do not represent verified O50M
 * network coverage. Replace with Firestore / coverage API results later.
 */
export const MOCK_COVERAGE: MockCoverageRecord[] = [
  {
    id: "demo-soweto",
    label: "Orlando West, Soweto (demo area)",
    keywords: ["orlando", "soweto", "vilakazi", "1804"],
    available: ["fibre", "5g", "hotspot", "lte"],
  },
  {
    id: "demo-tembisa",
    label: "Tembisa (demo area)",
    keywords: ["tembisa", "1632", "andrew mapheto"],
    available: ["hotspot", "lte"],
  },
  {
    id: "demo-khayelitsha",
    label: "Khayelitsha (demo area)",
    keywords: ["khayelitsha", "7784", "site c"],
    available: ["5g", "lte"],
  },
  {
    id: "demo-umlazi",
    label: "Umlazi (demo area)",
    keywords: ["umlazi", "4031", "mangosuthu"],
    available: ["fibre", "hotspot"],
  },
];

export const DEMO_EXAMPLES = ["Vilakazi Street, Orlando West, Soweto", "Tembisa 1632", "Site C, Khayelitsha", "Umlazi 4031"];
