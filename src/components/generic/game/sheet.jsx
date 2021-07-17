import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Menu } from '@headlessui/react';
import { useGlobalStore } from '../../storage/global-store';
import CircleIcon from '../basic-inputs/circle-icon';
import { DocumentModes, WidgetTypes } from './../../storage/constants';
import { useDocumentModeContext } from '../../protean/view-management/view-document';
import { Widget, WidgetContainer } from './widget';
import { MenuContainer, MenuSection } from '../basic-inputs/menu';
import Item, { ItemContent, ItemIcon } from '../../protean/file-management/item';
import DiceLine from './blocks/dice-line';
import TextLine from './blocks/text-line';

const WidgetTypeList = [
	WidgetTypes.SheetWidgetContainerFull,
	WidgetTypes.SheetWidgetContainerDynamic,
	WidgetTypes.DiceHeader,
	WidgetTypes.DiceParagraph,
	WidgetTypes.Header1,
	WidgetTypes.Header2,
	WidgetTypes.Header3,
	WidgetTypes.Header4,
	WidgetTypes.Paragraph,
];

export default function Sheet({ sheetId }) {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(globalState.fileSystem.getFile(sheetId));
	globalState.fileSystem.print();
	console.log(`Uuid:${sheetId}\nSheet:${JSON.stringify(globalState.fileSystem.getFile(sheetId), null, 2)}\nContent:${JSON.stringify(globalState.fileSystem.getFile(sheetId)?.content, null, 2)}`);

  // Sends the local sheet data to global storage
  const updateSheet = (value) => {
		// console.log(`Sheet:${sheet}\nContent:${sheet?.content}\nIndex:${index}`);
    if (sheet === undefined) {
      console.log(`sheet is undefined on Sheet object.`);
    }
    else {
      let newSheet = { ...value };
      setSheet(newSheet);
			console.log("Dispatch Sheet:\n" + JSON.stringify(newSheet, null, 2));
      dispatch({
        type: "updateFile",
        payload: {
          file: newSheet
        }
      });
    }
  }

  return (
    <SheetWidgetContainer
      widgetContainer={sheet} 
      onChange={updateSheet}>
    </SheetWidgetContainer>
  );
}

function SheetWidgetContainer({ widgetContainer, onChange }) {
  const [widgets, setWidgets] = useState(widgetContainer);
	const mode = useDocumentModeContext();
	console.log("SheetWidgetContainer\n" + JSON.stringify(widgetContainer, null, 2));

  // Update sheet when widget container changes
  useEffect(() => {
    if (widgetContainer !== null && widgetContainer !== undefined) {
      setWidgets(widgetContainer);
    }
  }, [widgetContainer]);

  const updateWidgets = (value, index) => {
    if (widgets?.content[index] === undefined) {
      console.log(`widgets.content[${index}] is undefined on SheetWidgetContainer object.`);
    }
    else {
      let newWidgets = { ...widgets };
      newWidgets.content[index] = value;
      setWidgets(newWidgets);
      onChange(newWidgets);
    }
  }

	const addWidget = (value) => {
    if (widgets?.content === undefined) {
      console.log(`widgets.content is undefined on SheetWidgetContainer object.`);
    }
    else {
      let newWidgets = { ...widgets };
      newWidgets.content.push(value);
      setWidgets(newWidgets);
      onChange(newWidgets);
    }
	}

  if (typeof(widgets?.content) === typeof([])) {
    return (
      <WidgetContainer> {
				widgets?.content?.map((widget, index) => (
					<SheetWidget
						key={widget.uuid}
						widget={widget}
						onChange={(newWidget) => updateWidgets(newWidget, index)}>
					</SheetWidget>
				))}
				{
					mode === DocumentModes.WRITING
					?
					<div className="col-span-full">
						<WidgetCreator onAddWidget={addWidget}></WidgetCreator>
					</div>
					:
					<span></span>
				}
      </WidgetContainer>
    );
  }
  else return <div></div>;
}

