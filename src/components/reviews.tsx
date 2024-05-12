"use client";

import { useRef } from "react";
import MaxWidthWrapper from "./max-width-wrapper";

export const ReviewGrid = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className="relative items-start gap-8 grid grid-cols-1 grid-cols-3 md:grid-cols-2 -mx-4 mt-16 sm:mt-20 px-4 h-[49rem] max-h-[150vh] overflow-hidden lg:"
    ></div>
  );
};

export const Reviews = () => {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="what-people-are-buying.png"
        className="xl:block top-1/3 -left-32 hidden select-none aboslute"
      />
      <ReviewGrid />
    </MaxWidthWrapper>
  );
};
