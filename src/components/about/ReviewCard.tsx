// import { motion } from "framer-motion";
// import { Star } from "lucide-react";

// interface ReviewCardProps {
//   name: string;
//   role: string;
//   review: string;
//   rating: number;
//   index: number;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, review, rating, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="bg-white/40 backdrop-blur-md border border-white/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
//     >
//       {/* Rating Stars */}
//       <div className="flex gap-1 mb-4">
//         {[...Array(rating)].map((_, i) => (
//           <Star
//             key={i}
//             size={18}
//             className="fill-amber-500 text-amber-500"
//           />
//         ))}
//       </div>

//       {/* Review Text */}
//       <p className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
//         "{review}"
//       </p>

//       {/* Author Info */}
//       <div className="flex items-center gap-3">
//         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold">
//           {name.charAt(0)}
//         </div>
//         <div>
//           <p className="font-semibold text-gray-900">{name}</p>
//           <p className="text-gray-600 text-xs md:text-sm">{role}</p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ReviewCard;
