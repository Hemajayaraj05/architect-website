import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type Props = {
  type: string;
};

// Per-service color moods and atmospheres - LIGHT & AIRY
const serviceThemes = {
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

const ServiceVisual = ({ type }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const theme = serviceThemes[type as keyof typeof serviceThemes] || serviceThemes.architecture;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientY - rect.top) / rect.height - 0.5;
    const y = (e.clientX - rect.left) / rect.width - 0.5;
    setRotateX(x * 8);
    setRotateY(y * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

 
  const containerVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 1.1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1200px",
      }}
      className="relative w-full h-96 rounded-2xl overflow-hidden"
    >
   
      <div className={`absolute inset-0 bg-linear-to-br ${theme.primaryGrad} opacity-95`} />
      <div className={`absolute inset-0 bg-linear-to-tl ${theme.atmosphere}`} />

    
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-40 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
        }}
      />

     
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)`,
        }}
      />

  
      <motion.div
        style={{
          rotateX: isInView ? rotateX : 0,
          rotateY: isInView ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
        className="absolute inset-4 rounded-2xl bg-white/8 backdrop-blur-lg border border-white/20 shadow-2xl overflow-hidden"
      >
       
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent rounded-2xl"
        />

     
        <motion.div
          animate={{
            opacity: [0, 0.1, 0],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.6 }}
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent"
        />
      </motion.div>

     
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')]" />

      
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_0.5px,transparent_0.5px),linear-gradient(to_bottom,white_0.5px,transparent_0.5px)] bg-[size-40px_40px]" />

     
      <div className="absolute inset-0 rounded-2xl border border-white/15" />
      <motion.div
        className="absolute inset-0 rounded-2xl border border-white/0"
        animate={{
          borderColor: ["rgba(255,255,255,0)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0)"],
        }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      
      <div className="absolute inset-0 flex items-center justify-center z-10">
     
        {type === "architecture" && (
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
              <text x="120" y="270" fontSize="10" fill="#b45309">Scale 1:500</text>
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
              <div className="mt-2 text-[10px] md:text-[11px] text-stone-600">
                Next gate: DD Review
              </div>
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
        )}

      {/* ===== Interior & Landscape ===== */}
      {type === "interior" && (
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
      )}

      {/* ===== Project Management ===== */}
      {type === "management" && (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={isInView ? { opacity: 1, y: [0, -5, 0], scale: 1 } : {}}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.8 },
            }}
            className="w-80 h-48 bg-linear-to-br from-white/70 to-white/40 backdrop-blur-xl rounded-2xl shadow-2xl p-7 relative z-10 border border-white/30"
            style={{ filter: "drop-shadow(0 30px 60px rgba(37, 99, 235, 0.2))" }}
          >
            {/* Header with glassmorphism badge */}
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: "80%" } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                className="h-1.5 bg-linear-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-full"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="px-3 py-1 bg-blue-100/80 backdrop-blur-sm rounded-full border border-blue-200/60 whitespace-nowrap"
              >
                <span className="text-xs font-semibold text-blue-700 tracking-wider">ACTIVE</span>
              </motion.div>
            </div>

            {/* Timeline lines animating left to right */}
            <div className="space-y-4">
              {[
                { label: "Q1", width: "75%", color: "from-blue-500 to-blue-600", delay: 0.7 },
                { label: "Q2", width: "90%", color: "from-indigo-500 to-indigo-600", delay: 0.9 },
                { label: "Q3", width: "60%", color: "from-purple-500 to-purple-600", delay: 1.1 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group/line">
                  <span className="text-xs font-semibold text-blue-900 w-8">{item.label}</span>
                  <div className="flex-1 h-2.5 bg-blue-50/60 rounded-full overflow-hidden relative border border-blue-200/40 backdrop-blur-sm">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={isInView ? { width: item.width } : {}}
                      transition={{ duration: 1.4, delay: item.delay, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full bg-linear-to-r ${item.color} rounded-full relative shadow-lg`}
                    >
                      {/* Subtle pulse on active task line */}
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white/60 rounded-full shadow-lg"
                      />
                    </motion.div>
                  </div>
                  {/* Percentage indicator */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: item.delay + 0.6 }}
                    className="text-xs font-semibold text-blue-700 w-8 text-right"
                  >
                    {item.width}
                  </motion.span>
                </div>
              ))}
            </div>

            {/* Animated divider appearing on scroll */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.9, delay: 1.5 }}
              className="absolute bottom-4 left-7 right-7 h-0.5 bg-linear-to-r from-transparent via-blue-300/50 to-transparent origin-left"
            />
          </motion.div>

          {/* Small cards cluster - management */}
          <div className="absolute right-8 top-12 flex flex-col gap-2 z-20">
            {[{ t: "Phase", s: "Design" }, { t: "Team", s: "6 Members" }].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.14 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className={`w-36 p-2 rounded-lg bg-linear-to-br ${theme.cardBg} border`}
                style={{ borderColor: theme.cardBorder }}
              >
                <div className="text-sm font-medium text-stone-800">{c.t}</div>
                <div className="text-xs text-stone-600">{c.s}</div>
              </motion.div>
            ))}
          </div>

          {/* Floating chart elements - BIGGER MOTION */}
          <motion.div
            animate={{
              y: [-50, -25, -50],
              scale: [0.8, 1.15, 0.8],
              rotate: [0, 8, 0],
            }}
            transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
            className="absolute top-20 left-12 w-16 h-16 border-2 border-blue-400/50 rounded-lg shadow-xl backdrop-blur-md bg-blue-50/20"
            style={{ filter: "drop-shadow(0 25px 50px rgba(37, 99, 235, 0.25))" }}
          />
          <motion.div
            animate={{ rotate: 360, scale: [0.85, 1.1, 0.85] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="absolute bottom-16 right-14 w-14 h-14 border-2 border-indigo-400/50 rounded-full backdrop-blur-md bg-indigo-50/20 shadow-xl"
            style={{ filter: "drop-shadow(0 20px 40px rgba(99, 102, 241, 0.25))" }}
          />

          {/* Pulsing accent dots */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
            className="absolute top-1/3 right-20 w-3 h-3 bg-blue-600 rounded-full shadow-xl"
            style={{ filter: "drop-shadow(0 0 15px rgba(37, 99, 235, 0.6))" }}
          />
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-1/3 left-20 w-2.5 h-2.5 bg-indigo-500 rounded-full shadow-lg"
            style={{ filter: "drop-shadow(0 0 12px rgba(99, 102, 241, 0.5))" }}
          />
        </div>
      )}

      {/* ===== 3D Modeling & Rendering ===== */}
      {type === "3d" && (
        <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1200px" }}>
          {/* Rotating wireframe cube with perspective - BIGGER SCALE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    scale: 1,
                    rotateX: 360,
                    rotateY: 360,
                  }
                : {}
            }
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              rotateX: { repeat: Infinity, duration: 14, ease: "linear", delay: 0.8 },
              rotateY: { repeat: Infinity, duration: 14, ease: "linear", delay: 0.8 },
            }}
            className="w-44 h-44 relative z-20"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Outer cube */}
            <div 
              className="absolute inset-0 border-2 rounded-2xl"
              style={{
                borderColor: "rgba(190, 24, 93, 0.8)",
                boxShadow: "0 0 60px rgba(190, 24, 93, 0.3), inset 0 0 40px rgba(190, 24, 93, 0.1)",
              }}
            />
            
            {/* Inner cube with pulsing animation */}
            <motion.div
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [0.92, 1.08, 0.92],
              }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute inset-4 border border-rose-400/60 rounded-xl"
              style={{
                boxShadow: "0 0 30px rgba(190, 24, 93, 0.2), inset 0 0 20px rgba(190, 24, 93, 0.1)",
              }}
            />

            {/* Cross lines for wireframe effect */}
            <svg className="absolute inset-0 w-full h-full">
              <motion.line
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                stroke="#be185d"
                strokeWidth="2"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.5 }}
              />
              <motion.line
                x1="100%"
                y1="0%"
                x2="0%"
                y2="100%"
                stroke="#be185d"
                strokeWidth="2"
                opacity="0.5"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.8, delay: 0.8 }}
              />
            </svg>

            {/* Corner accents with glow */}
            {[
              { top: "-6px", left: "-6px" },
              { top: "-6px", right: "-6px" },
              { bottom: "-6px", left: "-6px" },
              { bottom: "-6px", right: "-6px" },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + i * 0.12 }}
                className="absolute w-3 h-3 bg-rose-500 rounded-full"
                style={{
                  ...pos,
                  boxShadow: "0 0 20px rgba(190, 24, 93, 0.8), 0 0 40px rgba(190, 24, 93, 0.4)",
                }}
              />
            ))}
          </motion.div>

          {/* Small floating badges - 3D */}
          <div className="absolute left-8 top-8 flex flex-col gap-2 z-20">
            {[{ t: "Poly", s: "64k" }, { t: "Textures", s: "4" }].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -6 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.12 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`w-28 p-2 rounded-lg bg-linear-to-br ${theme.cardBg} border`}
                style={{ borderColor: theme.cardBorder }}
              >
                <div className="text-sm font-medium text-stone-800">{c.t}</div>
                <div className="text-xs text-stone-600">{c.s}</div>
              </motion.div>
            ))}
          </div>

          {/* Floating geometric elements - ENHANCED SCALE & GLOW */}
          <motion.div
            animate={{
              y: [50, 15, 50],
              x: [70, 95, 70],
              rotate: [0, 220, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute w-20 h-20 border-2 border-pink-400/60 rounded-3xl backdrop-blur-md bg-pink-50/15 shadow-2xl"
            style={{ 
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 30px 60px rgba(190, 24, 93, 0.3))",
            }}
          />
          <motion.div
            animate={{
              y: [-55, -20, -55],
              x: [-75, -100, -75],
              rotate: [360, 180, 0],
              scale: [0.75, 1.25, 0.75],
            }}
            transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.6 }}
            className="absolute w-18 h-18 border-2 border-rose-400/50 rounded-full backdrop-blur-md bg-rose-50/10 shadow-2xl"
            style={{ 
              transformStyle: "preserve-3d",
              filter: "drop-shadow(0 35px 70px rgba(190, 24, 93, 0.25))",
            }}
          />

          {/* Central pulsing gradient element - BIGGER & MORE GLOW */}
          <motion.div
            animate={{
              scale: [0.7, 1.3, 0.7],
              opacity: [0.15, 0.5, 0.15],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              scale: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              opacity: { repeat: Infinity, duration: 4, ease: "easeInOut" },
              rotate: { repeat: Infinity, duration: 12, ease: "linear" },
            }}
            className="absolute w-32 h-32 rounded-3xl shadow-2xl blur-lg"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(190, 24, 93, 0.4), rgba(244, 114, 182, 0.2), transparent)",
              filter: "drop-shadow(0 0 80px rgba(190, 24, 93, 0.25))",
            }}
          />

          {/* Orbiting particles with enhanced glow */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 7 + i * 2.5,
                ease: "linear",
              }}
              className="absolute w-40 h-40"
              style={{ transformOrigin: "center" }}
            >
              <div
                className="absolute w-2 h-2 bg-rose-500 rounded-full"
                style={{
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: "0 0 20px rgba(190, 24, 93, 0.8), 0 0 40px rgba(190, 24, 93, 0.4)",
                }}
              />
            </motion.div>
          ))}

          {/* Ambient glow aura */}
          <motion.div
            animate={{
              scale: [0.9, 1.2, 0.9],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(190, 24, 93, 0.25) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />
        </div>
      )}
      </div>

      {/* Bottom elegant divider line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-transparent via-white/30 to-transparent"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "70%" } : { width: "0%" }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ServiceVisual;
