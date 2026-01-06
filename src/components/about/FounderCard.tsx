import { motion } from "framer-motion";

interface FounderCardProps {
  image: string;
  name: string;
  role: string;
  duration?: number;
}

const FounderCard: React.FC<FounderCardProps> = ({
  image,
  name,
  role,
  duration = 4,
}) => {
  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="flex flex-col items-center"
    >
      <div className="w-36 h-36 rounded-full overflow-hidden shadow-xl mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <h5 className="font-medium text-gray-900">{name}</h5>
      <p className="text-sm text-gray-600">{role}</p>
    </motion.div>
  );
};

export default FounderCard;
