export type Project = {
  slug: string;
  n: string;
  title: string;
  tags: string;
  year: string;
  liveHref?: string;
  externalHref?: string;
  desc: string;
  body: string[];
  image?: string;
  imagePosition?: string;
  gallery: string[];
  meta: { type: string; year: string; role: string; stack: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "gyreo",
    n: "01",
    title: "Gyreo",
    tags: "Dashboard · Maritime · Code",
    year: "2026",
    liveHref: "https://gyreo.es/",
    externalHref: "https://github.com/veelpau-hub/dashboard_maritimo",
    desc: "Maritime intelligence dashboard. Live AIS vessel tracking via WebSocket, 7 hand-drawn D3.js panels (wind rose, Beaufort arc, wave height, solar arc, barometer), Copernicus Sentinel-1 SAR imagery, and tide forecasts from Puertos del Estado. Flask backend on Render.",
    body: [
      "Built as a personal tool for sailors and maritime professionals — a region with complex tidal patterns, heavy traffic and weather that changes faster than any standard app conveys.",
      "The dashboard aggregates live AIS vessel positions via WebSocket, Open-Meteo marine and atmospheric forecasts, Copernicus Sentinel-1 SAR satellite imagery, and tide predictions from Puertos del Estado's Portus API — all refreshed on independent cycles from a single Flask process.",
      "Every widget is hand-drawn in D3.js: wind rose, Beaufort arc, wave height chart, solar arc, barometer. No third-party chart libraries. A Telegram bot monitors for anomalous vessel behaviour and fires alerts directly to your phone.",
    ],
    image: "/images/work/gyreo/cover.jpg",
    gallery: [
      "/images/work/gyreo/gallery/screen-01.jpg",
      "/images/work/gyreo/gallery/screen-02.jpg",
      "/images/work/gyreo/gallery/screen-03.jpg",
    ],
    meta: {
      type: "Personal project",
      year: "2025 – 2026",
      role: "Design · Development · Deploy",
      stack: "Python · Flask · D3.js · Mapbox GL JS · Render",
    },
  },
  {
    slug: "ilervis",
    n: "02",
    title: "Ilervis",
    tags: "Product · IoT · Science",
    year: "2025",
    desc: "Multi-module scientific platform: ESP32 weather stations feeding live D3.js dashboards, photogrammetry pipeline, Mars HiRISE imagery processing, and ADS-B aircraft tracking.",
    body: [
      "Ilervis is a personal scientific platform built in modules, each solving a different data problem. The name references Ilerda, the Roman name for Lleida.",
      "The weather module networks ESP32 microcontrollers as remote sensing stations. Each node transmits temperature, humidity, pressure and UV index over Wi-Fi to a central Flask backend where D3.js renders live dashboards.",
      "The photogrammetry pipeline processes drone imagery into 3D point clouds. The planetary module downloads and classifies Mars HiRISE high-resolution imagery from the NASA PDS archive. The aviation module decodes ADS-B transponder data to track aircraft positions in real time.",
    ],
    image: undefined,
    gallery: [],
    meta: {
      type: "Personal project",
      year: "2025",
      role: "Design · Development · Research",
      stack: "ESP32 · Python · D3.js · Flask · Arduino",
    },
  },
  {
    slug: "veelrun",
    n: "03",
    title: "VeelRun",
    tags: "Mobile · GPS · PWA",
    year: "2025",
    liveHref: "https://veelrun.onrender.com/",
    imagePosition: "top",
    desc: "GPS running tracker built as a PWA — installable on iOS and Android without the App Store. Live bearing to home, pace, split stats and distance. Dark minimal UI built for one hand. Live on Render.",
    body: [
      "A GPS running tracker that runs entirely in the browser — no app store, no installation friction. Built as a Progressive Web App with a Service Worker for offline capability and home screen installation on both iOS and Android.",
      "The core feature is a live compass bearing back to your start point, which makes it useful for out-and-back runs in unfamiliar terrain. The UI is designed for dark conditions and one-handed use: large touch targets, high contrast and no distracting chrome.",
      "Stats tracked in real time: distance, pace, average pace, elapsed time, and per-kilometre splits. All processing happens on-device — no data sent anywhere.",
    ],
    image: "/images/work/veelrun/cover.jpg",
    gallery: [
      "/images/work/veelrun/gallery/screen-01.jpg",
    ],
    meta: {
      type: "Personal project",
      year: "2025",
      role: "Design · Development · Deploy",
      stack: "HTML · CSS · JavaScript · PWA · Service Worker · Render",
    },
  },
  {
    slug: "anvie",
    n: "04",
    title: "Anvie",
    tags: "Branding · Identity · Studio",
    year: "2022 – present",
    desc: "Personal creative studio for early-stage brand identity. Visual language, naming, motion and web. Work spans editorial, identity systems and client brand launches.",
    body: [
      "Anvie is the studio through which independent brand work happens. Clients are typically founders building something from scratch — early enough that the brand can be defined properly, not retrofitted onto an existing product.",
      "Work covers the full scope of early-stage brand: naming, visual identity, motion and web presence. The studio has produced identity systems, editorial projects and brand launches since 2022.",
      "Each project starts from a strategic brief — understanding the audience, the positioning and the longevity required — before touching Figma.",
    ],
    image: "/images/work/anvie/cover.avif",
    imagePosition: "top",
    gallery: [
      "/images/work/anvie/gallery/1lYpOWxJrGVc92yhepSQgjNsZI.webp",
      "/images/work/anvie/gallery/NKY1yNCFBfuJxJ2kFMQHWQ72xc.webp",
      "/images/work/anvie/gallery/oib3KMkHYg8D32WUqmaQuuo9cr0.webp",
      "/images/work/anvie/gallery/WKkr3HhpSGQ3HOma14ehWgDcWA.avif",
      "/images/work/anvie/gallery/XY4qkeipgQWbahSn6rFxKZ22Tck.webp",
      "/images/work/anvie/gallery/6CaQr97hP9OPQyryXbKds7f9lfU.webp",
      "/images/work/anvie/gallery/G7PEQTAEZobgVpzbwJVDbeIjhg.webp",
      "/images/work/anvie/gallery/iLRxYuV0kpAsX7GbMKpURD7bUX4.avif",
      "/images/work/anvie/gallery/bowsyY6Y9HaMy4BpCoARv0og4ec.avif",
      "/images/work/anvie/gallery/I1pfwj3ydGZsTuHoQXEEaekJQw.avif",
      "/images/work/anvie/gallery/LDZ7XYmtxLbhjXb7hx9ADQzRPh4.avif",
      "/images/work/anvie/gallery/V2AJaXg4RiTEzZTEI2ijZkOAA2I.webp",
    ],
    meta: {
      type: "Creative studio",
      year: "2022 – present",
      role: "Art Direction · Brand Identity · Design",
      stack: "Figma · Adobe Suite · After Effects",
    },
  },
  {
    slug: "the-white-brig",
    n: "05",
    title: "The White Brig",
    tags: "Branding · Hospitality · Identity",
    year: "2022",
    desc: "Brand identity for a hospitality venue — visual mark, typography, print collateral and digital assets. Developed through Anvie Studio.",
    body: [
      "Complete brand identity for a hospitality venue. The brief called for a visual language that felt rooted and characterful — referencing the history and spirit of the place without being costume-dressed in it.",
      "Deliverables included the primary mark, secondary marks, a full typography hierarchy, colour palette, print collateral and digital guidelines for consistent application across all surfaces.",
      "Developed through Anvie Studio.",
    ],
    image: "/images/work/the-white-brig/cover.webp",
    gallery: [
      "/images/work/the-white-brig/gallery/1e1mOGnS7xq4pqOXi1xVcOTVI.webp",
      "/images/work/the-white-brig/gallery/30UYRJQAmvIUPZmstnM2O8XLKv0.webp",
      "/images/work/the-white-brig/gallery/3Bip0G2kVDhTen69wrmYeHTCHag.webp",
      "/images/work/the-white-brig/gallery/7Jc1Maxw26fB00WLsH1dPj1A.webp",
      "/images/work/the-white-brig/gallery/cpU8crixT5LCvCtYysaqHmUcfc.webp",
      "/images/work/the-white-brig/gallery/HMNAke7AdaAkA5HVSMhviYcDw.webp",
      "/images/work/the-white-brig/gallery/nmEl9YtHa8eJoI2CWDNIeUd9Zw.webp",
      "/images/work/the-white-brig/gallery/T4OMCtgjvvstZCQE57e0eL3PjY.webp",
      "/images/work/the-white-brig/gallery/y4kH7yC5GeDqgegZkNhlqqGSGqs.webp",
    ],
    meta: {
      type: "Client project · Anvie Studio",
      year: "2022",
      role: "Brand Identity · Print · Digital",
      stack: "Figma · Adobe Illustrator · InDesign",
    },
  },
  {
    slug: "kingston-garden",
    n: "06",
    title: "Kingston Garden",
    tags: "Branding · Identity · Print",
    year: "2022",
    desc: "Brand identity for a hospitality concept in Amsterdam — visual language, typography system, and print and digital collateral.",
    body: [
      "Brand identity for a garden hospitality concept in Amsterdam. The identity centres on the tension between formality and abundance — a structured layout system with organic detail running through every application.",
      "Deliverables included logotype, primary and secondary marks, colour palette, typography system, print materials and digital guidelines.",
    ],
    image: "/images/work/kingston-garden/cover.webp",
    gallery: [
      "/images/work/kingston-garden/gallery/1aAzDofFibVGcRihJsyjSjGYdU.webp",
      "/images/work/kingston-garden/gallery/6evhs8yO4HqRbbPKwZ3WFMf0bo4.webp",
      "/images/work/kingston-garden/gallery/ClzlcubKs9PVfKI54Baxyke9qo.webp",
      "/images/work/kingston-garden/gallery/KUfFAhflJiIH0tTqVxvEGPdiy2Y.webp",
      "/images/work/kingston-garden/gallery/OwpRCUUdkXBdfWVYxLxegSJKMwM.webp",
    ],
    meta: {
      type: "Client project",
      year: "2022",
      role: "Brand Identity · Print · Digital",
      stack: "Figma · Adobe Illustrator",
    },
  },
  {
    slug: "svatma-yoga",
    n: "07",
    title: "Svatma Yoga",
    tags: "Branding · Identity · Wellness",
    year: "2023",
    desc: "Brand identity for a yoga studio in Lleida. Naming, visual system, photography direction and digital collateral.",
    body: [
      "Brand identity for a yoga studio in Lleida. Svatma (svātma, Sanskrit: 'one's own self') required a mark that felt centred and considered without falling into the visual clichés of the wellness category.",
      "The visual system uses deliberate space and a restrained palette. Photography direction reinforced the identity with natural light, minimal staging and an emphasis on practice over performance.",
      "Deliverables: naming rationale, primary mark, colour palette, typography system, photography direction, print and digital collateral.",
    ],
    image: "/images/work/svatma-yoga/cover.jpg",
    gallery: [
      "/images/work/svatma-yoga/gallery/IjlqFPcBYazo6AxTHSdIAcjQ.jpg",
      "/images/work/svatma-yoga/gallery/mDOUekJt4y4nilnd9YuOwBiY.webp",
      "/images/work/svatma-yoga/gallery/Q4Ky8bUtomfwkJqfHi709wcwIk.avif",
      "/images/work/svatma-yoga/gallery/zmihbOoCvMzoLmQwIG7pStUUoT0.webp",
    ],
    meta: {
      type: "Client project",
      year: "2023",
      role: "Naming · Brand Identity · Photography Direction",
      stack: "Figma · Adobe Suite",
    },
  },
  {
    slug: "vmly-r",
    n: "08",
    title: "VMLY&R",
    tags: "Digital Design · Social · Brand",
    year: "2022 – 2023",
    desc: "Digital content and social campaigns for Danone, Naturgy, Miravia, Ultima and Cacaolat. Motion, still and interactive formats at scale.",
    body: [
      "Digital content and social campaigns for major Spanish and international brands at VMLY&R, one of the world's largest marketing agencies.",
      "Brands included Danone, Naturgy, Miravia, Ultima and Cacaolat. Work spanned the full content spectrum: motion graphics, static social assets, interactive formats and campaign systems designed for high-volume production.",
      "The role demanded both design precision and the ability to work at pace — producing consistent work across multiple brand guidelines simultaneously.",
    ],
    image: undefined,
    gallery: [],
    meta: {
      type: "Agency",
      year: "2022 – 2023",
      role: "Digital Designer",
      stack: "Adobe Suite · After Effects · Figma",
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
