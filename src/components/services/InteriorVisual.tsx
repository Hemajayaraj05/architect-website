import { motion } from "framer-motion";
import type { ServiceTheme } from "./serviceVisual.types";

type Props = {
  isInView: boolean;
  theme: ServiceTheme;
};

export const InteriorVisual = ({ isInView, theme }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Professional floor plan layout */}
      <motion.svg
        className="absolute w-72 h-60 z-10"
        viewBox="0 0 320 260"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Main outer walls */}
        <motion.rect x="15" y="15" width="290" height="230" fill="none" stroke="#d97706" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 2, delay: 0.2 }} />

        {/* Living Room */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5, duration: 0.6 }}>
          {/* Living room divider */}
          <motion.line x1="160" y1="15" x2="160" y2="130" stroke="#d97706" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.6 }} />
          
          {/* Sofa */}
          <motion.rect x="30" y="35" width="55" height="22" fill="none" stroke="#b45309" strokeWidth="1.2" rx="3" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1.2 }} />
          <motion.rect x="35" y="40" width="45" height="12" fill="url(#sofaGrad)" opacity="0.4" rx="2" />
          
          {/* TV Stand */}
          <motion.rect x="100" y="50" width="35" height="18" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.4 }} />
          
          {/* Coffee Table */}
          <motion.circle cx="80" cy="80" r="15" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.6 }} />
          
          {/* Window */}
          <motion.line x1="15" y1="55" x2="15" y2="85" stroke="#d97706" strokeWidth="3" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1.8 }} />
        </motion.g>

        {/* Kitchen Area */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6, duration: 0.6 }}>
          {/* Counter */}
          <motion.line x1="165" y1="35" x2="290" y2="35" stroke="#b45309" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1 }} />
          
          {/* Stove/Appliance */}
          <motion.rect x="175" y="50" width="20" height="25" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.2 }} />
          
          {/* Sink */}
          <motion.circle cx="230" cy="58" r="8" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.3 }} />
          
          {/* Fridge */}
          <motion.rect x="260" y="45" width="18" height="30" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.4 }} />
        </motion.g>

        {/* Bedroom */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.7, duration: 0.6 }}>
          {/* Bedroom divider */}
          <motion.line x1="15" y1="140" x2="160" y2="140" stroke="#ea580c" strokeWidth="1.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 1, delay: 0.8 }} />
          
          {/* Bed */}
          <motion.rect x="30" y="160" width="50" height="40" fill="none" stroke="#b45309" strokeWidth="1.2" rx="2" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1.3 }} />
          <motion.rect x="35" y="165" width="40" height="30" fill="url(#bedGrad)" opacity="0.3" rx="1" />
          
          {/* Nightstands */}
          <motion.rect x="25" y="165" width="10" height="12" fill="none" stroke="#b45309" strokeWidth="0.6" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 1.5 }} />
          <motion.rect x="85" y="168" width="10" height="12" fill="none" stroke="#b45309" strokeWidth="0.6" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 1.6 }} />
          
          {/* Closet */}
          <motion.line x1="110" y1="140" x2="110" y2="230" stroke="#d97706" strokeWidth="1.2" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1.8 }} />
          
          {/* Window */}
          <motion.line x1="15" y1="185" x2="15" y2="215" stroke="#ea580c" strokeWidth="3" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 2 }} />
        </motion.g>

        {/* Bathroom area */}
        <motion.g initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.8, duration: 0.6 }}>
          {/* Tub */}
          <motion.rect x="175" y="160" width="35" height="28" fill="none" stroke="#b45309" strokeWidth="1" rx="4" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.8, delay: 1.5 }} />
          
          {/* Toilet */}
          <motion.ellipse cx="245" cy="175" rx="8" ry="10" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.7 }} />
          
          {/* Sink */}
          <motion.circle cx="280" cy="180" r="7" fill="none" stroke="#b45309" strokeWidth="0.8" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.6, delay: 1.8 }} />
        </motion.g>

        {/* Door marks */}
        <motion.path d="M 30 140 Q 35 140 40 135" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 2 }} />
        <motion.path d="M 160 70 Q 160 75 155 80" fill="none" stroke="#d97706" strokeWidth="1" opacity="0.5" initial={{ pathLength: 0 }} animate={isInView ? { pathLength: 1 } : {}} transition={{ duration: 0.5, delay: 2.1 }} />

        <defs>
          <linearGradient id="sofaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="bedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Small room cards - interior */}
      <div className="absolute left-6 top-8 flex flex-col gap-2 z-20">
        {[{ t: "Living", s: "Sofa + TV" }, { t: "Kitchen", s: "Open Counter" }, { t: "Bedroom", s: "King Bed" }].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 + i * 0.12 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`w-32 p-2 rounded-lg bg-linear-to-br ${theme.cardBg} border`}
            style={{ borderColor: theme.cardBorder }}
          >
            <div className="text-sm font-medium text-stone-800">{c.t}</div>
            <div className="text-xs text-stone-600">{c.s}</div>
          </motion.div>
        ))}
      </div>

      {/* Animated plant accent - tall plant - ENHANCED */}
      <motion.div
        initial={{ opacity: 0, x: 35, scale: 0.8 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                scale: 1,
                y: [0, 15, 0],
                rotateZ: [-6, 6, -6],
              }
            : {}
        }
        transition={{
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          scale: { duration: 0.8, delay: 0.4 },
          y: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.2 },
          rotateZ: { repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1.2 },
        }}
        className="absolute right-16 bottom-20 w-16 h-32"
        style={{ filter: "drop-shadow(0 20px 40px rgba(5, 150, 105, 0.4))" }}
      >
        <div className="w-2.5 h-12 bg-linear-to-b from-emerald-900 via-emerald-950 to-stone-900 rounded-full mx-auto" />
        <div className="w-20 h-16 bg-linear-to-br from-emerald-300 to-green-600 rounded-[35%_65%_40%_60%/70%_30%_70%_30%] mx-auto -mt-2 shadow-2xl border border-emerald-600/30" />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-14 bg-emerald-400/60 rounded-full blur-xl"
        />
      </motion.div>

      {/* Small decorative plant - ENHANCED */}
      <motion.div
        initial={{ opacity: 0, x: -35, scale: 0.8 }}
        animate={
          isInView
            ? {
                opacity: 1,
                x: 0,
                scale: 1,
                y: [0, -12, 0],
                rotateZ: [6, -6, 6],
              }
            : {}
        }
        transition={{
          opacity: { duration: 0.8, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5 },
          scale: { duration: 0.8, delay: 0.5 },
          y: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.4 },
          rotateZ: { repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.4 },
        }}
        className="absolute left-16 bottom-12 w-14 h-20"
        style={{ filter: "drop-shadow(0 16px 32px rgba(5, 150, 105, 0.3))" }}
      >
        <div className="w-2.5 h-8 bg-linear-to-b from-emerald-900 to-emerald-950 rounded-full mx-auto" />
        <div className="w-12 h-12 bg-linear-to-br from-teal-400 to-emerald-600 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] mx-auto shadow-xl border border-teal-600/30" />
      </motion.div>

      {/* Floating design accents - BIGGER MOTION */}
      <motion.div
        animate={{ y: [40, 10, 40], x: [-60, -40, -60], rotate: [0, 15, 0], scale: [0.85, 1.1, 0.85] }}
        transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut" }}
        className="absolute w-12 h-12 bg-linear-to-br from-green-400/35 to-emerald-500/25 backdrop-blur-md rounded-lg border border-emerald-400/40 shadow-2xl"
        style={{ filter: "drop-shadow(0 20px 40px rgba(5, 150, 105, 0.35))" }}
      />
      <motion.div
        animate={{ y: [-40, -10, -40], x: [60, 40, 60], scale: [0.8, 1.15, 0.8], rotate: [0, -18, 0] }}
        transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut", delay: 0.6 }}
        className="absolute w-10 h-10 bg-linear-to-tl from-teal-400/30 to-green-500/20 backdrop-blur-md rounded-full border border-green-300/35 shadow-2xl"
        style={{ filter: "drop-shadow(0 24px 48px rgba(16, 185, 129, 0.3))" }}
      />
    </div>
  );
};