function WidgetCreator({ onAddWidget }) {
	const addWidget = (widgetType) => {
		switch (widgetType) {
			case WidgetTypes.SheetWidgetContainerFull:
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"content": []
				})
				break;
			case WidgetTypes.SheetWidgetContainerDynamic:
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"content": []
				})
				break;
			case WidgetTypes.DiceHeader:
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"title": "",
					"dice": ""
				})
				break;
			case WidgetTypes.DiceParagraph:
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"title": "",
					"dice": ""
				})
				break;
			default:
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"text": ""
				})
				break;
		}
	}

	return (
		<Menu as="div" className="w-full text-left">
			<Menu.Button className="acc-focus w-full mt-2 xl:mt-4 hover:raise-10">
				<Widget className="p-2 xl:p-4">
					<CircleIcon name="Add" size="sm" className="text-white dark:text-black bg-black dark:bg-white"></CircleIcon>
				</Widget>
			</Menu.Button>
			<Menu.Items className="mx-1 xl:mx-3">
				<MenuContainer className="max-w-84">
					<MenuSection>
						{
							WidgetTypeList.map((widgetType) => (
								<Menu.Item key={widgetType}>
									{({ active }) => (
										<Item
											onClick={() => addWidget(widgetType)}
											className="text-important">
											<ItemIcon name="ChildOf" />
											<ItemContent>
												{widgetType}
											</ItemContent>
										</Item>
									)}
								</Menu.Item>
							))
						}
					</MenuSection>
				</MenuContainer>
			</Menu.Items>
		</Menu>
	);
}

function SheetWidget({ widget, onChange }) {
  switch (widget?.type) {
    case WidgetTypes.SheetWidgetContainerFull:
      return (
				<Widget className="col-span-12">
					<SheetWidgetContainer
						widgetContainer={widget}
						onChange={onChange}>
					</SheetWidgetContainer>
				</Widget>
      );
		case WidgetTypes.SheetWidgetContainerDynamic:
			return (
				<Widget className="col-span-12 xl:col-span-6">
					<SheetWidgetContainer
						widgetContainer={widget}
						onChange={onChange}>
					</SheetWidgetContainer>
				</Widget>
			);
    case WidgetTypes.DiceHeader:
      return (
        <DiceLine
          data={widget}
          onChange={onChange}
					className="text-base font-bold text-important">
        </DiceLine>
      );
		case WidgetTypes.DiceParagraph:
			return (
				<DiceLine
					data={widget}
					onChange={onChange}
					className="text-base">
				</DiceLine>
			);
		case WidgetTypes.Header1:
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-none text-7xl tracking-tighter font-bold text-important">
				</TextLine>
			);
		case WidgetTypes.Header2:
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-none text-3xl font-semibold text-important">
				</TextLine>
			);
		case WidgetTypes.Header3:
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-normal text-xl font-semibold text-important">
				</TextLine>
			);
		case WidgetTypes.Header4:
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="text-base font-bold">
				</TextLine>
			);
		case WidgetTypes.Paragraph:
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="text-base">
				</TextLine>
			);
    // case "DiceBlock":
    //   return (
    //     <DiceBlock
    //       static={false}
    //       diceBlock={widget}
    //       onChange={onChange}>
    //     </DiceBlock>
    //   );
    // case "NoteBlock":
    //   return (
    //     <NoteBlock
    //       static={false}
    //       noteBlock={widget}
    //       onChange={onChange}>
    //     </NoteBlock>
    //   );
    // case "NumberBlock":
    //   return (
    //     <NumberBlock
    //       static={false}
    //       numberBlock={widget}
    //       onChange={onChange}>
    //     </NumberBlock>
    //   );
    // case "StatBlock":
    //   return (
    //     <StatBlock
    //       static={false}
    //       statBlock={widget}
    //       onChange={onChange}>
    //     </StatBlock>
    //   );
    // case "TextBlock":
    //   return (
    //     <TextBlock
    //       static={false}
    //       textBlock={widget}
    //       onChange={onChange}>
    //     </TextBlock>
    //   );
    default:
      console.log(`Widget type '${widget?.type}' is not handled by SheetWidget component.`);
  }
}