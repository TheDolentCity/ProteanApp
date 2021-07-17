import React from 'react';
import { Menu } from '@headlessui/react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import { useGlobalStore } from '../../storage/global-store';
import { FileIcons, FileTypes } from './../../storage/constants';
import { MenuContainer, MenuSection } from '../../generic/basic-inputs/menu';
import FileExplorer from '../file-management/file-explorer';
import Item, { ItemContent, ItemIcon } from '../file-management/item';
import {
	CloseViewButton,
	ViewButtonLabel,
	ViewContainer,
	ViewContent,
	ViewDivider,
	ViewHeader,
	ViewIcon,
	ViewItem,
	ViewLabel,
	ViewOptionsDropdown
} from './view';

export default function FileExplorerView({ view }) {
	return (
		<ViewContainer className="flex-shrink">
			<ViewHeader>
				<ViewItem className="flex-grow">
					<ViewIcon viewType={view.type}></ViewIcon>
					<ViewLabel>
						{view.title}
					</ViewLabel>
				</ViewItem>
				<CreatePageDropdown />
				<CreateContainerDropdown />
				<ViewDivider />
				<ViewOptionsDropdown view={view} />
				<CloseViewButton view={view} />
			</ViewHeader>
			<ViewContent>
				<FileExplorer />
			</ViewContent>
		</ViewContainer>
	);
}

function CreatePageDropdown() {
	const { globalState, dispatch } = useGlobalStore();

	const createNewFile = (fileType) => {
		dispatch({
			type: "newFile",
			payload: {
				fileType: fileType,
				parentFile: null
			}
		})
	}

	return (
		<Menu as="div" className="relative text-left">
			<Menu.Button className="acc-focus">
				<ViewButtonLabel>
					<FabricIcon name="PageAdd"></FabricIcon>
				</ViewButtonLabel>
			</Menu.Button>
			<Menu.Items>
				<MenuContainer>
					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Item onClick={() => createNewFile(FileTypes.PAGE)} className="text-important">
									<ItemIcon icon={FileIcons[FileTypes.PAGE]} />
									<ItemContent>
										New Page
									</ItemContent>
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item onClick={() => createNewFile(FileTypes.SHEET)} className="text-important">
									<ItemIcon icon={FileIcons[FileTypes.SHEET]} />
									<ItemContent>
									New Sheet
									</ItemContent>
								</Item>
							)}
						</Menu.Item>
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
	);
}

function CreateContainerDropdown() {
	const { globalState, dispatch } = useGlobalStore();

	const createNewFile = (fileType) => {
		dispatch({
			type: "newFile",
			payload: {
				fileType: fileType,
				parentFile: null
			}
		})
	}

	return (
		<Menu as="div" className="relative text-left">
			<Menu.Button className="acc-focus">
				<ViewButtonLabel>
					<FabricIcon name="FabricNewFolder"></FabricIcon>
				</ViewButtonLabel>
			</Menu.Button>
			<Menu.Items>
				<MenuContainer>
					<MenuSection>
						<Menu.Item>
							{({ active }) => (
								<Item onClick={() => createNewFile(FileTypes.BOOK)} className="text-important">
									<ItemIcon icon={FileIcons[FileTypes.BOOK]} />
									<ItemContent>
									New Book
									</ItemContent>
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item onClick={() => createNewFile(FileTypes.FOLDER)} className="text-important">
									<ItemIcon icon={FileIcons[FileTypes.FOLDER]} />
									<ItemContent>
									New Folder
									</ItemContent>
								</Item>
							)}
						</Menu.Item>
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
	);
}