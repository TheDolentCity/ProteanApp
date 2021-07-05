import React from 'react';
import { useGlobalStore } from "../../storage/global-store";

export default function ReadingMode({ className, children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "ReadingMode") {
		return (
			<div className={className}>
				{children}
			</div>
		);
	}
	else return <span></span>;
}