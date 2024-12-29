Neuraic: Abstract Global Wallet Integration with Thirdweb
Neuraic is a cutting-edge platform that integrates the Abstract Global Wallet SDK with Thirdweb in a Next.js application. It allows seamless wallet connectivity, interaction with blockchain contracts, and NFT operations within a streamlined interface.

About Neuraic
Neuraic represents the future of blockchain-enabled applications, combining the power of Abstract Global Wallet and Thirdweb to provide a user-friendly, scalable, and secure platform for managing digital assets. With Neuraic, users can explore and claim exclusive NFTs while enjoying the best of blockchain technology.

Features
Integration with Abstract Global Wallet SDK for seamless wallet management
NFT claim and contract interactions powered by Thirdweb
Built with the latest tools: Next.js, Vite, TailwindCSS, and React
Scalable and customizable for various blockchain applications
Local Development
Follow these steps to set up the Neuraic project locally:

1. Clone the Repository
Clone the agw-thirdweb-nextjs project directory:

bash
Copy code
git clone https://github.com/wlplease/absthirdnew.git
cd absthirdnew
2. Set Up Thirdweb API Key
Go to the Thirdweb Dashboard and log in or create an account.

Navigate to the Project Settings tab and copy your Client ID.

Create a .env.local file in the project root and add the following:

bash
Copy code
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your-client-id-here
NEXT_PUBLIC_THIRDWEB_API_KEY=your-api-key-here
3. Install Dependencies
Use pnpm for package management:

bash
Copy code
pnpm install
4. Run the Development Server
Start the development server with:

bash
Copy code
pnpm run dev
Visit http://localhost:3000 to explore the application.

Packages and Tools
The project uses the following key dependencies:

@thirdweb-dev/react: For Thirdweb integration and blockchain interactions
@abstract-foundation/agw-react/thirdweb: For Abstract Global Wallet support
Next.js: A React framework for building server-rendered and statically-generated web applications
Vite: A fast build tool for modern web projects
TailwindCSS: Utility-first CSS framework for rapid UI development
pnpm: A fast, disk space-efficient package manager
Useful Links
Neuraic Official Site
Abstract Global Docs
Thirdweb Documentation
Abstract Global GitHub
Abstract on X (Twitter)
Abstract Discord Community
