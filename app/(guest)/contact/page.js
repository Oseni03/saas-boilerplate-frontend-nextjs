import ContactForm from "@/components/forms/ContactForm";
import React from "react";

function Page() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-100 min-h-screen">
			{/* Contact Information */}
			<div className="w-full md:w-1/2 p-6 md:p-10">
				<h2 className="text-2xl font-bold mb-4">Get in touch</h2>
				<p className="text-gray-600 mb-8">
					Proin volutpat consequat porttitor cras nullam gravida at.
					Orci molestie a eu arcu. Sed ut tincidunt integer elementum
					id sem. Arcu sed malesuada et magna.
				</p>
				<div className="space-y-4">
					<div className="flex items-center">
						<span className="material-icons text-gray-500 mr-4">
							location_on
						</span>
						<span>545 Mavis Island, Chicago, IL 99191</span>
					</div>
					<div className="flex items-center">
						<span className="material-icons text-gray-500 mr-4">
							phone
						</span>
						<span>+1 (555) 234-5678</span>
					</div>
					<div className="flex items-center">
						<span className="material-icons text-gray-500 mr-4">
							email
						</span>
						<span>hello@example.com</span>
					</div>
				</div>
			</div>

			{/* Contact Form */}
			<div className="w-full md:w-1/2 p-6 md:p-10 bg-white rounded-lg shadow-md">
				<ContactForm />
			</div>
		</div>
	);
}

export default Page;
