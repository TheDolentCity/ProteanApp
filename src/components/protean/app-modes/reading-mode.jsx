import React from 'react';
import { useGlobalStore } from "../../stores/global-store";

export default function ReadingMode({ children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "ReadingMode") {
		return (
			<div>
				{children}
			</div>
		);
	}
	else return <span></span>;
}