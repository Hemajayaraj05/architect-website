import { motion } from "framer-motion";
import { fadeUp } from "../../assets/animations/contact.animations";
import type { IconType } from "react-icons";

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
      className=" bg-white/30 rounded-2xl px-6 py-4 text-center
                 border border-white/80
                 hover:translate-y-0.5 transition-all duration-300"
    >
      {Icon && (
        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-white/60">
          <Icon className="text-xl text-amber-700" />
        </div>
      )}

      <h3 className="text-base font-medium tracking-wide text-amber-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </motion.div>
  );
};

export default ContactInfoCard;
