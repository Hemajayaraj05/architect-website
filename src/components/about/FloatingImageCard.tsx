import { motion } from "framer-motion";

interface FloatingImageCardProps {
  image: string;
  index: number;
}

const FloatingImageCard: React.FC<FloatingImageCardProps> = ({
  image,
  index,
}) => {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration: 4 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="rounded-2xl overflow-hidden shadow-xl"
    >
      <img
        src={image}
        alt={`Studio ${index + 1}`}
        className="w-full h-full object-cover aspect-square"
      />
    </motion.div>
  );
};

export default FloatingImageCard;
