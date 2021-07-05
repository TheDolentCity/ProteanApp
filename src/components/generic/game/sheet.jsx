import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Popover } from '@headlessui/react';
import { useGlobalStore } from '../../storage/global-store';
import FabricIcon from '../basic-inputs/fabric-icon';
import WritingMode from '../../protean/app-modes/writing-mode';
import { Widget, WidgetContainer } from './widget';
import NumberBlock from './blocks/number-block';
import DiceBlock from './blocks/dice-block';
import NoteBlock from './blocks/note-block';
import StatBlock from './stat-block';
import TextBlock from './blocks/text-block';
import DiceLine from './blocks/dice-line';
import TextLine from './blocks/text-line';

const WidgetTypes = [
	{
		"type": "SheetWidgetContainerFull",
		"title": "Container (Full Width)"
	},
	{
		"type": "SheetWidgetContainerDynamic",
		"title": "Container (Dynamic Size)"
	},
	{
		"type": "DiceHeader",
		"title": "Dice Header"
	},
	{
		"type": "DiceParagraph",
		"title": "Dice Paragraph"
	},
	{
		"type": "Header1",
		"title": "Header 1"
	},
	{
		"type": "Header2",
		"title": "Header 2"
	},
	{
		"type": "Header3",
		"title": "Header 3"
	},
	{
		"type": "Header4",
		"title": "Header 4"
	},
	{
		"type": "Paragraph",
		"title": "Paragraph"
	}
];

export default function Sheet({ fileData }) {
  const { globalState, dispatch } = useGlobalStore();
  const [sheet, setSheet] = useState(fileData);

  // Update sheet when fileData changes
  useEffect(() => {
    if (fileData !== null && fileData !== undefined) {
      setSheet(fileData);
    }
  }, [fileData]);

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
        type: "updateActiveFile",
        payload: {
          activeFile: newSheet
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
				<WritingMode className="col-span-full">
					<WidgetCreator onAddWidget={addWidget}></WidgetCreator>
				</WritingMode>
      </WidgetContainer>
    );
  }
  else return <div></div>;
}

function WidgetCreator({ onAddWidget }) {
	const addWidget = (widgetType) => {
		switch (widgetType) {
			case "SheetWidgetContainerFull":
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"content": []
				})
				break;
			case "SheetWidgetContainerDynamic":
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"content": []
				})
				break;
			case "DiceHeader":
				onAddWidget({
					"uuid": uuidv4(),
					"type": widgetType,
					"title": "",
					"dice": ""
				})
				break;
			case "DiceParagraph":
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
		<Popover className="relative">
			<Popover.Button className="acc-focus w-full mt-2 xl:mt-4">
				<Widget className="p-2 xl:p-4 bg-theme">
					<FabricIcon name="Add" className=""></FabricIcon>
				</Widget>
			</Popover.Button>
			<Popover.Panel className="absolute z-10">
				<div className="flex flex-col max-w-72 shadow-xl bg-white dark:bg-gray-700">
					{
						WidgetTypes.map((widgetType) => (
							<button 
								key={widgetType.type}
								onClick={() => addWidget(widgetType.type)} 
								className="acc-focus flex w-full px-3 py-1 items-center text-left overflow-hidden hover:raise-5">
      					<FabricIcon name="Add" className="mr-2 text-theme"></FabricIcon>
								<div className="w-full truncate">
									{widgetType.title}
								</div>
							</button>
						))
					}
				</div>
			</Popover.Panel>
		</Popover>
	);
}

function SheetWidget({ widget, onChange }) {
  switch (widget?.type) {
    case "SheetWidgetContainerFull":
      return (
				<Widget className="col-span-12">
					<SheetWidgetContainer
						widgetContainer={widget}
						onChange={onChange}>
					</SheetWidgetContainer>
				</Widget>
      );
		case "SheetWidgetContainerDynamic":
			return (
				<Widget className="col-span-12 xl:col-span-6">
					<SheetWidgetContainer
						widgetContainer={widget}
						onChange={onChange}>
					</SheetWidgetContainer>
				</Widget>
			);
    case "DiceHeader":
      return (
        <DiceLine
          data={widget}
          onChange={onChange}
					className="text-base font-bold">
        </DiceLine>
      );
		case "DiceParagraph":
			return (
				<DiceLine
					data={widget}
					onChange={onChange}
					className="text-base">
				</DiceLine>
			);
		case "Header1":
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-none text-7xl tracking-tighter font-bold text-important">
				</TextLine>
			);
		case "Header2":
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-none text-3xl font-semibold text-important">
				</TextLine>
			);
		case "Header3":
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="py-4 leading-normal text-xl font-semibold text-important">
				</TextLine>
			);
		case "Header4":
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="text-base font-bold">
				</TextLine>
			);
		case "Paragraph":
			return (
				<TextLine
					data={widget}
					onChange={onChange}
					className="text-base">
				</TextLine>
			);
    case "DiceBlock":
      return (
        <DiceBlock
          static={false}
          diceBlock={widget}
          onChange={onChange}>
        </DiceBlock>
      );
    case "NoteBlock":
      return (
        <NoteBlock
          static={false}
          noteBlock={widget}
          onChange={onChange}>
        </NoteBlock>
      );
    case "NumberBlock":
      return (
        <NumberBlock
          static={false}
          numberBlock={widget}
          onChange={onChange}>
        </NumberBlock>
      );
    case "StatBlock":
      return (
        <StatBlock
          static={false}
          statBlock={widget}
          onChange={onChange}>
        </StatBlock>
      );
    case "TextBlock":
      return (
        <TextBlock
          static={false}
          textBlock={widget}
          onChange={onChange}>
        </TextBlock>
      );
    default:
      console.log(`Widget type '${widget?.type}' is not handled by SheetWidget component.`);
  }
}