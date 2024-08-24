import RequireAuth from "@/components/utils/RequireAuth";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import SideBar from "@/components/common/SideBar";

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export default function RootLayout({ children }) {
	return (
		<RequireAuth>
			<div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
				<SideBar />
				<div className="flex flex-col sm:gap-4">
					<DashboardHeader />
					{children}
				</div>
			</div>
		</RequireAuth>
	);
}
