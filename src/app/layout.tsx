import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import { cn } from "../utils/utils";
import { Toaster } from "@/components/ui/toast";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn("bg-white text-slate-900 antialiased", inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-sky-900 antialiased">
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <Toaster position="bottom-right" />

          {/* <MobileMenu /> */}

          <main>{children}</main>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
};

export default RootLayout;
