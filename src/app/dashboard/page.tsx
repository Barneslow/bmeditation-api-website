import RequestApiKey from "@/components/RequestApiKey";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/pages/api/auth/db";
import { getServerSession } from "next-auth";

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ApiDashboard from "@/components/ApiDashboard";

export const metadata: Metadata = {
  title: "Similarity API | Dashboard",
  description: "Free & open-source text similarity API",
};

const page = async () => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  });

  return (
    <div className="max-w-7xl mx-auto mt-16">
      {apiKey ? (
        <div className="flex flex-col space-y-">
          <RequestApiKey />
          {/* @ts-expect-error Server Component */}
          <ApiDashboard />
        </div>
      ) : (
      )}
    </div>
  );
};

export default page;
