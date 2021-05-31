import React, { useState } from 'react';
import { Listbox } from '@headlessui/react'
import { useGlobalStore } from "../../stores/global-store";
import FabricIcon from './../../generic/basic-inputs/fabric-icon';

const modes = [
  { id: 1, name: 'Reading Mode', icon: 'View', unavailable: false },
  { id: 2, name: 'Writing Mode', icon: 'Edit', unavailable: false },
  { id: 3, name: 'Playing Mode', icon: 'Game', unavailable: false },
]

export default function ModeSwitcher({ isOpen }) {
  const { globalState, dispatch } = useGlobalStore();
  const [mode, setMode] = useState(modes[0])

  const modeDispatch = (newMode) => {
    dispatch({
      type: "setMode",
      payload: {
        mode: newMode.name.split(" ").join("")
      }
    });
  }

	const updateMode = (newMode) => {
		setMode(newMode);
		modeDispatch(newMode);
	}

  return (
		<Listbox value={mode} onChange={updateMode}>
      <Listbox.Button className="acc-focus w-full">
				<ModeOption isOpen={isOpen} mode={mode}></ModeOption>
			</Listbox.Button>
      <Listbox.Options className="w-full">
        {modes.map((mode) => (
          <Listbox.Option
            key={mode.id}
            value={mode}
            disabled={mode.unavailable}
						className="cursor-pointer">
						<ModeOption isOpen={isOpen} mode={mode} className="bg-gray-100 dark:bg-gray-700"></ModeOption>
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

function ModeOption({ className, isOpen, mode }) {
	return (
		<div className={"flex px-4 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10 " + className}>
			<FabricIcon name={mode.icon} className="text-theme"></FabricIcon>
			{
				isOpen ?
				<div className="w-full pl-2 truncate">
					{mode.name}
				</div>
				:
				<span></span>
			}
		</div>
	);
}