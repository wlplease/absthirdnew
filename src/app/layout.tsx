"use client";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../app/globals.css";
import localFont from "next/font/local";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const avenueMono = localFont({
  src: "../app/fonts/Avenue Mono.ttf",
  variable: "--font-avenue-mono",
  weight: "100, 900",
});
const roobert = localFont({
  src: [
    { path: "../app/fonts/Roobert-Light.ttf", weight: "300", style: "normal" },
    { path: "../app/fonts/Roobert-Regular.ttf", weight: "400", style: "normal" },
    { path: "../app/fonts/Roobert-Medium.ttf", weight: "500", style: "normal" },
    { path: "../app/fonts/Roobert-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../app/fonts/Roobert-Bold.ttf", weight: "700", style: "normal" },
    { path: "../app/fonts/Roobert-Heavy.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-roobert",
});

const customChain = {
  id: 11124,
  name: "Abstract Testnet",
  chain: "abstract-testnet",
  chainId: 11124,
  shortName: "abs-testnet",
  slug: "abstract-testnet",
  rpc: [`https://11124.rpc.thirdweb.com/${process.env.NEXT_PUBLIC_THIRDWEB_API_KEY}`],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: [
    { name: "Abstract Explorer", url: "https://explorer.testnet.abs.xyz" },
  ],
  testnet: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${avenueMono.variable} ${roobert.variable} antialiased`}
      >
        <ThirdwebProvider activeChain={customChain}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThirdwebProvider>
      </body>
    </html>
  );
}
