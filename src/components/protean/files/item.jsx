import React from 'react';
import FabricIcon from './../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, icon, onClick, indent, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer itemRef={itemRef} active={active} className="text-sm" indent={indent}>
				<ItemIcon icon={icon} className="text-lg"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer itemRef={itemRef} onClick={onClick}>
			<ItemContainer active={active} className="text-sm" indent={indent}>
				<ItemIcon icon={icon} className="text-lg"></ItemIcon>
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
				<ItemIcon icon={icon} className="text-base"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer ref={itemRef} onClick={onClick}>
			<ItemContainer active={active} className="text-xs" indent={indent}>
				<ItemIcon icon={icon} className="text-base"></ItemIcon>
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
	const createIndentation = () => {
		if (indent === -1) {
			return {
				"paddingLeft": "0.75rem"
			}
		}
		return {
			"paddingLeft": (2.0 + (indent * 1.75)) + "rem"
		};
	}

	return (
    <div className={
			(active ? "font-semibold bg-gray-200 dark:bg-gray-700 text-black dark:text-white" : "hover:bg-gray-100 dark:hover:bg-gray-800")
			+ " acc-focus flex w-full px-3 py-1 items-center text-left overflow-hidden " 
			+ className}
			style={createIndentation()}>
			{children}
    </div>
  );
}

function ItemIcon({ icon, className }) {
  return (
    <div className={"flex pr-2 items-center " + className}>
      <FabricIcon name={icon}></FabricIcon>
    </div>
  );
}

function ItemContent({ children }) {
	return (
		<div className="w-full truncate">
			{children}
		</div>
	);
}

ItemContainer.defaultProps = {
	active: false,
	indent: -1,
	className: "text-sm"
};