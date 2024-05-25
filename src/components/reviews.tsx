"use client";

import { HTMLAttributes, useEffect, useRef, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import Couple from "./couple";
import { Icons } from "./icons";
import { Search, SearchIcon } from "lucide-react";

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

const COUPLES = [
  "/testimonials/1.jpg",
  "/testimonials/2.jpg",
  "/testimonials/3.jpg",
  "/testimonials/4.jpg",
  "/testimonials/5.jpg",
  "/testimonials/6.jpg",
  "/testimonials/7.jpg",
  "/testimonials/8.jpg",
  "/testimonials/9.jpg",
  "/testimonials/10.jpg",
];

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: string[];
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((imgSrc, reviewIndex) => (
        <Review
          key={reviewIndex}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

interface ReviewProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}

function Review({ imgSrc, className, ...props }: ReviewProps) {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Couple imgSrc={imgSrc} />
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(COUPLES, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative items-start gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-4 mt-8 sm:mt-12 px-4 h-[49rem] max-h-[150vh] overflow-hidden"
    >
      {isInView ? (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              cn({
                "md:hidden": reviewIndex >= column1.length + column3[0].length,
                "lg:hidden": reviewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="md:block hidden"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="md:block hidden"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="top-0 absolute inset-x-0 bg-gradient-to-b from-slate-100 h-32 pointer-events-none" />
      <div className="bottom-0 absolute inset-x-0 bg-gradient-to-t from-slate-100 h-32 pointer-events-none" />
    </div>
  );
}

export function Reviews() {
  return (
    <MaxWidthWrapper className="relative max-w-5xl">
      <img
        aria-hidden="true"
        src="/what-people-are-buying.png"
        className="xl:block top-1/4 -left-72 absolute hidden select-none"
      />
      <div className="flex lg:flex-row flex-col items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
        <h2 className="order-1 mt-2 font-bold text-5xl text-balance text-center text-gray-900 md:text-6xl !leading-tight tracking-tight">
          <span className="bg-green-600 px-2 text-white">Singles</span> who are
          looking for{" "}
          <span className="relative px-2 text-purple-600">
            partners{" "}
            <Icons.underline className="sm:block -bottom-6 absolute inset-x-0 hidden text-blue-600 pointer-events-none" />
          </span>
        </h2>
        <Search className="order-0 lg:order-2 w-20 h-20 text-purple-700" />
      </div>
      <ReviewGrid />
    </MaxWidthWrapper>
  );
}
