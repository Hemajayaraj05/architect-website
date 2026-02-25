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
  index 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl border border-amber-100/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-400/10 to-amber-600/5 rounded-full blur-3xl -z-10 group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-300/10 to-transparent rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />

      {/* Rating Stars */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < stars 
                ? "fill-amber-500 text-amber-500" 
                : "fill-gray-200 text-gray-200"
            } transition-all duration-300`}
          />
        ))}
      </div>

      {/* Review Text */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed text-base md:text-lg italic relative">
          <span className="text-6xl text-amber-400/30 absolute -top-4 -left-2 font-serif">"</span>
          <span className="relative z-10">{review}</span>
          <span className="text-6xl text-amber-400/30 font-serif">"</span>
        </p>
      </div>

      {/* Client Info */}
      <div className="space-y-3 pt-6 border-t border-amber-100/50">
        {/* Client Name with Avatar */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            {clientName.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">{clientName}</p>
            <p className="text-gray-500 text-sm">Valued Client</p>
          </div>
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-2 ml-15 mt-3">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 size={16} className="text-amber-600" />
            <span className="text-sm font-medium">{projectName}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={16} className="text-amber-600" />
            <span className="text-sm">{place}</span>
          </div>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-amber-400/0 group-hover:border-amber-400/20 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ReviewCard;
