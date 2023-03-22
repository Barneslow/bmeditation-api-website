import { FC } from "react";
import "simplebar-react/dist/simplebar.min.css";

import type { Metadata } from "next";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata: Metadata = {
  title: "BMeditation API | Documentation",
  description: "How to use the BMeditation API",
};

const page: FC = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-sky-900 text-center text-3xl md:text-5xl lg:text-left font-extrabold leading-tight tracking-tighter dark:text-amber-300">
          Make A Request
        </h1>
        <p className="text-sky-900 text-s md:text-lg dark:text-white">
          api/v1/bmeditation
        </p>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
