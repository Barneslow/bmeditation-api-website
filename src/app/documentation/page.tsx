import { FC } from "react";
import "simplebar-react/dist/simplebar.min.css";

import type { Metadata } from "next";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import DocumentationTabs from "@/components/DocumentationTabs";

export const metadata: Metadata = {
  title: "BMeditation API | Documentation",
  description: "How to use the BMeditation API",
};

const page: FC = () => {
  return (
    <div className="container max-w-7xl mx-auto mt-12">
      <div className="flex flex-col items-center gap-6">
        <LargeHeading>Making a request</LargeHeading>
        <Paragraph>api/v1/bmeditation</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
