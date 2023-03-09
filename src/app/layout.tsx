"use client";
import "@/styles/globals.css";
import { usePathname, useRouter } from "next/navigation";

import { Space_Grotesk } from "@next/font/google";
import local from "next/font/local";
import { useEffect } from "react";
import { magic } from "@/utils/magic";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const aeonik = local({
  src: "../styles/fonts/aeonik.otf",
  display: "swap",
  variable: "--font-aeonik",
});

const circa = local({
  src: "../styles/fonts/circa.woff",
  display: "swap",
  variable: "--font-circa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    magic!.user.isLoggedIn().then((isLoggedIn) => {
      console.log(isLoggedIn);
      if (isLoggedIn) {
        magic!.user.getMetadata().then((userData) => console.log(userData));

        console.timeEnd("isLoggedIn");
      } else {
        if (path !== "/login") router.push("/login");
      }
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${space.variable} ${aeonik.variable} ${circa.variable}`}
      >
        <main className="h-full min-h-screen w-full bg-black font-space text-white">
          {/* <Header /> */}
          {children}
        </main>
      </body>
    </html>
  );
}
