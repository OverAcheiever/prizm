"use client";
import "@/styles/globals.css";
import Header from "./Header";

import { Space_Grotesk } from "@next/font/google";
import local from "next/font/local";
import { useEffect } from "react";
import { magic } from "@/utils/magic";
import Router from "next/router";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const aeonik = local({
  src: "../styles/fonts/aeonik.otf",
  display: "swap",
  variable: "--font-aeonik",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.time("isLoggedIn");
    magic!.user.isLoggedIn().then((isLoggedIn) => {
      console.log(isLoggedIn);
      if (isLoggedIn) {
        magic!.user.getMetadata().then((userData) => console.log(userData));

        console.timeEnd("isLoggedIn");
      } else {
        Router.push("/login");
      }
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${space.variable} ${aeonik.variable}`}>
        <main className="h-full min-h-screen w-full bg-black font-space text-white">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
