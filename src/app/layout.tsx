import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";
import { Toaster } from "@/components/ui/toast";

const msPlus = M_PLUS_Rounded_1c({
  weight: ["400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={`bg-white text-sky-900 antialiased", ${msPlus.className}`}
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
