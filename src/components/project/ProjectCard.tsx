import React, { useRef, useState, useEffect } from "react";

export type ProjectImage = {
  id: number;
  url: string;
  publicId: string;
};

type ProjectCardProps = {
  title: string;
  location: string;
  images: ProjectImage[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  images,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollLeftHandler = () => {
    if (!canScrollLeft || !scrollRef.current) return;
    scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    if (!canScrollRight || !scrollRef.current) return;
    scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateScrollButtons);
    return () => container.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden relative">
   
      <div className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden">
       <div
  ref={scrollRef}
  className="flex w-full h-full overflow-x-hidden scroll-smooth"
>
  {images.map((img) => (
    <img
      key={img.id}
      src={img.url}
      alt={`${title}-${img.id}`}
      className="shrink-0 w-full h-full object-cover"
    />
  ))}
</div>


        <button
          onClick={scrollLeftHandler}
          disabled={!canScrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2
            w-12 h-12 flex items-center justify-center
            text-3xl font-bold rounded-full transition
            ${canScrollLeft ? "bg-wood/70 text-white hover:bg-wood" : " text-gray-500 cursor-not-allowed"}`}
        >
          &lt;
        </button>

 
        <button
          onClick={scrollRightHandler}
          disabled={!canScrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2
            w-12 h-12 flex items-center justify-center
            text-3xl font-bold rounded-full transition
            ${canScrollRight ? "bg-wood/70 text-white hover:bg-wood" : " text-gray-500 cursor-not-allowed"}`}
        >
          &gt;
        </button>
      </div>

 
      <div className="p-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-wood">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm md:text-base">{location}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
