import React, { useRef, useState, useEffect } from "react";


export type ProjectImage = {
  id: number;
  secure_url: string;
  public_id: string;
};

type ProjectCardProps = {
  title: string;
  location: string;
  images: ProjectImage[];
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, location, images }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

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

  useEffect(() => {
    if (activeImageIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }
      if (event.key === "ArrowLeft") {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === 0 ? images.length - 1 : prev - 1;
        });
      }
      if (event.key === "ArrowRight") {
        setActiveImageIndex((prev) => {
          if (prev === null) return prev;
          return prev === images.length - 1 ? 0 : prev + 1;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeImageIndex, images.length]);

  const goToPreviousImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const goToNextImage = () => {
    setActiveImageIndex((prev) => {
      if (prev === null) return prev;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    const swipeThreshold = 40;

    if (Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) {
        goToPreviousImage();
      } else {
        goToNextImage();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className="bg-gray-100 rounded-xl overflow-hidden relative">
      <div className="relative w-full h-72 md:h-80 lg:h-96 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex w-full h-full overflow-x-auto scroll-smooth"
        >
          {images.map((img, index) => (
            <img
              key={img.id}
              src={img.secure_url} 
              alt={`${title}-${img.id}`}
              className="shrink-0 w-full h-full object-cover cursor-zoom-in"
              onClick={() => setActiveImageIndex(index)}
            />
          ))}
        </div>

        <button
          onClick={scrollLeftHandler}
          disabled={!canScrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2
            w-12 h-12 flex items-center justify-center
            text-3xl font-bold rounded-full transition
            ${canScrollLeft ? "bg-wood/70 text-white hover:bg-wood" : "text-gray-500 cursor-not-allowed"}`}
        >
          &lt;
        </button>

        <button
          onClick={scrollRightHandler}
          disabled={!canScrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2
            w-12 h-12 flex items-center justify-center
            text-3xl font-bold rounded-full transition
            ${canScrollRight ? "bg-wood/70 text-white hover:bg-wood" : "text-gray-500 cursor-not-allowed"}`}
        >
          &gt;
        </button>
      </div>

      <div className="p-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-wood">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm md:text-base">{location}</p>
      </div>

      {activeImageIndex !== null && images[activeImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setActiveImageIndex(null)}
        >
          <button
            onClick={(event) => {
              event.stopPropagation();
              setActiveImageIndex(null);
            }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 text-white text-2xl leading-none"
            aria-label="Close image preview"
          >
            x
          </button>

          <button
            onClick={(event) => {
              event.stopPropagation();
              goToPreviousImage();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-3xl"
            aria-label="Previous image"
          >
            &lt;
          </button>

          <div
            className="w-full max-w-6xl max-h-[85vh]"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[activeImageIndex].secure_url}
              alt={`${title}-${images[activeImageIndex].id}`}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={(event) => {
              event.stopPropagation();
              goToNextImage();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 text-white text-3xl"
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
