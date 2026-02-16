import { motion } from "framer-motion";
import type { ServiceTheme } from "./serviceVisual.types";

type Props = {
  isInView: boolean;
  theme: ServiceTheme;
};

export const ManagementVisual = ({ isInView, theme }: Props) => {
  return (
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
  );
};
