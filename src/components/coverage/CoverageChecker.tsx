import { useId, useRef, useState, type FormEvent } from "react";
import { Layers, Loader2, MapPin, Search, ShieldCheck } from "lucide-react";
import { checkCoverage, validateAddress, MAX_ADDRESS_LENGTH } from "@/services/coverageService";
import type { CoverageResult } from "@/types";
import { CoverageResults } from "./CoverageResults";
import { Button } from "@/components/ui/button";
import { TECHNOLOGIES } from "@/data/mockProducts";
import { TechIcon } from "@/components/products/TechIcon";
import { selectCoverageService, type ServiceSelection } from "./serviceSelection";

export const COVERAGE_INPUT_ID = "coverage-address";

export function CoverageChecker() {
  const [address, setAddress] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoverageResult | null>(null);
  const [service, setService] = useState<ServiceSelection>("all");
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
      <form onSubmit={submit} noValidate className="max-w-3xl rounded-lg border border-border bg-card p-4 shadow-soft sm:p-5">
        <fieldset className="mb-4 min-w-0">
          <legend className="mb-2 text-sm font-semibold text-navy">Choose your coverage type</legend>
          <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-[auto_repeat(4,minmax(0,1fr))] sm:gap-2">
            {([{ id: "all", name: "All Services" }, ...TECHNOLOGIES] as const).map((option) => (
              <Button
                key={option.id}
                type="button"
                variant={service === option.id ? "default" : "outline"}
                aria-pressed={service === option.id}
                onClick={() => setService(option.id)}
                className={`h-11 min-w-0 gap-1 rounded-md px-1 text-sm font-semibold shadow-none sm:gap-2 sm:px-3 ${option.id === "all" ? "col-span-4 sm:col-span-1" : ""} ${service === option.id ? "" : "border-muted-foreground/60 bg-card text-navy hover:border-primary hover:bg-sky"}`}
              >
                {option.id === "all" ? <Layers aria-hidden="true" /> : <TechIcon id={option.id} />}
                {option.name}
              </Button>
            ))}
          </div>
        </fieldset>
        <label htmlFor={COVERAGE_INPUT_ID} className="block font-display text-base font-semibold text-navy">
          Check availability at your address
        </label>
        <div className="mt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-0">
          <div className="relative min-w-0 flex-1">
            <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" aria-hidden="true" />
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
               className="h-12 w-full rounded-l-md border border-muted-foreground/60 bg-background pl-9 pr-2 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20"
            />
          </div>
           <Button
            type="submit"
            disabled={loading}
            aria-label={loading ? "Checking coverage" : "Check Coverage"}
            title="Check Coverage"
            className="h-12 w-12 shrink-0 gap-2 rounded-l-none rounded-r-md px-0 text-sm font-semibold disabled:opacity-70 sm:w-auto sm:px-5"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> : <Search className="h-5 w-5" aria-hidden="true" />}
            <span className="hidden sm:inline">{loading ? "Checking…" : "Check Coverage"}</span>
           </Button>
        </div>
        {error && (
          <p id={errId} role="alert" className="mt-3 text-sm font-medium text-destructive">
            {error}
          </p>
        )}
        <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
          <span>Your address helps us find the available connection options for your area. We don't store it.</span>
        </p>
      </form>

      <div aria-live="polite" className="mt-4">
        {loading && (
           <p role="status" className="flex items-center gap-2 rounded-lg bg-card px-5 py-4 text-navy">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Looking up options for your address…
          </p>
        )}
        {result && !loading && <CoverageResults key={`${service}-${result.address}`} result={selectCoverageService(result, service)} onReset={reset} />}
      </div>
    </div>
  );
}
