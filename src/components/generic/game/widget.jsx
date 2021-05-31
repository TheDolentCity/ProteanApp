import React from "react";

export function WidgetContainer({ className, children }) {
	return (
		<div className={"col-span grid col-span-12 w-full items-stretch " + className}>
			{children}
		</div>
	);
}

export function Widget({ className, children }) {
	return (
		<div className={"col-span p-2 xl:p-4 border border-gray-200 dark:border-gray-700 " + className}>
			{children}
		</div>
	);
}

WidgetContainer.defaultProps = {
	className: ""
}