import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";
import PlayStoreButton from "@/components/ui/PlayStoreButton";

export const metadata: Metadata = {
  title: "BMeditation API | Home",
  description: "Find all the quotes of BMeditation",
};

export default function Home() {
  return (
    <div className="relative h-full flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32  w-full mx-auto h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start lg:flex-row">
          <div className="gap-8 flex flex-col  sm:items-center lg:items-start">
            <h1 className="three-d main-heading">
              Discover the wisdom of the ages
            </h1>
            <h2 className="three-d main-heading">BMeditation API</h2>

            <p className="max-w-xl text-black dark:text-white">
              Use the BMeditation Quotes API to find reflective thought from
              histories greatest minds. Welcome to use in your own projects!
              Sign up with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black font-bold dark:text-amber-300"
              >
                API key
              </Link>
            </p>

            <div className="flex flex-col gap-0">
              <p className="max-w-xl text-black dark:text-white">
                Unleash your creativity and calm your mind with our journalling
                and meditation app. Write freely, reflect deeply, and find peace
                with our expertly crafted meditations. Get it at the store now!
              </p>
              <PlayStoreButton />
            </div>
          </div>

          <div className="relative flex justify-center w-full max-w-l max-w-3xl aspect-square overflow-hidden">
            <Image
              priority
              className="rounded-2xl"
              quality={100}
              style={{ objectFit: "cover" }}
              fill
              src="/images/bmeditation.png"
              alt="A beautiful tree"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
