interface SectionHeadingProps {
  title: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <h4 className="text-center text-2xl font-medium text-amber-900 mb-16">
      {title}
    </h4>
  );
};

export default SectionHeading;
