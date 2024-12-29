import '../app/globals.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-8 py-4 bg-black text-white">
      <div className="flex flex-col items-center">
        <Image
          src="/logo192.png"
          alt="Neuraic Logo"
          width={48}
          height={48}
          quality={100}
          priority
        />
        <h1 className="text-lg font-bold">Neuraic ABS NFT</h1>
        <div className="text-sm font-medium">
          Neuraic &copy; All rights reserved
        </div>
        <div className="text-xs mt-1">
          This site does not provide financial advice. NFTs are subject to
          market risks.
        </div>
      </div>
    </footer>
  );
}
