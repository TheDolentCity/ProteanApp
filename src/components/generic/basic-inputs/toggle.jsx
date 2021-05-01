import React, { useState } from "react";
import { Switch } from "@headlessui/react";

export default function Toggle(props) {
  const [switchValue, setSwitchValue] = useState(props.initialValue);

  function onChange(newSwitchValue) {
    setSwitchValue(newSwitchValue);
    props.onChange(newSwitchValue);
  }

  return (
    <Switch.Group as="div" className="flex w-full space-x-2">
      <Switch.Label className="font-normal">{props.label}</Switch.Label>
      <Switch
        as="button"
        checked={switchValue}
        onChange={onChange}
        className={`${switchValue ? "theme-color" : "raise-25"}
            relative inline-flex flex-shrink-0 h-5 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
      >
        {({ checked }) => (
          <span
            className={`
                  ${checked ? "translate-x-6" : "translate-x-0"}
                  inline-block w-4 h-4 transition duration-200 ease-in-out transform bg-white rounded-full`}
          />
        )}
      </Switch>
    </Switch.Group>
  );
}
