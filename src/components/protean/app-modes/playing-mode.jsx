import React from 'react';
import { useGlobalStore } from "../../stores/global-store";

export default function PlayingMode({ className, children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "PlayingMode") {
		return (
			<div className={className}>
				{children}
			</div>
		);
	}
	else return <span></span>;
}