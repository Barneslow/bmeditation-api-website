import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import SignInButton from "./ui/SignInButton";
import SignOutButton from "./ui/SignOutButton";
import { Permanent_Marker } from "next/font/google";
import { cn } from "@/utils/utils";

const marker = Permanent_Marker({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar = async ({}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-sky-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:slate-300 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between item-center">
        <Link
          href="/"
          className={cn(
            "text-3xl text-sky-900 rounded-lg hover:underline dark:text-amber-300",
            marker.className
          )}
        >
          B Meditation
        </Link>
        <div className="flex gap-2  md:hidden">
          <ThemeToggle />

          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
          <Link
            href="/documentation"
            className={buttonVariants({ variant: "ghost" })}
          >
            Documentation
          </Link>
          {session ? (
            <>
              <Link
                className={buttonVariants({ variant: "ghost" })}
                href="/dashboard"
              >
                Dashboard
              </Link>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
