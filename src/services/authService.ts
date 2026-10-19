import { z } from "zod";
import type { AuthResult, LoginForm, SignUpForm } from "@/types";

export const loginSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  password: z.string().min(1, "Please enter your password.").max(128),
});

export const signUpSchema = z
  .object({
    fullName: z.string().trim().min(2, "Please enter your full name.").max(100),
    email: z.string().trim().email("Please enter a valid email address.").max(255),
    phone: z.string().trim().regex(/^(\+27|0)[0-9 ]{9,12}$/, "Please enter a valid South African phone number."),
    password: z.string().min(8, "Password must be at least 8 characters.").max(128),
    confirmPassword: z.string(),
  })
  .refine((d) => d.password === d.confirmPassword, { message: "Passwords do not match.", path: ["confirmPassword"] });

const DEMO = "This is a demonstration. Customer accounts are not connected yet, so nothing was saved.";

/** Placeholder — replace with Firebase Authentication. */
export async function logIn(_form: LoginForm): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 600));
  return { ok: false, message: DEMO };
}
export async function signUp(_form: SignUpForm): Promise<AuthResult> {
  await new Promise((r) => setTimeout(r, 600));
  return { ok: false, message: DEMO };
}
export async function requestPasswordReset(_email: string): Promise<AuthResult> {
  return { ok: false, message: "Password reset will be available once customer accounts are connected." };
}
