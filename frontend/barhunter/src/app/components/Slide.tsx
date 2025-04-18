"use client";

import React, { useEffect, useRef, useState } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

interface SlideProps {
  children: React.ReactNode;
}

export const Slide: React.FC<SlideProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const newScroll =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  const checkScrollPosition = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  useEffect(() => {
    checkScrollPosition();
    const handleResize = () => {
      checkScrollPosition();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Contenedor deslizable */}
      <div
        ref={containerRef}
        onScroll={checkScrollPosition}
        className="flex overflow-x-auto scroll-smooth space-x-4 py-4 px-2 md:px-0 scrollbar-hide "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {React.Children.map(children, (child, idx) => (
          <div key={idx} className="flex-shrink-0 w-64">
            {child}
          </div>
        ))}
      </div>

      {/* Botones para pantallas grandes */}
      <div className="flex gap-4 flex-row-reverse">
        <div
          onClick={() => scroll("right")}
          className={`flex flex-col items-center rounded-full ${
            canScrollRight
              ? "cursor-pointer hover:text-customcolors-brightblue hover:bg-customcolors-brightblue/10"
              : "cursor-not-allowed text-gray-400"
          }`}
        >
          <CiCircleChevRight className="w-9 h-9" />
        </div>
        <div
          onClick={() => scroll("left")}
          className={`flex flex-col items-center rounded-full ${
            canScrollLeft
              ? "cursor-pointer hover:text-customcolors-brightblue hover:bg-customcolors-brightblue/10"
              : "cursor-not-allowed text-gray-400"
          }`}
        >
          <CiCircleChevLeft className="w-9 h-9" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
