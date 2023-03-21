import Image from "next/image";
import Link from "next/link";
import LargeHeading from "../components/ui/LargeHeading";
import Paragraph from "../components/ui/Paragraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMeditation API | Home",
  description: "Find all the quotes of BMeditation",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
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
              With the Text Similarity API, you can easily determine the
              similarity between two pieces of text with a free{" "}
              <Link
                href="/login"
                className="underline underline-offset-2 text-black font-bold dark:text-amber-300"
              >
                API key
              </Link>
            </Paragraph>
          </div>

          <div className="relative w-full max-w-l lg:max-w-3xl aspect-square  ">
            <Image
              priority
              className="img-shadow rounded-lg"
              quality={100}
              style={{ objectFit: "contain" }}
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
