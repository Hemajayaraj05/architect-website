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
      className="group relative overflow-hidden rounded-[28px] border border-white/40 bg-white/60 p-8 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_0_rgba(31,38,135,0.25)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-slate-300 via-slate-400 to-slate-300" />
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-slate-200/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />
      <div className="absolute -left-10 -bottom-12 h-40 w-40 rounded-full bg-slate-100/30 blur-3xl transition-transform duration-700 group-hover:scale-125" />

      <div className="mb-7 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < stars
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-slate-200 text-slate-200"
              } transition-all duration-300`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-white/80 border border-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
          <span className="text-base">{stars}.0</span>
          <span className="text-slate-400">/</span>
          <span className="text-xs text-slate-500">5</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="relative text-balance text-base leading-relaxed text-slate-700 md:text-lg">
          <span className="absolute -left-2 -top-4 text-6xl font-serif text-slate-300/40">
            "
          </span>
          <span className="relative z-10 italic">{review}</span>
          <span className="inline-block text-2xl font-serif text-slate-300/40 align-text-top leading-none ml-1">"</span>
        </p>
      </div>

      <div className="space-y-4 border-t border-slate-200/70 pt-6">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-linear-to-br from-slate-600 to-slate-700 text-lg font-bold text-white shadow-md">
            {clientName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">{clientName}</p>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-600">
              Project Owner
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700">
            <Building2 size={14} className="text-slate-500" />
            {projectName}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-600">
            <MapPin size={14} className="text-slate-500" />
            {place}
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] border-2 border-slate-300/0 transition-all duration-500 group-hover:border-slate-300/30" />
    </motion.div>
  );
};

export default ReviewCard;
