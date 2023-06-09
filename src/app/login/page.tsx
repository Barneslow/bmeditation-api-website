import Icons from "@/components/Icons";
import UserAuthForm from "@/components/UserAuthForm";
import Link from "next/link";
import { FC } from "react";

const page: FC = () => {
  return (
    <>
      <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
          <div className="flex flex-col items-center gap-6 text-center">
            <Link className="auth-btn btn w-fit" href="/">
              <Icons.ChevronLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>

            <h1 className="heading">Welcome back!</h1>
            <p className="max-w-xl text-black dark:text-white">
              Please sign in using your Google account.
            </p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  );
};

export default page;
