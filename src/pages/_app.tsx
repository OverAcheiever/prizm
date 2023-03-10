import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";
import local from "next/font/local";
import { Toaster } from "react-hot-toast";

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

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`${space.variable} ${aeonik.variable} ${circa.variable}`}>
      <Toaster
        toastOptions={{
          className: "font-space",
        }}
      />
      <Component {...pageProps} />
    </main>
  );
};

export default api.withTRPC(MyApp);
