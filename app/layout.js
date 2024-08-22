import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from '@/redux/provider';
import Header from "./_components/common/Header";
import Footer from "./_components/common/Footer";
import Setup from "./_components/utils/Setup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SaaS Boilerplate",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
		<html lang="en" className="min-h-max">
			<body className={inter.className}>
				<Provider>
					<Setup />
					<Header />
					<div>{children}</div>
					{/* className="mx-auto max-w-xl px-2 sm:px-6 lg:px-8 py-8" */}
					<Footer />
				</Provider>
			</body>
		</html>
  );
}
