import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { serviceThemes } from "./serviceVisual.types";
import { ArchitectureVisual } from "./ArchitectureVisual";
import { InteriorVisual } from "./InteriorVisual";
import { ManagementVisual } from "./ManagementVisual";
import { ThreeDVisual } from "./ThreeDVisual";

type Props = {
  type: string;
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
     
        {type === "architecture" && <ArchitectureVisual isInView={isInView} theme={theme} />}

      {/* ===== Interior & Landscape ===== */}
      {type === "interior" && <InteriorVisual isInView={isInView} theme={theme} />}

      {/* ===== Project Management ===== */}
      {type === "management" && <ManagementVisual isInView={isInView} theme={theme} />}

      {/* ===== 3D Modeling & Rendering ===== */}
      {type === "3d" && <ThreeDVisual isInView={isInView} theme={theme} />}
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
