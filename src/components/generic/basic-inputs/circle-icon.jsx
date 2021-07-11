import React from 'react';
import FabricIcon from './fabric-icon';

export default function CircleIcon({ name, size, className }) {
	switch (size) {
		case "2xs":
			return (
				<div className={"flex w-4 h-4 min-w-4 min-h-4 rounded-full items-center justify-center text-xs " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		case "xs":
			return (
				<div className={"flex w-6 h-6 min-w-6 min-h-6 rounded-full items-center justify-center text-xs " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		case "sm":
			return (
				<div className={"flex w-8 h-8 min-w-8 min-h-8 rounded-full items-center justify-center text-base " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		case "md":
			return (
				<div className={"flex w-12 h-12 min-w-12 min-h-12 rounded-full items-center justify-center text-4xl " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		case "lg":
			return (
				<div className={"flex w-16 h-16 min-w-16 min-h-16 rounded-full items-center justify-center text-5xl " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		case "xl":
			return (
				<div className={"flex w-20 h-20 min-w-20 min-h-20 rounded-full items-center justify-center text-7xl " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
		default:
			return (
				<div className={"flex w-8 h-8 min-w-8 min-h-8 rounded-full items-center justify-center text-base " + className}>
					<FabricIcon name={name}></FabricIcon>
				</div>
			);
	}
}