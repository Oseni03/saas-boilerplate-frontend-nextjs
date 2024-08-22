import React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

function TooltipMaker({ config }) {
	return (
		<TooltipProvider>
			{config.map((input, index) => (
				<Tooltip key={index}>
					<TooltipTrigger asChild>
						<Link href={input.href} className={input.className}>
							{input.labelItem}
							<span className="sr-only">{input.labelText}</span>
						</Link>
					</TooltipTrigger>
					<TooltipContent side="right">
						{input.labelText}
					</TooltipContent>
				</Tooltip>
			))}
		</TooltipProvider>
	);
}

export default TooltipMaker;
