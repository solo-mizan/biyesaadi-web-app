import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Reviews } from "@/components/reviews";
import { buttonVariants } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRight, Check, Cross, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await currentUser();

  return (
    <div className="bg-slate-50">
      <section className="grainy-light">
        <MaxWidthWrapper className="lg:gap-x-0 xl:gap-x-8 lg:grid lg:grid-cols-3 pt-5 lg:pt-8 xl:pt-10 pb-10 sm:pb-14 lg:pb-20">
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="relative flex flex-col items-center lg:items-start mx-auto text-center lg:text-left">
              {/* <div className="lg:block -top-20 left-0 absolute hidden w-28">
                <Image
                  src="/logo.png"
                  alt="logo"
                  className=""
                  height={40}
                  width={70}
                />
              </div> */}
              <h1 className="relative mt-2 w-fit font-bold text-3xl text-balance text-gray-900 md:text-5xl lg:text-6xl !leading-tight tracking-tight">
                Find your&nbsp;
                <span className="bg-green-600 px-2 text-white">soulmate</span>
                &nbsp;within our trusted network
              </h1>
              <p className="mt-8 lg:pr-10 max-w-prose text-balance text-center text-lg md:text-wrap lg:text-left">
                Don&apos;t settle for just anyone. Find someone who truly
                understand and cherishes you. Let{" "}
                <span className="bg-slate-700 px-1 font-semibold text-white">
                  biye<span className="text-green-400">saadi</span>
                </span>{" "}
                guide you on your journey to love.
              </p>
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
                <div className="flex -space-x-2">
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-5.jpg"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-2.jpg"
                    alt="user image"
                  />
                  <Image
                    width={100}
                    height={100}
                    className="inline-block rounded-full w-10 h-10 ring-2 ring-slate-100"
                    src="/users/user-3.jpg"
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
                    src="/users/user-1.jpg"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col justify-between items-center sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="w-4 h-4 text-green-600 fill-green-500" />
                    <Star className="w-4 h-4 text-green-600 fill-green-500" />
                    <Star className="w-4 h-4 text-green-600 fill-green-500" />
                    <Star className="w-4 h-4 text-green-600 fill-green-500" />
                    <Star className="w-4 h-4 text-green-600 fill-green-500" />
                  </div>
                  <p>
                    <span className="font-semibold">7,300+</span> happy couples
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center col-span-full lg:col-span-1 lg:mx-0 mt-32 lg:mt-20 px-8 sm:px-16 md:px-0 w-full h-fit">
            <div className="relative md:max-w-xl">
              <img
                src="/line.png"
                alt="line image"
                className="-bottom-6 -left-6 absolute w-20 select-none"
              />
              <Image
                className="rounded rounded-2xl lg:w-60 xl:w-72"
                src="/happy-couple.jpg"
                height={800}
                width={500}
                alt="happy couple image"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* value proposition section */}
      <section className="bg-slate-100 py-24 grainy-dark">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex lg:flex-row flex-col items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 font-bold text-5xl text-balance text-center text-gray-900 md:text-6xl !leading-tight tracking-tight">
              Hear from{" "}
              <span className="relative px-2 text-blue-600">
                couples{" "}
                <Icons.underline className="sm:block -bottom-6 absolute inset-x-0 hidden text-purple-600 pointer-events-none" />
              </span>
            </h2>
            <img src="/snake-2.png" className="order-0 lg:order-2 w-24" />
            <Cross className="order-0 lg:order-2 w-12 h-12 text-lime-700 fill-slate-50" />
            <img
              src="/snake-2.png"
              className="order-0 lg:order-2 w-24 transform -scale-x-100"
            />
          </div>

          <div className="gap-y-16 grid grid-cols-1 lg:grid-cols-2 mx-auto lg:mx-0 px-4 max-w-2xl lg:max-w-none">
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;As someone who&apos;s been out of the dating scene for a
                  while, I was nervous about getting back in.{" "}
                  <span className="bg-black bg-slate-700 px-1 font-semibold text-white">
                    biye<span className="text-green-400">saadi</span>
                  </span>{" "}
                  made everything so easy. The user interface is
                  straightforward, and there are plenty of singles in my age
                  range. I met a wonderful woman who shares my passions – we
                  couldn&apos;t be happier!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="tofazzol.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Tofazzol Haque</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="w-4 h-4 text-green-600 stroke-[3px]" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>

            {/* second user review */}
            <div className="flex flex-col flex-auto gap-4 lg:pr-8 xl:pr-20">
              <div className="flex gap-0.5 mb-2">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;I&apos;d tried other dating apps with no luck.{" "}
                  <span className="bg-black bg-slate-700 px-1 font-semibold text-white">
                    biye<span className="text-green-400">saadi</span>
                  </span>{" "}
                  felt different. The matching system is amazing – I met
                  incredible people I wouldn&apos;t have otherwise. It took some
                  time, but I finally found the love of my life. We&apos;re so
                  grateful for this app!&quot;
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img
                  className="rounded-full w-12 h-12 object-cover"
                  src="badol.jpg"
                  alt="user"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Badol Molla</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="w-4 h-4 text-green-600 stroke-[3px]" />
                    <p className="text-sm">Verified User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="pt-16">
          <Reviews />
        </div>
      </section>

      <section className="grainy-dark">
        <MaxWidthWrapper className="py-8 lg:py-10">
          <div className="mb-6 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 font-bold text-5xl text-balance text-center text-gray-900 md:text-6xl !leading-tight tracking-tight">
                Find your{" "}
                <span className="bg-green-600 px-2 text-white">love story</span>{" "}
                today -{" "}
                <span className="relative px-2 text-blue-600">
                  Sign up now!{" "}
                  <Icons.underline className="sm:block -bottom-6 absolute inset-x-0 hidden text-purple-600 pointer-events-none" />
                </span>
              </h2>
            </div>
          </div>

          <div className="mx-auto px-6 lg:px-8 max-w-6xl">
            <div className="relative flex flex-col items-center gap-40 md:grid grid-cols-2">
              <img
                src="/arrow.png"
                className="top-[25rem] md:top-1/2 left-1/2 z-10 absolute -translate-x-1/2 -translate-y-1/2 rotate-90 md:rotate-0"
              />

              <div className="relative md:justify-self-end bg-gray-900/5 rounded-xl lg:rounded-2xl w-full max-w-sm h-80 md:h-full ring-gray-900/10 ring-inset">
                <img
                  src="/seperate.png"
                  className="bg-white shadow-2xl rounded-md w-full h-full object-cover ring-1 ring-gray-900/10"
                  alt="seperate people pic"
                />
              </div>
              <Image
                src="/together.jpg"
                height={900}
                width={500}
                className="bg-white shadow-2xl rounded-md w-60 ring-1 ring-gray-900/10"
                alt="couple pic"
              />
            </div>
          </div>

          {/* <ul className="space-y-2 mx-auto mt-12 w-fit max-w-prose sm:text-lg">
            <li className="w-fit">
              <Check className="inline mr-1.5 w-5 h-5 text-green-600" />
              High-quality silicone material
            </li>
            <li className="w-fit">
              <Check className="inline mr-1.5 w-5 h-5 text-green-600" />
              Scratch- and fingerprint resistant coating
            </li>
            <li className="w-fit">
              <Check className="inline mr-1.5 w-5 h-5 text-green-600" />
              Wireless charging compatible
            </li>
            <li className="w-fit">
              <Check className="inline mr-1.5 w-5 h-5 text-green-600" />5 year
              print warranty
            </li> */}

          <div className="flex justify-center">
            {user ? (
              <>
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/partners/search"
                >
                  Search your parter now{" "}
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  className={buttonVariants({
                    size: "lg",
                    className: "mx-auto mt-8",
                  })}
                  href="/sign-up"
                >
                  Create your profile now{" "}
                  <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </>
            )}
          </div>
          {/* </ul> */}
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
