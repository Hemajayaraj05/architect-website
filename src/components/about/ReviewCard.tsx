import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
  clientName: string;
  role?: string;
  review: string;
  stars: number;
  index: number;
  avatarUrl?: string;
  /** Rotation + vertical overlap only make sense once cards are stacked —
   * pass `stacked` when rendering inside the ReviewsSection wrapper. */
  stacked?: boolean;
}

const tintPalette = [
  "bg-amber-100/70 border-amber-200/60",
  "bg-white border-stone-200/70",
];

/**
 * Add once to your global CSS / tailwind.config for the script accent used
 * in the section header (falls back to a system cursive if skipped):
 *   Script: "Caveat", cursive
 *   Body/UI: keep your existing sans stack
 */
const ReviewCard: React.FC<ReviewCardProps> = ({
  clientName,
  role = "Client",
  review,
  stars,
  index,
  avatarUrl,
  stacked = false,
}) => {
  const tint = tintPalette[index % tintPalette.length];
  const tilt = index % 2 === 0 ? "-rotate-1" : "rotate-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, scale: 1.02, zIndex: 30 }}
      style={stacked ? { marginTop: index === 0 ? 0 : -28 } : undefined}
      className={`relative flex flex-col rounded-[1.75rem] border px-7 py-7 md:px-9 md:py-8 shadow-[0_18px_40px_-20px_rgba(41,25,10,0.28)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-18px_rgba(41,25,10,0.35)] ${tint} ${tilt}`}
    >
      {/* top row: avatar + name/role on the left, star pill on the right */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="flex items-center gap-3.5">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={clientName}
              className="h-12 w-12 rounded-full object-cover border-2 border-white shadow-sm"
            />
          ) : (
            <div className="h-12 w-12 shrink-0 rounded-full grid place-items-center bg-amber-800 text-white font-semibold text-base border-2 border-white shadow-sm">
              {clientName.charAt(0).toUpperCase()}
            </div>
          )}
          <div>
            <p className="text-base font-semibold text-stone-900 leading-tight">
              {clientName}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">{role}</p>
          </div>
        </div>

        <div className="flex items-center gap-0.5 rounded-full bg-white px-3 py-1.5 shadow-sm shrink-0">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={13}
              strokeWidth={1.5}
              className={
                i < stars
                  ? "fill-amber-500 text-amber-500"
                  : "fill-transparent text-stone-300"
              }
            />
          ))}
        </div>
      </div>

      {/* review copy */}
      <p className="text-[15px] md:text-base leading-relaxed text-stone-700">
        {review}
      </p>
    </motion.div>
  );
};

export default ReviewCard;