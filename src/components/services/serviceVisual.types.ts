export type ServiceTheme = {
  primaryGrad: string;
  accentGrad: string;
  glowColor: string;
  borderColor: string;
  atmosphere: string;
  cardBg: string;
  cardBorder: string;
};

export type ServiceThemes = {
  architecture: ServiceTheme;
  interior: ServiceTheme;
  management: ServiceTheme;
  "3d": ServiceTheme;
};

export const serviceThemes: ServiceThemes = {
  architecture: {
    primaryGrad: "from-amber-200 via-orange-100 to-amber-100",
    accentGrad: "from-amber-300 to-orange-200",
    glowColor: "rgba(217, 119, 6, 0.25)",
    borderColor: "#f59e0b",
    atmosphere: "from-amber-200/30 via-orange-100/15 to-transparent",
    cardBg: "from-white/70 to-amber-50/40",
    cardBorder: "#fbbf24",
  },
  interior: {
    primaryGrad: "from-emerald-200 via-green-100 to-emerald-100",
    accentGrad: "from-emerald-300 to-teal-200",
    glowColor: "rgba(5, 150, 105, 0.25)",
    borderColor: "#10b981",
    atmosphere: "from-emerald-200/30 via-green-100/15 to-transparent",
    cardBg: "from-white/70 to-emerald-50/40",
    cardBorder: "#6ee7b7",
  },
  management: {
    primaryGrad: "from-blue-200 via-indigo-100 to-blue-100",
    accentGrad: "from-blue-300 to-indigo-200",
    glowColor: "rgba(37, 99, 235, 0.25)",
    borderColor: "#3b82f6",
    atmosphere: "from-blue-200/30 via-indigo-100/15 to-transparent",
    cardBg: "from-white/70 to-blue-50/40",
    cardBorder: "#93c5fd",
  },
  "3d": {
    primaryGrad: "from-pink-200 via-rose-100 to-pink-100",
    accentGrad: "from-pink-300 to-rose-200",
    glowColor: "rgba(190, 24, 93, 0.25)",
    borderColor: "#f43f5e",
    atmosphere: "from-pink-200/30 via-rose-100/15 to-transparent",
    cardBg: "from-white/70 to-pink-50/40",
    cardBorder: "#fbcfe8",
  },
};
