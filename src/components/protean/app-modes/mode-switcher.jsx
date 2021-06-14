import React, { useState } from 'react';
import { Listbox } from '@headlessui/react'
import { useGlobalStore } from "../../stores/global-store";
import CircleIcon from './../../generic/basic-inputs/circle-icon';

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
        {modes.map((modeOption) => (mode.name !== modeOption.name ?
          <Listbox.Option
            key={modeOption.id}
            value={modeOption}
            disabled={modeOption.unavailable}
						className="cursor-pointer">
						<ModeOption isOpen={isOpen} mode={modeOption} className="bg-gray-100 dark:bg-gray-700"></ModeOption>
          </Listbox.Option>
					:
					<span></span>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

function ModeOption({ className, isOpen, mode }) {
	switch (isOpen) {
		case true:
			return (
				<div className={"w-full acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10 " + className}>
					<CircleIcon name={mode.icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
					<div className="w-full pl-2 truncate">
						{mode.name}
					</div>
				</div>
			);
		case false:
			return (
				<div className={"acc-focus flex px-3 py-2 items-center rounded-none text-left text-base overflow-hidden hover:raise-10 " + className}>
					<CircleIcon name={mode.icon} size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
				</div>
			);
	}
}