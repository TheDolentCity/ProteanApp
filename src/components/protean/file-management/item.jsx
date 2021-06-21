import React from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, icon, onClick, indent, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer itemRef={itemRef} active={active} className="text-base" indent={indent}>
				<ItemIcon icon={icon} className="text-base"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer itemRef={itemRef} onClick={onClick}>
			<ItemContainer active={active} className="text-base" indent={indent}>
				<ItemIcon icon={icon} className="text-base"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
		</ButtonContainer>
  );
}

export function SmallItem({ itemRef, active, icon, onClick, indent, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer ref={itemRef} active={active} className="text-xs" indent={indent}>
				<ItemIcon icon={icon} className="text-xs"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer ref={itemRef} onClick={onClick}>
			<ItemContainer active={active} className="text-xs" indent={indent}>
				<ItemIcon icon={icon} className="text-xs"></ItemIcon>
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

function ItemContainer({ active, indent, className, children }) {
	const createPadding = () => {
		if (indent === -1) {
			return {
				"paddingLeft": "0.75rem"
			}
		}
		return {
			"paddingLeft": (1.5 + (indent * 1.5)) + "rem"
		};
	}

	const createMargin = () => {
		if (indent === 0) {
			return {
				"paddingLeft": "1rem",
				"marginLeft": "-2rem",
				"border-width": "0px"
			}
		}
		return {
			"paddingLeft": "-1rem"
		};
	}

	return (
    <div className={
			(active ? "font-semibold raise-10 text-black dark:text-white" : "hover:raise-5")
			+ " acc-focus flex w-full pr-3 py-1 items-center text-left overflow-hidden " 
			+ className}
			style={createPadding()}>
			{/* <div className="border-l border-theme" style={createMargin()}>&#8203;</div> */}
			{children}
    </div>
  );
}

function ItemIcon({ icon, className }) {
  return (
    <div className={"flex mr-2 items-center  " + className}>
      <FabricIcon name={icon} className="text-black dark:text-white"></FabricIcon>
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