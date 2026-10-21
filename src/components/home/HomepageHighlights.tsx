import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Headphones, House, MonitorPlay, Network, Router, Users, Wifi } from "lucide-react";
import homeWifi from "@/assets/home-wifi.png.asset.json";
import businessWifi from "@/assets/business-wifi.png.asset.json";
import { Button } from "@/components/ui/button";
import { CLIENT_COUNT, HOMEPAGE_HIGHLIGHTS, clientCountAtProgress } from "@/data/homepageHighlights";

function ClientCounter() {
  const element = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = element.current;
    if (!target) return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting) || started) return;
      started = true;
      observer.disconnect();
      if (motionPreference.matches) {
        setCount(CLIENT_COUNT);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 1400, 1);
        setCount(clientCountAtProgress(progress));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.35 });
    observer.observe(target);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return (
    <div ref={element} className="border-t border-community-foreground/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
      <Users className="h-9 w-9 text-primary" aria-hidden="true" />
      <p className="mt-4 font-display text-7xl font-bold leading-none tabular-nums text-community-foreground sm:text-8xl" aria-label={`${CLIENT_COUNT}+ clients`}>
        <span aria-hidden="true">{count}+</span>
      </p>
      <p className="mt-3 text-xl font-semibold">Clients connected</p>
      <p className="mt-2 max-w-xs text-community-foreground/75">Homes, businesses and people. Part of the O50M community.</p>
    </div>
  );
}

const REASONS = [
  { icon: Wifi, title: "Stay connected", text: "Connection options for home and work." },
  { icon: MonitorPlay, title: "Everyday streaming", text: "Make room for the things you enjoy online." },
  { icon: Router, title: "Whole-home Wi-Fi", text: "Explore smart mesh and optional Wi-Fi Pods." },
  { icon: Headphones, title: "A team to talk to", text: "Get help choosing your connection." },
];

export function HomepageHighlights() {
  return (
    <>
      <section aria-labelledby="home-wifi-title" className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold uppercase text-primary"><House className="h-4 w-4" aria-hidden="true" /> For your home</p>
            <h2 id="home-wifi-title" className="mt-4 max-w-lg font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">{HOMEPAGE_HIGHLIGHTS.home.title}</h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{HOMEPAGE_HIGHLIGHTS.home.intro}</p>
            <div className="mt-7 border-l-2 border-brand pl-5">
              <h3 className="font-display text-xl font-bold text-navy">{HOMEPAGE_HIGHLIGHTS.home.detailTitle}</h3>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{HOMEPAGE_HIGHLIGHTS.home.detail}</p>
            </div>
            <Button asChild className="mt-7 min-h-12 whitespace-normal px-5 text-base font-semibold"><Link to="/for-your-home">Explore home Wi-Fi <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
          <img src={homeWifi.url} alt="Wi-Fi Pods extend a smart mesh connection across the rooms of a house" width={683} height={442} loading="lazy" className="aspect-[683/442] w-full object-contain" />
        </div>
      </section>

      <section aria-labelledby="business-wifi-title" className="bg-background">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <img src={businessWifi.url} alt="Laptop and mobile phone connected to business video calls and collaboration tools" width={649} height={482} loading="lazy" className="order-2 aspect-[649/482] w-full object-contain mix-blend-multiply lg:order-1" />
          <div className="order-1 lg:order-2">
            <p className="flex items-center gap-2 text-sm font-bold uppercase text-primary"><Network className="h-4 w-4" aria-hidden="true" /> For your business</p>
            <h2 id="business-wifi-title" className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">{HOMEPAGE_HIGHLIGHTS.business.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{HOMEPAGE_HIGHLIGHTS.business.intro}</p>
            <div className="mt-7 border-l-2 border-secondary pl-5">
              <h3 className="font-display text-xl font-bold text-navy">{HOMEPAGE_HIGHLIGHTS.business.detailTitle}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{HOMEPAGE_HIGHLIGHTS.business.detail}</p>
            </div>
            <Button asChild className="mt-7 min-h-12 whitespace-normal px-5 text-base font-semibold"><Link to="/for-your-business">Explore business broadband <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="why-choose-title" className="bg-community text-community-foreground">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <p className="flex items-center gap-2 text-sm font-bold uppercase text-primary"><Check className="h-4 w-4" aria-hidden="true" /> Why choose us</p>
          <h2 id="why-choose-title" className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">Switch to O50M Broadband.</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.48fr] lg:gap-12">
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {REASONS.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-start gap-4">
                  <Icon className="mt-1 h-7 w-7 shrink-0 text-primary" strokeWidth={1.7} aria-hidden="true" />
                  <div><h3 className="font-display text-lg font-bold">{title}</h3><p className="mt-2 max-w-xs leading-relaxed text-community-foreground/75">{text}</p></div>
                </div>
              ))}
            </div>
            <ClientCounter />
          </div>
        </div>
      </section>
    </>
  );
}