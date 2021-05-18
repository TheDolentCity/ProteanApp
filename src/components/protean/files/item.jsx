import React from 'react';
import FabricIcon from './../../generic/basic-inputs/fabric-icon';

export default function Item({ itemRef, active, icon, onClick, indent, children}) {
  if (onClick === null || onClick === undefined) {
    return (
			<ItemContainer ref={itemRef} active={active} className="text-sm" indent={indent}>
				<ItemIcon icon={icon} className="text-lg"></ItemIcon>
				<ItemContent>
					{children}
				</ItemContent>
			</ItemContainer>
    );
  }
  else return (
		<ButtonContainer itemRef={itemRef} onClick={onClick}>
			<ItemContainer ref={itemRef} active={active} className="text-sm" indent={indent}>
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

export function ButtonContainer({ onClick, children }) {
	return (
		<button
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
				"padding-left": "0.75rem"
			}
		}
		return {
			"padding-left": (2.0 + (indent * 1.75)) + "rem"
		};
	}

	return (
    <div className={
			(active ? "bg-theme" : "hover:raise-5")
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