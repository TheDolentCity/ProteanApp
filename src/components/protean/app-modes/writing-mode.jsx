import React from 'react';
import { useGlobalStore } from "../../storage/global-store";

export default function WritingMode({ className, children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "WritingMode") {
		return (
			<div className={className}>
				{children}
			</div>
		);
	}
	else return <span></span>;
}