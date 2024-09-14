import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Provider from "@/redux/provider";
import Setup from "../components/utils/Setup";
import FeedbackWidget from "@/components/common/FeedbackWidget";
import { ThemeProvider } from "@/components/common/theme-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({ children }) {
	const className = [cn("h-full", inter.className)];
	return (
		<html lang="en" className="min-h-max h-full">
			<body className={inter.className}>
				<Provider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Setup />
						<div>
							{children}
							<FeedbackWidget />
						</div>
					</ThemeProvider>
					{/* className="mx-auto max-w-xl px-2 sm:px-6 lg:px-8 py-8" */}
				</Provider>
			</body>
		</html>
	);
}
