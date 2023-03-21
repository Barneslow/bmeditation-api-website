import Image from "next/image";
import Link from "next/link";
import LargeHeading from "../components/ui/LargeHeading";
import Paragraph from "../components/ui/Paragraph";

import type { Metadata } from "next";
import Button from "@/components/ui/Button";
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
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-amber-300"
            >
              Discover the wisdom of the ages
            </LargeHeading>
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-amber-300"
            >
              BMeditation API
            </LargeHeading>

            <Paragraph className="max-w-xl text-black dark:text-white">
              Use the BMeditation Quotes API to find reflective thought from
              histories greatest minds. Welcome to use in your own projects!
              Sign up with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black font-bold dark:text-amber-300"
              >
                API key
              </Link>
            </Paragraph>

            <div className="flex flex-col gap-0">
              <Paragraph className="max-w-xl text-black dark:text-white">
                Unleash your creativity and calm your mind with our journalling
                and meditation app. Write freely, reflect deeply, and find peace
                with our expertly crafted meditations. Get it at the store now!
              </Paragraph>
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
