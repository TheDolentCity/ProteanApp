import React, { useState } from 'react';
import FabricIcon from '../generic/icons/fabric-icon';
import Surface, { SurfaceSection } from '../generic/layout/surface';

const TEST_STARTING_BLOCKS = [
  {
    uuid: "01",
    nested: false,
    component: "Header1",
    children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
    props: [
      "text-lg",
      "font-extralight",
      "leading-loose",
      "ml-6",
      "mr-2"
    ],
  }
]

export default function ProteanDocumentEditor(props) {
  const [blocks, setBlocks] = useState(TEST_STARTING_BLOCKS);
  
  return (
    <div className="flex flex-col w-full h-full py-8 space-y-6">
      <ProteanDocumentCommandBar></ProteanDocumentCommandBar>
      <ProteanDocument></ProteanDocument>
    </div>
  );
}

function ProteanDocumentCommandBar(props) {
  return (
    <div className="flex-none px-8 text-left">
      <div className="flex w-full py-2 rounded shadow-md bg-white dark:bg-black">
        <div className="px-2 border-r border-gray-300">
          <CommandPageAdd></CommandPageAdd>
          <CommandPageEdit></CommandPageEdit>
          <CommandSave></CommandSave>
        </div>
        <div className="px-2 border-r border-gray-300">
          <CommandHeader1></CommandHeader1>
          <CommandHeader2></CommandHeader2>
          <CommandHeader3></CommandHeader3>
          <CommandHeader4></CommandHeader4>
        </div>
        <div className="px-2 border-r border-gray-300">
          <CommandBulletedList></CommandBulletedList>
          <CommandNumberedList></CommandNumberedList>
        </div>
        <div className="px-2 border-r border-gray-300">
          <CommandWebComponents></CommandWebComponents>
        </div>
      </div>
    </div>
  );
}

function ProteanDocument(props) {
  return (
    <div className="flex-grow px-8 text-left">
      <div className="flex w-full h-full rounded shadow-md bg-white dark:bg-black">
        <label className="flex-grow w-full h-full whitespace-normal overflow-y-auto focus:outline-cyan">
          <textarea className="block w-full h-full min-h-full max-h-full p-4 focus:outline-cyan" rows="1" placeholder="Enter content..."></textarea>
        </label>
      </div>
    </div>
  );
}

function ProteanDocumentLineNumbers(props) {
  return (
    <ol className="flex-none">
      {
        props.document.split("\n").map(line => (
          <li className=""></li>
        ))
      }
    </ol>
  );
}

function Command(props) {
  return (
    <button className="px-2 py-1 hover:bg-gray-300">
      {props.children}
    </button>
  );
}

function CommandPageAdd(props) {
  return (
    <Command>
      <FabricIcon name="PageAdd"></FabricIcon>
    </Command>
  );
}

function CommandPageEdit(props) {
  return (
    <Command>
      <FabricIcon name="PageEdit"></FabricIcon>
    </Command>
  );
}

function CommandSave(props) {
  return (
    <Command>
      <FabricIcon name="Save"></FabricIcon>
    </Command>
  );
}

function CommandHeader1(props) {
  return (
    <Command>
      <FabricIcon name="Header1"></FabricIcon>
    </Command>
  );
}

function CommandHeader2(props) {
  return (
    <Command>
      <FabricIcon name="Header2"></FabricIcon>
    </Command>
  );
}

function CommandHeader3(props) {
  return (
    <Command>
      <FabricIcon name="Header3"></FabricIcon>
    </Command>
  );
}

function CommandHeader4(props) {
  return (
    <Command>
      <FabricIcon name="Header4"></FabricIcon>
    </Command>
  );
}

function CommandBulletedList(props) {
  return (
    <Command>
      <FabricIcon name="BulletedList"></FabricIcon>
    </Command>
  );
}

function CommandNumberedList(props) {
  return (
    <Command>
      <FabricIcon name="NumberedList"></FabricIcon>
    </Command>
  );
}

function CommandWebComponents(props) {
  return (
    <Command>
      <FabricIcon name="WebComponents"></FabricIcon>
    </Command>
  );
}