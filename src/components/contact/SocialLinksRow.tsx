import { motion } from "framer-motion";
import { fadeUp } from "../../assets/animations/contact.animations";
import type{ IconType } from "react-icons";

interface SocialLink {
  icon: IconType;
  color: string;
  link: string;
}

interface SocialLinksRowProps {
  links: SocialLink[];
}

const SocialLinksRow: React.FC<SocialLinksRowProps> = ({ links }) => {
  return (
    <motion.div {...fadeUp} className="flex justify-center gap-4 mb-12">
      {links.map(({ icon: Icon, color, link }, idx) => (
        <a
          key={idx}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:scale-110 transition-transform"
          style={{ color }}
        >
          <Icon />
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinksRow;
