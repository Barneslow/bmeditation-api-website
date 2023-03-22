"use client";

import { createApiKey } from "@/app/helpers/create-api-key";
import { Key } from "lucide-react";
import { FC, useState } from "react";
import CopyButton from "./ui/buttons/CopyButton";
import { toast } from "./ui/toast";

interface RequestApiKeyProps {}

const RequestApiKey: FC<RequestApiKeyProps> = ({}) => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function createNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsCreating(true);

    try {
      const generatedApiKey = await createApiKey();
      setApiKey(generatedApiKey);
    } catch (err) {
      if (err instanceof Error) {
        toast({
          title: "Error",
          message: err.message,
          type: "error",
        });

        return;
      }

      toast({
        title: "Error",
        message: "Something went wrong",
        type: "error",
      });
    } finally {
      setIsCreating(false);
    }
  }

  return (
    <div className="container md:max-w-2xl">
      <div className="flex flex-col gap-6 items-center">
        <Key className="mx-auto h-12 w-12 text-gray-400" />
        <h1 className="heading text-center">Request your API key</h1>
        <p className="text-white text-s md:text-lg">
          You haven&apos;t requested an API key yet.
        </p>
      </div>
      <form
        onSubmit={createNewApiKey}
        className="mt-6 sm:flex sm:items-center"
        action="#"
      >
        <label htmlFor="emails" className="sr-only">
          Your API key
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          {apiKey ? (
            <CopyButton
              className="absolute inset-y-0 right-0 animate-in fade-in duration-300"
              valueToCopy={apiKey}
            />
          ) : null}
          <input
            className="flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-sky-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900"
            readOnly
            value={apiKey ?? ""}
            placeholder="Request an API key to display it here"
          />
        </div>
        <div className="mt-6 flex justify-center sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <button className="btn auth-btn">Request key</button>
        </div>
      </form>
    </div>
  );
};

export default RequestApiKey;
