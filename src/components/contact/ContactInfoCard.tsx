import { motion } from "framer-motion";
import { fadeUp } from "../../assets/animations/contact.animations";
import type{ IconType } from "react-icons";

interface ContactInfoCardProps {
  title: string;
  text: string;
  icon?: IconType;
  index: number;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  title,
  text,
  icon: Icon,
  index,
}) => {
  return (
    <motion.div
      {...fadeUp}
      transition={{ ...fadeUp.transition, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 text-center shadow-xl"
    >
      <h3 className="flex items-center justify-center gap-2 text-lg font-semibold text-amber-800 mb-2">
        {Icon && <Icon className="text-xl text-amber-700" />}
        <span>{title}</span>
      </h3>

      <p className="text-gray-700 whitespace-pre-line text-sm">{text}</p>
    </motion.div>
  );
};

export default ContactInfoCard;
