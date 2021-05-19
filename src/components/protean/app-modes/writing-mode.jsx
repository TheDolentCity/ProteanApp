import React from 'react';
import { useGlobalStore } from "../../stores/global-store";

export default function WritingMode({ children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "WritingMode") {
		return (
			<div>
				{children}
			</div>
		);
	}
	else return <span></span>;
}