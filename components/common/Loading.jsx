import React from "react";
import Spinner from "../common/Spinner";

function Loading() {
	return (
		<div className="h-screen flex items-center">
			<div className="mx-auto">
				<Spinner />;
			</div>
		</div>
	);
}

export default Loading;
