"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function Page() {
	const searchParams = useSearchParams();
	const code = searchParams.get("code");
	console.log(code);
	return <div>Callback page</div>;
}

export default Page;
