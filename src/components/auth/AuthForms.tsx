import { useState, type FormEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Info, Loader2 } from "lucide-react";
import { logIn, loginSchema, requestPasswordReset, signUp, signUpSchema } from "@/services/authService";

type Errors = Record<string, string | undefined>;

function Field({ id, label, type = "text", error, autoComplete }: { id: string; label: string; type?: string; error?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-navy">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        className="mt-1.5 h-13 w-full rounded-xl border border-input bg-background px-4 py-3 text-base focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
      />
      {error && <p id={`${id}-err`} className="mt-1 text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <p role="status" className="flex gap-2 rounded-xl bg-sky p-4 text-sm text-navy">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /> {children}
    </p>
  );
}

function Submit({ loading, children }: { loading: boolean; children: ReactNode }) {
  return (
    <button type="submit" disabled={loading} className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-70">
      {loading && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />} {children}
    </button>
  );
}

function errorsOf(issues: { path: PropertyKey[]; message: string }[]): Errors {
  const e: Errors = {};
  for (const i of issues) e[String(i.path[0])] ??= i.message;
  return e;
}

export function LoginForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = loginSchema.safeParse(data);
    if (!parsed.success) return setErrors(errorsOf(parsed.error.issues));
    setErrors({});
    setLoading(true);
    const r = await logIn(parsed.data);
    setLoading(false);
    setMsg(r.message);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <Field id="email" label="Email address" type="email" autoComplete="email" error={errors.email} />
      <Field id="password" label="Password" type="password" autoComplete="current-password" error={errors.password} />
      <button type="button" onClick={async () => setMsg((await requestPasswordReset("")).message)} className="justify-self-start text-sm font-semibold text-primary hover:underline">
        Forgot Password?
      </button>
      {msg && <Notice>{msg}</Notice>}
      <Submit loading={loading}>Log In</Submit>
      <p className="text-center text-muted-foreground">
        New to O50M? <Link to="/signup" className="font-semibold text-primary hover:underline">Create an Account</Link>
      </p>
    </form>
  );
}

export function SignUpForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(null);
    const parsed = signUpSchema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) return setErrors(errorsOf(parsed.error.issues));
    setErrors({});
    setLoading(true);
    const r = await signUp(parsed.data);
    setLoading(false);
    setMsg(r.message);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5">
      <Field id="fullName" label="Full name" autoComplete="name" error={errors.fullName} />
      <Field id="email" label="Email address" type="email" autoComplete="email" error={errors.email} />
      <Field id="phone" label="Phone number" type="tel" autoComplete="tel" error={errors.phone} />
      <Field id="password" label="Password" type="password" autoComplete="new-password" error={errors.password} />
      <Field id="confirmPassword" label="Confirm password" type="password" autoComplete="new-password" error={errors.confirmPassword} />
      {msg && <Notice>{msg}</Notice>}
      <Submit loading={loading}>Create Account</Submit>
      <p className="text-center text-muted-foreground">
        Already have an account? <Link to="/login" className="font-semibold text-primary hover:underline">Log In</Link>
      </p>
    </form>
  );
}

export function AuthShell({ title, text, children }: { title: string; text: string; children: ReactNode }) {
  return (
    <section className="bg-sky/50 px-4 py-14 sm:py-20">
      <div className="mx-auto max-w-md rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
        <h1 className="font-display text-3xl font-bold text-navy">{title}</h1>
        <p className="mt-2 text-muted-foreground">{text}</p>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  );
}
