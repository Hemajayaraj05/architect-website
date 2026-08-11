import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface FounderCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  index?: number;
}

/**
 * Same visual system as the updated ReviewCard: ink / paper / brass,
 * a single corner registration mark, a dimension-line divider.
 * Portrait image is duotone at rest and resolves to full color on
 * hover — a quieter, more deliberate interaction than a constant
 * bob, and one that reads as "meet the person" rather than "widget".
 */
const FounderCard: React.FC<FounderCardProps> = ({
  image,
  name,
  role,
  quote,
  index = 0,
}) => {
  return (
    <motion.div
       initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-[280px] sm:w-[300px]"
    >
      {/* portrait */}
      <div className="relative mb-6 overflow-hidden border border-[#E3DDD1] bg-[#E3DDD1]">
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover  contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        </div>
        {/* corner registration mark, extends on hover — matches ReviewCard */}
        <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#B08D57] transition-all duration-500 group-hover:h-6 group-hover:w-6" />
      </div>

      {/* quote */}
      <div className="relative mb-6 min-h-[84px] px-1">
        <Quote
          size={40}
          strokeWidth={1}
          className="absolute -top-2 left-0 -z-10 text-[#35506B]/[0.10] rotate-180"
        />
        <p className="font-serif text-[16px] italic leading-[1.55] text-[#1C1B19]">
          "{quote}"
        </p>
      </div>

      {/* dimension-line divider, matches ReviewCard */}
      <div className="mb-4 flex items-center gap-2 px-1 text-[#B08D57]">
        <span className="h-1.5 w-px bg-current" />
        <span className="h-px flex-1 bg-current opacity-40" />
        <span className="h-1.5 w-px bg-current" />
      </div>

      {/* identity */}
      <div className="px-1">
        <h5 className="text-[15px] font-semibold text-[#1C1B19]">{name}</h5>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-[#8A8477]">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default FounderCard;