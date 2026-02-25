import { motion } from "framer-motion";
import { Star, MapPin, Building2 } from "lucide-react";

interface ReviewCardProps {
  clientName: string;
  projectName: string;
  place: string;
  review: string;
  stars: number;
  index: number;
}

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-[28px] border border-amber-100/70 bg-linear-to-br from-amber-50/80 via-white/90 to-white/70 p-8 shadow-[0_22px_60px_-30px_rgba(120,53,15,0.45)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(120,53,15,0.55)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-amber-500 via-yellow-400 to-amber-600" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-linear-to-br from-amber-300/20 to-amber-600/5 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -left-10 -bottom-12 h-40 w-40 rounded-full bg-linear-to-tr from-amber-200/20 to-transparent blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < stars
                  ? "fill-amber-500 text-amber-500"
                  : "fill-amber-100 text-amber-100"
              } transition-all duration-300`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
          <span className="text-base">{stars}.0</span>
          <span className="text-amber-400">/</span>
          <span className="text-xs text-amber-500">5</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="relative text-balance text-base leading-relaxed text-slate-700 md:text-lg">
          <span className="absolute -left-2 -top-4 text-6xl font-serif text-amber-400/30">
            "
          </span>
          <span className="relative z-10 italic">{review}</span>
          <span className="text-5xl font-serif text-amber-400/30">"</span>
        </p>
      </div>

      <div className="space-y-4 border-t border-amber-100/70 pt-6">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-amber-400 to-amber-600 text-lg font-bold text-white shadow-md">
            {clientName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">{clientName}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-amber-700">
              Project Owner
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-amber-700">
            <Building2 size={14} className="text-amber-600" />
            {projectName}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-600">
            <MapPin size={14} className="text-amber-600" />
            {place}
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-amber-400/0 transition-all duration-500 group-hover:border-amber-400/20" />
    </motion.div>
  );
};

export default ReviewCard;
