import React from "react";

const Contact = () => {
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
				<form className="space-y-6">
					<div className="flex space-x-4">
						<input
							type="text"
							placeholder="First name"
							className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="text"
							placeholder="Last name"
							className="w-1/2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>
					<input
						type="email"
						placeholder="Email"
						className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<input
						type="tel"
						placeholder="Phone number"
						className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<textarea
						placeholder="Message"
						className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						rows="4"
					/>
					<button
						type="submit"
						className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors"
					>
						Send message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
