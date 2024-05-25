import { Search, UserCog } from "lucide-react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { buttonVariants, Button } from "./ui/button";
import { auth, currentUser } from "@clerk/nextjs/server";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/lib/dark-mode-toggle";

const Navbar = async () => {
  const user = await currentUser();
  const { userId } = auth();
  const isAdmin = false;
  return (
    <nav className="top-0 z-[100] sticky inset-x-0 border-gray-200 bg-white/70 backdrop-blur-lg border-b w-full h-14 transition-all navbar">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center border-zinc-200 border-b h-14">
          <Link href="/" className="z-40 flex font-semibold">
            biye <span className="text-green-600">saadi</span>
          </Link>
          <div className="flex items-center space-x-4 h-full">
            {/* <ModeToggle /> */}
            {user ? (
              <>
                <UserButton />
                {isAdmin ? (
                  <Link
                    href="/api/auth/dashboard"
                    className={buttonVariants({
                      size: "sm",
                      variant: "ghost",
                    })}
                  >
                    Dashboard
                  </Link>
                ) : null}
                <Link
                  href="/profile/update"
                  className={buttonVariants({
                    size: "sm",
                    className: "items-center gap-1",
                  })}
                >
                  {user.firstName + " profile"}
                  <UserCog className="ml-1.5 w-5 h-5" />
                </Link>
                <Link
                  href="/api/auth/search"
                  className={buttonVariants({
                    size: "sm",
                    className: "hidden sm:flex items-center gap-1",
                  })}
                >
                  Find soulmate
                  <Search className="ml-1.5 w-5 h-5" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/sign-up"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Sign up
                </Link>
                <div className="sm:block hidden bg-zinc-200 w-px h-8" />
                <Link
                  href="/sign-in"
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
