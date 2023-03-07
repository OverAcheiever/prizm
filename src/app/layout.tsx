import "@/styles/globals.css";
import Header from "./Header";

import { Space_Grotesk } from "@next/font/google";
import local from "@next/font/local";

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
