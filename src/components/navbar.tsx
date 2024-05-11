import { Divide } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import { ReactNode } from "react";
import Link from "next/link";

const Navbar = () => {
  const user = undefined;
  return (
    <nav className="top-0 z-[100] sticky inset-x-0 border-gray-200 bg-white/70 backdrop-blur-lg border-b w-full h-14 transition-all navbar">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center border-zinc-200 border-b h-14">
          <Link href="" className="z-40 flex font-semibold">
            biye <span className="text-green-600">saadi</span>
          </Link>
          <div className="flex items-center space-x-4 h-full">
            {user ? <></> : <></>}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
