import React from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, icon, onClick, indent, important, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer itemRef={itemRef} active={active} className="text-sm" indent={indent} important={important}>
				<ItemIcon icon={icon} className="text-sm"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer itemRef={itemRef} onClick={onClick}>
			<ItemContainer active={active} className="text-sm" indent={indent} important={important}>
				<ItemIcon icon={icon} className="text-sm"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
		</ButtonContainer>
  );
}

export function ButtonContainer({ itemRef, onClick, children }) {
	return (
		<button
			ref={itemRef}
      onClick={onClick} 
      className="acc-focus w-full">
			{children}
    </button>
	);
}

function ItemContainer({ active, indent, important, className, children }) {
	const createPadding = () => {
		if (indent === -1) {
			return {
				"paddingLeft": "0.75rem"
			}
		}
		return {
			"paddingLeft": (1.25 + (indent * 1.5)) + "rem"
		};
	}

	return (
    <div 
			className={(active ? "font-semibold raise-10 text-black dark:text-white " : "hover:raise-5 ")
			+ (important ? "text-important " : "text-default ")
			+ "acc-focus flex w-full pr-3 py-1 items-center text-left overflow-hidden " + className}
			style={createPadding()}>
			{children}
    </div>
  );
}

function ItemIcon({ icon, className }) {
  return (
    <div className={"flex mr-2 items-center  " + className}>
      <FabricIcon name={icon} className=""></FabricIcon>
    </div>
  );
}

function ItemContent({ children }) {
	if (typeof children === 'object') {
		console.log("Objects Offender:" + JSON.stringify(children));
		return (
			<span></span>
		);
	}
	else {
		return (
			<div className="w-full truncate">
				{children}
			</div>
		);
	} 
}

ItemContainer.defaultProps = {
	active: false,
	indent: -1,
	className: "text-sm"
};