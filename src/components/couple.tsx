import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface CoupleProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Couple = ({ imgSrc, className, dark = false, ...props }: CoupleProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden rounded-xl",
        className
      )}
      {...props}
    >
      <div className="w-64 h-96" />
      <div className="-z-10 absolute inset-0">
        <Image
          height={700}
          width={500}
          className="min-w-full min-h-full object-cover"
          src={imgSrc}
          alt="overlaying people image"
        />
      </div>
    </div>
  );
};

export default Couple;
