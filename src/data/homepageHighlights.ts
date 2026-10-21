export const CLIENT_COUNT = 150;

export function clientCountAtProgress(progress: number) {
  const bounded = Math.min(1, Math.max(0, progress));
  return Math.round(CLIENT_COUNT * (1 - Math.pow(1 - bounded, 3)));
}

export const HOMEPAGE_HIGHLIGHTS = {
  home: {
    title: "Intelligent home Wi-Fi.",
    intro: "Wi-Fi Pods and Plume bring smart connectivity into your home, helping you stay connected as you move from room to room.",
    detailTitle: "Make it a ‘Full House’.",
    detail: "Optional additional O50M Wi-Fi Pods connect to your main Pod to extend your home’s Wi-Fi coverage. Plug them into a power socket and let the smart mesh connect your space.",
  },
  business: {
    title: "Business Wi-Fi. Built to keep you moving.",
    intro: "From customer calls to everyday collaboration, O50M business broadband connects the people, devices and tools you rely on.",
    detailTitle: "Software-Defined Internet.",
    detail: "Keep business continuity in focus with connectivity designed around your workplace. Talk to our team about Software-Defined Internet, Wi-Fi coverage and the right connection for your premises.",
  },
};