import { useId, useRef, useState, type FormEvent } from "react";
import { Loader2, MapPin, Search } from "lucide-react";
import { checkCoverage, validateAddress, MAX_ADDRESS_LENGTH } from "@/services/coverageService";
import { DEMO_EXAMPLES } from "@/data/mockCoverage";
import type { CoverageResult } from "@/types";
import { CoverageResults } from "./CoverageResults";
import { Button } from "@/components/ui/button";

export const COVERAGE_INPUT_ID = "coverage-address";

export function CoverageChecker() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoverageResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const errId = useId();

  async function submit(e?: FormEvent, value = address) {
    e?.preventDefault();
    const v = validateAddress(value);
    setError(v);
    if (v) {
      inputRef.current?.focus();
      return;
    }
    setLoading(true);
    setResult(null);
    try {
      setResult(await checkCoverage({ address: value }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setResult(null);
    setError(null);
    inputRef.current?.focus();
    inputRef.current?.select();
  }

  return (
    <div>
      <form onSubmit={submit} noValidate className="rounded-lg border border-border bg-card p-5 shadow-soft sm:p-7">
        <label htmlFor={COVERAGE_INPUT_ID} className="block font-display text-lg font-semibold text-navy">
          Check availability at your address
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <MapPin className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" aria-hidden="true" />
            <input
              ref={inputRef}
              id={COVERAGE_INPUT_ID}
              type="text"
              autoComplete="street-address"
              maxLength={MAX_ADDRESS_LENGTH}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your street address, suburb or postal code"
              aria-invalid={!!error}
              aria-describedby={error ? errId : undefined}
              className="h-14 w-full rounded-xl border border-input bg-background pl-12 pr-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>
           <Button
            type="submit"
            disabled={loading}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-base font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-70"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Search className="h-5 w-5" aria-hidden="true" />}
            {loading ? "Checking…" : "Check Coverage"}
           </Button>
        </div>
        {error && (
          <p id={errId} role="alert" className="mt-3 text-sm font-medium text-destructive">
            {error}
          </p>
        )}
        <p className="mt-3 text-sm text-muted-foreground">
          Your address helps us find the available connection options for your area. We don't store it.
        </p>
        <div className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
          <span className="font-medium text-navy">Demo addresses:</span>{" "}
          {DEMO_EXAMPLES.map((ex, i) => (
            <span key={ex}>
              <Button
                type="button"
                variant="link"
                className="h-auto whitespace-normal p-0 text-sm text-primary underline-offset-2 hover:underline"
                onClick={() => {
                  setAddress(ex);
                  submit(undefined, ex);
                }}
              >
                {ex}
              </Button>
              {i < DEMO_EXAMPLES.length - 1 ? " · " : ""}
            </span>
          ))}
        </div>
      </form>

      <div aria-live="polite" className="mt-6">
        {loading && (
          <p className="flex items-center gap-2 rounded-2xl bg-sky px-5 py-4 text-navy">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Looking up options for your address…
          </p>
        )}
        {result && !loading && <CoverageResults result={result} onReset={reset} />}
      </div>
    </div>
  );
}
