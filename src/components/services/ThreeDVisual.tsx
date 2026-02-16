import { motion } from "framer-motion";
import type { ServiceTheme } from "./serviceVisual.types";

type Props = {
  isInView: boolean;
  theme: ServiceTheme;
};

export const ThreeDVisual = ({ isInView, theme }: Props) => {
  return (
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
  );
};
