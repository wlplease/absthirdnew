"use client";

import "../app/globals.css";
import { useAddress, useDisconnect, useConnect, metamaskWallet } from "@thirdweb-dev/react";
import Image from "next/image";

export default function Header() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const connect = useConnect();

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white">
      <div className="flex items-center gap-4">
        <Image
          src="/logo192.png"
          alt="Neuraic Logo"
          width={48}
          height={48}
          quality={100}
          priority
        />
        <h1 className="text-lg font-bold">Neuraic ABS NFT</h1>
      </div>
      <div>
        {address ? (
          <div className="flex items-center gap-4">
            <p className="text-sm font-medium text-green-400 truncate">
              Connected: {address}
            </p>
            <button
              onClick={disconnect}
              className="rounded-full border border-white text-white px-4 py-2"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={async () => {
              try {
                await connect(metamaskWallet());
              } catch (error) {
                console.error("Error connecting wallet:", error);
              }
            }}
            className="rounded-full border border-blue-400 bg-blue-600 text-white px-4 py-2"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
