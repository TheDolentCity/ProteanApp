import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import FabricIcon from './fabric-icon';

export default function Tabs({ className, tabs, group, onSelect, onClose }) {
	const [internalTabs, setInternalTabs] = useState(tabs)
	const [selected, setSelected] = useState(tabs.find(tab => tab.active));

	const closeTab = (tabToClose) => {
		setInternalTabs(internalTabs.filter(tab => tab.value !== tabToClose.value));
		if (onClose !== null && onClose !== undefined) {
			onClose(tabToClose);
		}
	}

	const selectTab = (selectedTab) => {
		setSelected(selectTab);
		if (onSelect !== null && onSelect !== undefined) {
			onSelect(selectedTab);
		}
	}

	switch (tabs.length) {
		case 0: return <span></span>;
		case 1:
			return (
				<div className={`${className} flex flex-wrap w-full max-w-full items-center border-b border-gray-500 dark:border-gray-600`}>
					<div className="flex w-full h-8 max-h-8 px-2 py-1 truncate items-center">
						<h5 className="flex-shrink px-2 pr-1 truncate text-sm">
							{tabs[0].value}
						</h5>
						<button onClick={() => closeTab(tabs[0])} className="acc-focus px-1 hover:raise-10">
							<FabricIcon name="Cancel" className="text-xs"></FabricIcon>
						</button>
					</div>
				</div>
			);
		default:
			return (
				<RadioGroup
					value={selected}
					onChange={selectTab}
					className={`${className} flex flex-wrap w-full max-w-full items-center border-b border-gray-500 dark:border-gray-600`}>
					<RadioGroup.Label className="sr-only">{group}</RadioGroup.Label>
					{
						internalTabs.map((tab) => (
							<RadioGroup.Option
								key={tab.uuid}
								value={tab.value} 
								className={({ active, checked }) => `
									${checked ? "bg-black text-white dark:bg-white dark:text-black" : ""}
									flex-shrink flex h-8 max-h-8 px-2 py-1 truncate items-center cursor-pointer`}>
										<RadioGroup.Label className="flex-shrink px-2 pr-1 truncate text-sm">
											{tab.value}
										</RadioGroup.Label>
										<button onClick={() => closeTab(tab)} className="acc-focus px-1 hover:raise-10">
											<FabricIcon name="Cancel" className="text-xs"></FabricIcon>
										</button>
							</RadioGroup.Option>
						))
					}
				</RadioGroup>
			);
	}
}