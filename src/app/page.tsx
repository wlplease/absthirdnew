"use client";

import Image from "next/image";
import { useContract, useAddress, useDisconnect, Web3Button } from "@thirdweb-dev/react";

const contractAddress = "0xeEFd224801560FAA2686e56694B62Cc9Ee79e03a";

export default function Home() {
  const address = useAddress();
  const disconnect = useDisconnect();
  const { contract } = useContract(contractAddress);

  return (
    <div className="relative grid grid-rows-[1fr_auto] min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-avenue-mono)] bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-[#00ff00] to-transparent opacity-15 blur-[100px]"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#00ff00] to-transparent opacity-10 blur-3xl"></div>
      <main className="relative flex flex-col items-center justify-center z-10 text-white text-center">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-4">
            <Image src="/logo512.png" alt="Neuraic Logo" width={240} height={32} quality={100} priority />
            <span>🤝</span>
            <Image src="/thirdweb.svg" alt="Thirdweb Logo" width={32} height={32} quality={100} priority />
          </div>
          <p className="text-md font-[family-name:var(--font-roobert)]">
            Welcome to Neuraic. Discover and own a piece of our exclusive Neuraic ABS NFT collection.
          </p>
          <div className="flex justify-center">
            {address ? (
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 shadow-lg backdrop-blur-sm max-w-sm w-full">
                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm sm:text-base font-medium font-[family-name:var(--font-roobert)]">
                    Connected as {address}
                  </p>
                  <a
                    href={`https://explorer.testnet.abs.xyz/address/${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-medium font-[family-name:var(--font-roobert)] text-green-400"
                  >
                    View on Explorer
                  </a>
                  <div className="flex gap-2 w-full">
                    <button
                      onClick={disconnect}
                      className="rounded-full border border-solid border-white/20 transition-colors flex items-center justify-center bg-white/10 text-white gap-2 hover:bg-white/20 text-sm h-10 px-5 font-[family-name:var(--font-roobert)] flex-1"
                    >
                      Disconnect
                    </button>
                    <Web3Button
                      contractAddress={contractAddress}
                      action={async (contract) => {
                        if (!address) {
                          throw new Error("Wallet is not connected.");
                        }
                        return contract.call("claim", [
                          address,
                          1,
                          "0x0000000000000000000000000000000000000000", // Native currency (ETH)
                          "1000000000000000000", // Price per token in Wei (1 ETH)
                          {
                            proof: [],
                            quantityLimitPerWallet: 10,
                            pricePerToken: "1000000000000000000",
                            currency: "0x0000000000000000000000000000000000000000",
                          },
                          "0x",
                        ]);
                      }}
                      className="rounded-full border border-solid transition-colors flex items-center justify-center text-white gap-2 text-sm h-10 px-5 font-[family-name:var(--font-roobert)] flex-1 w-[140px] bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-transparent"
                      onSuccess={() => alert("Claim successful!")}
                      onError={(error) => alert(`Error: ${error.message}`)}
                    >
                      Claim NFT
                    </Web3Button>
                  </div>
                </div>
              </div>
            ) : (
              <Web3Button
                contractAddress={contractAddress}
                action={() => {}}
                onSuccess={() => console.log("Wallet connected")}
                onError={(error) => console.error("Connection error:", error)}
                className="rounded-full border border-solid transition-colors flex items-center justify-center text-white gap-2 text-sm h-10 px-5 font-[family-name:var(--font-roobert)] flex-1 w-[140px] bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 border-transparent"
              >
                Connect Wallet
              </Web3Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
