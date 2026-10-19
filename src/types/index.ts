export type TechnologyId = "fibre" | "5g" | "hotspot" | "lte";

export interface AddressSearchRequest {
  address: string;
}

export interface ConnectionTechnology {
  id: TechnologyId;
  name: string;
  description: string;
}

export interface ProductOption {
  id: string;
  technology: TechnologyId;
  name: string;
  summary: string;
  suitableFor: string;
}

export interface MockCoverageRecord {
  id: string;
  label: string;
  /** Lower-case keywords matched against the entered address (suburb, street, postal code). */
  keywords: string[];
  available: TechnologyId[];
}

export type CoverageResult =
  | { status: "found"; address: string; areaLabel: string; available: TechnologyId[]; unavailable: TechnologyId[] }
  | { status: "not_found"; address: string };

export interface LoginForm {
  email: string;
  password: string;
}

export interface SignUpForm {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResult {
  ok: boolean;
  message: string;
}
