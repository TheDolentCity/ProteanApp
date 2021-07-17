import React from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, onClick, indent, className, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer itemRef={itemRef} active={active} className={className} indent={indent}>
				{children}
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer itemRef={itemRef} onClick={onClick}>
			<ItemContainer active={active} className={className} indent={indent}>
				{children}
			</ItemContainer>
		</ButtonContainer>
  );
}

function ButtonContainer({ itemRef, onClick, children }) {
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
			"paddingLeft": (1.25 + (indent * 1.5)) + "rem"
		};
	}

	return (
    <div 
			className={(active ? "font-semibold raise-5 hover:raise-10 text-black dark:text-white " : "hover:raise-5 disabled:hover:raise-0 ")
			+ "acc-focus flex w-full pr-3 py-1 items-center text-left text-sm overflow-hidden disabled:text-opacity-50 " + className}
			style={createPadding()}>
			{children}
    </div>
  );
}

export function ItemIcon({ icon, indent, className }) {
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
    <div className={"flex mr-2 items-center " + className} style={createPadding()}>
      <FabricIcon name={icon}></FabricIcon>
    </div>
  );
}

export function ItemContent({ children }) {
	return (
		<div className="w-full truncate">
			{children}
		</div>
	);
}

Item.defaultProps = {
	className: "text-sm"
};

ItemContainer.defaultProps = {
	active: false,
	indent: -1,
	className: "text-sm"
};

ItemIcon.defaultProps = {
	className: "text-sm"
};