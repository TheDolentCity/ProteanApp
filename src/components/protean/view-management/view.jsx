import React from 'react'
import { Menu } from '@headlessui/react';
import { useGlobalStore } from '../../storage/global-store';
import { Directions, ViewIcons, ViewTypes } from '../../storage/constants';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import DocumentView from './view-document';
import FileExplorerView from './view-file-explorer';
import { MenuContainer, MenuSection } from '../../generic/basic-inputs/menu';
import Item from '../file-management/item';

export function ViewController() {
	const { globalState, dispatch } = useGlobalStore();

	return (
		<div className="flex-grow flex h-full">
			{
				globalState.views.map((view) => (
					<View key={view.uuid} view={view}></View>
				))
			}
		</div>
	);
}

function View({ view }) {
	switch (view.type) {
		case ViewTypes.EXPLORER:
			return (
				<FileExplorerView view={view}></FileExplorerView>
			);
		case ViewTypes.DOCUMENT:
			return (
				<DocumentView view={view}></DocumentView>
			);
		default:
			return <span></span>;
	}
}

export function ViewContainer({ className, children }) {
	return (
		<div className={"flex flex-col max-w-md border-r border-gray-500 dark:border-gray-600 " + className}>
			{children}
		</div>
	);
}

export function ViewHeader({ children }) {
	return (
		<div className="flex w-full px-2 py-1 items-center text-sm">
			{children}
		</div>
	);
}

export function ViewContent({ children }) {
	return (
		<div className="flex-grow overflow-x-hidden overflow-y-auto protean-scrollbar">
			{children}
		</div>
	);
}

export function ViewDivider() {
	return (
		<span className="h-6 mx-1 border-r border-gray-500"></span>
	);
}

export function ViewItem({ className, children }) {
	return (
		<div className={"flex h-8 max-h-8 px-3 py-2 truncate items-center " + className}>
			{children}
		</div>
	);
}

export function ViewButton({ className, onClick, children }) {
	return (
		<button onClick={onClick} className={"acc-focus rounded-full " + className}>
			<ViewButtonLabel>
				{children}
			</ViewButtonLabel>
		</button>
	);
}

export function ViewButtonLabel({ children }) {
	return (
		<span className="flex w-8 h-8 justify-center items-center rounded-full hover:raise-10">
			{children}
		</span>
	);
}

export function ViewLabel({ children }) {
	return (
		<div className="flex-shrink px-2 truncate font-mono text-important">
			{children}
		</div>
	);
}

export function ViewIcon({ viewType }) {
	switch (viewType) {
		case ViewTypes.EXPLORER:
			return (
				<FabricIcon name={ViewIcons.EXPLORER} className="text-important"></FabricIcon>
			);
		case ViewTypes.DOCUMENT:
			return (
				<FabricIcon name={ViewIcons.DOCUMENT} className="text-important"></FabricIcon>
			);
		default:
			return <span></span>;
	}
}

export function CloseViewButton({ view }) {
	const { globalState, dispatch } = useGlobalStore();

	const closeView = (view) => {
		dispatch({
			type: "closeView",
			payload: {
				uuid: view.uuid
			}
		})
	}

	return (
		<ViewButton onClick={() => closeView(view)}>
			<FabricIcon name="Cancel"></FabricIcon>
		</ViewButton>
	);
}

export function ViewOptionsDropdown({ view }) {
	const { globalState, dispatch } = useGlobalStore();

	const moveView = (direction) => {
		dispatch({
			type: "moveView",
			payload: {
				view: view,
				direction: direction,
			}
		})
	}

	return (
		<Menu as="div" className="relative text-left">
			<Menu.Button className="acc-focus">
				<ViewButtonLabel>
					<FabricIcon name="MoreVertical"></FabricIcon>
				</ViewButtonLabel>
			</Menu.Button>
			<Menu.Items>
				<MenuContainer>
					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Item
									onClick={() => moveView(Directions.LEFT)}
									icon="DockLeft"
									className="text-important">
									Move View Left
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item
									disabled={true}
									onClick={() => moveView(Directions.RIGHT)}
									icon="DockRight"
									className="text-important">
									Move View Right
								</Item>
							)}
						</Menu.Item>
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
	);
}