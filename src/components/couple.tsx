import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CoupleProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Couple = ({ imgSrc, className, dark = false, ...props }: CoupleProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark ? "/phone-template-dark-edges.png" : "/testimonials/couple-1.jpg"
        }
        className="z-50 border-2 border-green-600 border rounded-xl pointer-events-none select-none"
        alt="couple image"
      />
      <div className="-z-10 absolute inset-0">
        <img
          className="object-cover"
          src={imgSrc}
          alt="overlaying couple image"
        />
      </div>
    </div>
  );
};

export default Couple;
