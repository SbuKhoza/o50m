import type { ConnectionTechnology, ProductOption, TechnologyId } from "@/types";

export const TECHNOLOGIES: ConnectionTechnology[] = [
  { id: "fibre", name: "Fibre", description: "Fast, stable internet delivered over a fibre-optic connection, where infrastructure is available." },
  { id: "5g", name: "5G", description: "High-speed wireless connectivity for compatible devices and locations with suitable 5G coverage." },
  { id: "hotspot", name: "Hotspot", description: "Convenient wireless connectivity for supported locations and devices." },
  { id: "lte", name: "LTE", description: "Flexible mobile-network connectivity for locations with suitable LTE coverage." },
];

export const getTechnology = (id: TechnologyId) => TECHNOLOGIES.find((t) => t.id === id)!;

/** Demonstration product options only — no prices, speeds or limits are claimed. */
export const PRODUCT_OPTIONS: ProductOption[] = [
  { id: "fibre-home", technology: "fibre", name: "Fibre for Home", summary: "A fixed line for households that stream, study and work online.", suitableFor: "Homes" },
  { id: "fibre-business", technology: "fibre", name: "Fibre for Business", summary: "A dependable fixed connection for shops, offices and service businesses.", suitableFor: "Businesses" },
  { id: "5g-home", technology: "5g", name: "5G Home Wireless", summary: "Wireless internet with a router, where 5G signal is suitable.", suitableFor: "Homes" },
  { id: "5g-business", technology: "5g", name: "5G Business Wireless", summary: "Wireless connectivity for businesses in 5G-ready areas.", suitableFor: "Businesses" },
  { id: "hotspot-access", technology: "hotspot", name: "Community Hotspot Access", summary: "Connect your phone or laptop at supported hotspot locations.", suitableFor: "Individuals" },
  { id: "hotspot-venue", technology: "hotspot", name: "Hotspot for Venues", summary: "Offer Wi-Fi to customers at your shop, café or venue.", suitableFor: "Businesses" },
  { id: "lte-home", technology: "lte", name: "LTE Home", summary: "Plug-and-play internet over the mobile network.", suitableFor: "Homes" },
  { id: "lte-flex", technology: "lte", name: "LTE Flexible", summary: "A portable connection for people on the move.", suitableFor: "Homes & businesses" },
];

export const getOptionsFor = (id: TechnologyId) => PRODUCT_OPTIONS.filter((p) => p.technology === id);
