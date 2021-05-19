import React from 'react';
import { useGlobalStore } from "../../stores/global-store";

export default function PlayingMode({ children }) {
  const { globalState, dispatch } = useGlobalStore();
	
	if (globalState?.mode == "PlayingMode") {
		return (
			<div>
				{children}
			</div>
		);
	}
	else return <span></span>;
}