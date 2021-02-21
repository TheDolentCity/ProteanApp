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
      <div className="flex w-full p-2 rounded shadow-md bg-white dark:bg-black">
        <CommandHeader1></CommandHeader1>
        <CommandHeader2></CommandHeader2>
        <CommandHeader3></CommandHeader3>
        <CommandHeader4></CommandHeader4>
      </div>
    </div>
  );
}

function ProteanDocument(props) {
  return (
    <div className="flex-grow px-8 text-left">
      <div className="w-full h-full rounded shadow-md bg-white dark:bg-black">
        <label className="block w-full h-full whitespace-normal overflow-y-auto focus:outline-cyan">
          <textarea className="block w-full h-full min-h-full max-h-full p-4 focus:outline-cyan" rows="1" placeholder="Enter content..."></textarea>
        </label>
      </div>
    </div>
  );
}

function CommandHeader1(props) {
  return (
    <button className="px-2 py-1 hover:bg-gray-300">
      <FabricIcon name="Header1"></FabricIcon>
    </button>
  );
}

function CommandHeader2(props) {
  return (
    <button className="px-2 py-1 hover:bg-gray-300">
      <FabricIcon name="Header2"></FabricIcon>
    </button>
  );
}

function CommandHeader3(props) {
  return (
    <button className="px-2 py-1 hover:bg-gray-300">
      <FabricIcon name="Header3"></FabricIcon>
    </button>
  );
}

function CommandHeader4(props) {
  return (
    <button className="px-2 py-1 hover:bg-gray-300">
      <FabricIcon name="Header4"></FabricIcon>
    </button>
  );
}