import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { db } from "@/pages/api/auth/db";
import { formatDistance } from "date-fns";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import ApiKeyOptions from "./ApiKeyOptions";
import Table from "./ui/Table";

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions);
  if (!user) return notFound();

  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  });

  const activeApiKey = apiKeys.find((key) => key.enabled);

  if (!activeApiKey) return notFound();

  const userRequests = await db.apiRequest.findMany({
    where: {
      apiKeyId: {
        in: apiKeys.map((key) => key.id),
      },
    },
  });

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }));

  return (
    <div className="container flex flex-col gap-6">
      <h1 className="heading">Welcome back, {user.user.name}</h1>
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
        <p className="text-white font-bold text-s md:text-lg hover:text-amber-300">
          Your API key:
        </p>

        <input
          readOnly
          value={activeApiKey.key}
          className="flex h-10 w-fit rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm truncate placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
        />
        {/* <Input className="w-fit truncate" readOnly value={activeApiKey.key} /> */}
        <ApiKeyOptions apiKeyKey={activeApiKey.key} />
      </div>

      <p className="text-center text-white text-s md:text-lg md:text-left mt-4 -mb-4">
        Your API history:
      </p>

      <Table userRequests={serializableRequests} />
    </div>
  );
};

export default ApiDashboard;
