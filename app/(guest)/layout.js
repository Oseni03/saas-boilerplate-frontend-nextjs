import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata = {
	title: "Unauthenticated page",
	description: "Unauthenticated page",
};

export default function RootLayout({ children }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
