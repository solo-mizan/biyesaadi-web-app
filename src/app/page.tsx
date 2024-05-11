import MaxWidthWrapper from "@/components/max-width-wrapper";
import { StarFilledIcon } from "@radix-ui/react-icons";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="lg:gap-x-0 xl:gap-x-8 lg:grid lg:grid-cols-3 pt-10 lg:pt-24 xl:pt-32 pb-24 sm:pb-32 lg:pb-52">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative flex flex-col items-center lg:items-start mx-auto text-center lg:text-left">
              <div className="lg:block -top-20 left-0 absolute hidden w-28">
                <img src="/snake-1.png" alt="logo"/>
              </div>
              <h1
                className="relative mt-16 w-fit font-bold text-5xl text-balance text-gray-900 md:text-6xl lg:text-7xl !leading-tight tracking-tight"
              >Find your <span
                  className="bg-green-600 px-2 text-white"
                >soulmate </span>
                within our trusted network
              </h1>
              <p className="mt-8 lg:pr-10 max-w-prose text-balance text-center text-lg md:text-wrap lg:text-left">Don&apos;t settle for just anyone. Find someone who truly understand and cherishes you. Let <span className="bg-slate-500 bg-slate-700 px-1 font-semibold text-white">Duo</span> guide you on your journey to love.</p>
              <ul className="flex flex-col items-center sm:items-start space-y-2 mt-8 font-medium text-left">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    Free to join and create a profile
                  </li>          
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    Advanced search filters to find compatible matches.
                  </li>          
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    Detailed profiles to showcase your personality and interests
                  </li>          
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    Verified profiles for added peace of mind
                  </li>          
                  <li className="flex items-center gap-1.5 text-left">
                    <Check className="w-5 h-5 text-green-600 shrink-0" />
                    Positive and inclusive environment for all singles
                  </li>          
                </div>
              </ul>
              <div className="flex sm:flex-row flex-col items-center sm:items-start gap-5 mt-12">
                <div className="flex -space-x-3">
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-4.jpg"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 object-cover ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 text-green-600 fill-green-500"/>
                    <Star className="w-4 h-4 text-green-600 fill-green-500"/>
                    <Star className="w-4 h-4 text-green-600 fill-green-500"/>
                    <Star className="w-4 h-4 text-green-600 fill-green-500"/>
                    <Star className="w-4 h-4 text-green-600 fill-green-500"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
