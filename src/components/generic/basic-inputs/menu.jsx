import React from 'react';

export function MenuContainer({ style, children }) {
	return (
		<div className="fixed flex flex-none flex-col min-w-48 rounded shadow-xl bg-white border border-gray-300 dark:border dark:border-gray-600 divide-y divide-gray-300 dark:bg-gray-700 dark:divide-gray-600" style={style}>
			{children}
		</div>
	);
}

export function MenuSection({ children }) {
	return (
		<div className="w-full py-1">
			{children}
		</div>
	);
}