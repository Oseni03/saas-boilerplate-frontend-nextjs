import React from "react";

const SocialProof = () => {
	return (
		<div className="bg-gray-900 text-white py-16 px-8">
			<div className="max-w-screen-xl mx-auto text-center">
				<h2 className="text-3xl font-bold mb-4">
					Sign up for our newsletter
				</h2>
				<p className="text-gray-400 mb-12">
					Stay up to date with the roadmap progress, announcements,
					and exclusive discounts. Feel free to sign up with your
					email.
				</p>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div>
						<h3 className="text-4xl font-bold">$76 billion</h3>
						<p className="text-gray-400">
							24h trading volume on Flowbite exchange
						</p>
					</div>
					<div>
						<h3 className="text-4xl font-bold">600+</h3>
						<p className="text-gray-400">
							Cryptocurrencies listed on our platform
						</p>
					</div>
					<div>
						<h3 className="text-4xl font-bold">90 million</h3>
						<p className="text-gray-400">
							Registered users who trust Flowbite
						</p>
					</div>
					<div>
						<h3 className="text-4xl font-bold">&lt;0.10%</h3>
						<p className="text-gray-400">Lowest transaction fees</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SocialProof;
