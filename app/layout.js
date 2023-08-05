"use client";
import Voicenavigation_button from "./components/Voicenavigation_button";
import { useState, useEffect } from "react";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Divyang",
  description:
    "This is the website which facilitates the governance for the disabled person.",
};

export default function RootLayout({ children }) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <html lang="en">
        <body>
          <Navbar />
          <NextTopLoader />
          {children}
          {isClient ? <Voicenavigation_button /> : <></>}
        </body>
      </html>
    </>
  );
}
