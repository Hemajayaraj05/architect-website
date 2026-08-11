import { motion } from "framer-motion";
import { Star, MapPin, Building2, Quote } from "lucide-react";

interface ReviewCardProps {
  clientName: string;
  projectName: string;
  place: string;
  review: string;
  stars: number;
  index: number;
}

/**
 * Design language: "drafting sheet" — treats each testimonial like an
 * annotated page from an architect's set. Corner registration marks,
 * a dimension-line divider, and a brass accent replace the generic
 * frosted-glass card so it reads as considered rather than templated.
 *
 * Add these once to your global CSS / tailwind.config for the intended
 * type pairing (falls back gracefully to system serif/sans if skipped):
 *   Display/quote: "Fraunces", serif
 *   Body/UI:        "Inter", sans-serif
 */
const ReviewCard: React.FC<ReviewCardProps> = ({
  clientName,
  projectName,
  place,
  review,
  stars,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col bg-[#FAF8F4] border border-[#E3DDD1] p-8 md:p-9 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(28,27,25,0.25)]"
    >
      {/* corner registration marks — draw in on hover, like blueprint alignment marks */}
      {[
        "top-3 left-3 border-t border-l",
        "top-3 right-3 border-t border-r",
        "bottom-3 left-3 border-b border-l",
        "bottom-3 right-3 border-b border-r",
      ].map((pos, i) => (
        <span
          key={i}
          className={`pointer-events-none absolute ${pos} h-3 w-3 border-[#B08D57] transition-all duration-500 group-hover:h-5 group-hover:w-5`}
        />
      ))}

      {/* top accent — expands from center on hover, like a dimension line extending */}
      <span className="absolute left-1/2 top-0 h-[2px] w-10 -translate-x-1/2 bg-[#B08D57] transition-all duration-500 group-hover:w-24" />

      {/* large decorative quote mark, architectural rather than cute */}
      <Quote
        size={56}
        strokeWidth={1}
        className="absolute right-7 top-7 text-[#35506B]/[0.08] rotate-180"
      />

      {/* rating row */}
      <div className="relative mb-8 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              strokeWidth={1.5}
              className={
                i < stars
                  ? "fill-[#B08D57] text-[#B08D57]"
                  : "fill-transparent text-[#D8D2C4]"
              }
            />
          ))}
        </div>
        <span className="font-mono text-[11px] tracking-[0.15em] text-[#8A8477]">
          {String(index + 1).padStart(2, "0")} / RATED {stars}.0
        </span>
      </div>

      {/* review copy */}
      <div className="relative mb-10 grow">
        <p className="font-serif text-[19px] md:text-[21px] leading-[1.55] text-[#1C1B19]">
          {review}
        </p>
      </div>

      {/* dimension-line divider */}
      <div className="mb-6 flex items-center gap-2 text-[#B08D57]">
        <span className="h-1.5 w-px bg-current" />
        <span className="h-px flex-1 bg-current opacity-40" />
        <span className="h-1.5 w-px bg-current" />
      </div>

      {/* client + meta */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="grid h-11 w-11 shrink-0 place-items-center bg-[#1C1B19] text-sm font-semibold text-[#F5F1EB]">
            {clientName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-[15px] font-semibold text-[#1C1B19]">{clientName}</p>
            <p className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-[#8A8477]">
              Client
            </p>
          </div>
        </div>

        <div className="text-right">
          <p className="flex items-center justify-end gap-1.5 text-[13px] font-medium text-[#1C1B19]">
            <Building2 size={13} className="text-[#B08D57]" />
            {projectName}
          </p>
          <p className="mt-1 flex items-center justify-end gap-1.5 text-[12px] text-[#8A8477]">
            <MapPin size={12} className="text-[#B08D57]" />
            {place}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;