import ProfileUpdateCard from "@/components/settings/ProfileUpdateCard";
import NotificationPreferenceCard from "@/components/settings/NotificationPreferenceCard";
import ChangePasswordCard from "@/components/settings/ChangePasswordCard";
import ArchiveAccountCard from "@/components/settings/ArchiveAccountCard";
import SettingsHeader from "@/components/settings/SettingsHeader";

export const metadata = {
	title: "Account settings - Boilerplate",
	description: "Boilerplate account settings page",
};

function Page() {
	return (
		<main className="grid flex-1 mb-6 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="mx-auto grid w-full xl:max-w-[59rem] flex-1 auto-rows-max gap-4">
				<div className="grid gap-4">
					<div className="grid auto-rows-max gap-4 lg:col-span-3 lg:gap-8">
						<SettingsHeader />
						<ProfileUpdateCard />
						<NotificationPreferenceCard />
						<ChangePasswordCard />
						<ArchiveAccountCard />
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
