import React from "react";

export function WidgetContainer({ className, children }) {
	return (
		<div className={"col-span grid grid-cols-12 col-span-12 w-full items-stretch " + className}>
			{children}
		</div>
	);
}

export function Widget(props) {
	return (
		<div className={"col-span p-2 xl:p-4 border-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-black " + props.css}>
			{props.children}
		</div>
	);
}

WidgetContainer.defaultProps = {
	className: ""
}