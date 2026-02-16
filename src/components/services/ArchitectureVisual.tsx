import { motion } from "framer-motion";
import type { ServiceTheme } from "./serviceVisual.types";

type Props = {
  isInView: boolean;
  theme: ServiceTheme;
};

export const ArchitectureVisual = ({ isInView, theme }: Props) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.svg
        className="absolute w-[18rem] h-[15rem] md:w-[22rem] md:h-[18rem] z-10"
        viewBox="0 0 360 300"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <defs>
          <linearGradient id="planStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="planRoad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fdba74" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="parkFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {/* Isometric base grid */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.35 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          stroke="url(#planStroke)"
          strokeWidth="0.6"
          fill="none"
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line key={`g1-${i}`} x1={40 + i * 40} y1="40" x2={140 + i * 40} y2="240" />
          ))}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={`g2-${i}`} x1={20 + i * 40} y1={70 + i * 20} x2={260 + i * 40} y2={70 + i * 20} />
          ))}
        </motion.g>

        {/* Roads and circulation */}
        <motion.path
          d="M 70 210 L 180 250 L 300 190"
          stroke="url(#planRoad)"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M 90 90 L 220 150 L 310 120"
          stroke="url(#planRoad)"
          strokeWidth="8"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Masterplan blocks */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          stroke="url(#planStroke)"
          strokeWidth="1.2"
          fill="none"
        >
          <polygon points="110,120 170,90 230,120 170,150" />
          <polygon points="60,150 110,120 170,150 120,180" />
          <polygon points="190,150 250,120 300,150 240,180" />
          <polygon points="150,180 210,150 260,180 200,210" />
        </motion.g>

        {/* Central tower massing */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <polygon points="165,90 200,70 235,90 200,110" fill="none" stroke="#b45309" strokeWidth="1.6" />
          <polygon points="200,70 200,40 235,60 235,90" fill="none" stroke="#b45309" strokeWidth="1.2" />
          <polygon points="200,70 165,90 165,60 200,40" fill="none" stroke="#b45309" strokeWidth="1.2" />
        </motion.g>

        {/* Park and water */}
        <motion.polygon
          points="40,190 95,160 140,185 85,215"
          fill="url(#parkFill)"
          stroke="#10b981"
          strokeWidth="0.8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.8 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.path
          d="M 250 210 C 270 200, 290 205, 310 195"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
        />

        {/* Dimension + scale markers */}
        <motion.line
          x1="40"
          y1="250"
          x2="200"
          y2="250"
          stroke="url(#planStroke)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.1 }}
        />
        <motion.line x1="40" y1="246" x2="40" y2="254" stroke="#d97706" strokeWidth="1" />
        <motion.line x1="200" y1="246" x2="200" y2="254" stroke="#d97706" strokeWidth="1" />
        <text x="120" y="270" fontSize="10" fill="#b45309">
          Scale 1:500
        </text>
      </motion.svg>

      {/* Project management status panel */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.75 }}
        className={`absolute left-3 top-3 md:left-6 md:top-6 z-20 w-36 md:w-44 rounded-xl bg-linear-to-br ${theme.cardBg} border p-3`}
        style={{ borderColor: theme.cardBorder }}
      >
        <div className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-stone-700">
          Project Controls
        </div>
        <div className="mt-2 flex items-center justify-between text-[11px] md:text-xs text-stone-700">
          <span>Progress</span>
          <span className="font-semibold text-stone-800">62%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/60">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "62%" } : {}}
            transition={{ duration: 1.2, delay: 0.9, ease: "easeOut" }}
            className="h-full rounded-full bg-amber-500/70"
          />
        </div>
        <div className="mt-2 text-[10px] md:text-[11px] text-stone-600">Next gate: DD Review</div>
      </motion.div>

      {/* Plan callouts */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 md:left-auto md:translate-x-0 md:right-6 md:bottom-6 flex flex-row md:flex-col gap-2 md:gap-3 z-20">
        {[
          { t: "Concept Design", s: "Massing + Program" },
          { t: "Elevation Planning", s: "Facade Rhythm" },
          { t: "Urban Design", s: "Public Realm" },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 + i * 0.12 }}
            whileHover={{ y: -6, scale: 1.03 }}
            className={`w-24 md:w-36 p-2 md:p-3 rounded-xl bg-linear-to-br ${theme.cardBg} border`}
            style={{ borderColor: theme.cardBorder }}
          >
            <div className="text-[11px] md:text-sm font-semibold text-stone-800 leading-tight">{c.t}</div>
            <div className="text-[10px] md:text-xs text-stone-600 mt-1 leading-tight">{c.s}</div>
          </motion.div>
        ))}
      </div>

      {/* Cinematic parallax glow */}
      <motion.div
        animate={{
          scale: [0.98, 1.08, 0.98],
          opacity: [0.18, 0.32, 0.18],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 6, 0.22) 0%, transparent 70%)",
          filter: "blur(45px)",
        }}
      />
    </div>
  );
};
