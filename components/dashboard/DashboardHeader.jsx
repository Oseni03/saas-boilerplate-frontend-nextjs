import UserDropdownMenu from "../common/UserDropdownMenu";
import DashboardSheet from "./DashboardSheet";

function DashboardHeader() {
	return (
		<header className="flex h-14 justify-between items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<DashboardSheet />
			<UserDropdownMenu />
		</header>
	);
}

export default DashboardHeader;
