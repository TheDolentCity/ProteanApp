import { Menu } from '@headlessui/react';
import React from 'react';
import FabricIcon from '../../generic/basic-inputs/fabric-icon';
import { useGlobalStore } from '../../storage/global-store';
import { FileIcons, FileTypes } from './../../storage/constants';
import FileExplorer from '../file-management/file-explorer';
import { MenuContainer, MenuSection } from '../../generic/basic-inputs/menu';
import Item from '../file-management/item';
import {
	ViewButtonLabel,
	ViewContainer,
	ViewContent,
	ViewDivider,
	ViewHeader,
	ViewIcon,
	ViewItem,
	ViewLabel,
	CloseViewButton
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
				<CreatePageDropdown></CreatePageDropdown>
				<CreateContainerDropdown></CreateContainerDropdown>
				<ViewDivider></ViewDivider>
				<ViewButtonLabel>
					<FabricIcon name="MoreVertical"></FabricIcon>
				</ViewButtonLabel>
				<CloseViewButton view={view}></CloseViewButton>
			</ViewHeader>
			<ViewContent>
				<FileExplorer></FileExplorer>
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
								<Item
									onClick={() => createNewFile(FileTypes.PAGE)}
									icon={FileIcons[FileTypes.PAGE]}
									important={true}>
									New Page
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item
									onClick={() => createNewFile(FileTypes.SHEET)}
									icon={FileIcons[FileTypes.SHEET]}
									important={true}>
									New Sheet
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
								<Item
									onClick={() => createNewFile(FileTypes.BOOK)}
									icon={FileIcons[FileTypes.BOOK]}
									important={true}>
									New Book
								</Item>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<Item
									onClick={() => createNewFile(FileTypes.FOLDER)}
									icon={FileIcons[FileTypes.FOLDER]}
									important={true}>
									New Folder
								</Item>
							)}
						</Menu.Item>
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
	);
}