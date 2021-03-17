import React, { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle(props) {
  const [switchValue, setSwitchValue] = useState(props.initialValue);

  function onChange(newSwitchValue) {
    setSwitchValue(newSwitchValue);
    props.onChange(newSwitchValue);
  }

  return (
    <Switch.Group as="div" className="flex w-full space-x-3">
      <Switch.Label>{props.label}</Switch.Label>
      <Switch
        as="button"
        checked={switchValue}
        onChange={onChange}
        className={`${switchValue ? "bg-accent-400" : "bg-gray-300 dark:bg-gray-600"}
            relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
      >
        {({ checked }) => (
          <span
            className={`
                  ${checked ? "translate-x-5" : "translate-x-0"}
                  inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
          />
        )}
      </Switch>
    </Switch.Group>
  );
}
