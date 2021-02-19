import React, { useState } from 'react'
import { useGlobalStore } from "../../stores/global-store";
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './header';
import { ListBulleted, ListItem, ListNumbered } from './lists';
import Paragraph from './paragraph'

export default function Page(props) {
  const { globalState, dispatch } = useGlobalStore();

  // function GetActiveBook() {
  //   return globalState.books.find(book => book.uuid === globalState.activeBookId);
  // }

  // function GetActivePage() {
  //   return GetActiveBook().pages.find(page => page.uuid === globalState.activePageId);
  // }

  return (
    <article className=
      {
        "p-" + props.padding + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {GeneratePageBlocks(globalState.activePage.content)}
    </article>
  );
}

const Components = {
  "Header1": Header1,
  "Header2": Header2,
  "Header3": Header3,
  "Header4": Header4,
  "Header5": Header5,
  "Header6": Header6,
  "ListBulleted": ListBulleted,
  "ListNumbered": ListNumbered,
  "ListItem": ListItem,
  "Paragraph": Paragraph
}

function GeneratePageBlocks(blocks) {
  return blocks.map(block => PageBlock(block));
}

function PageBlock(block) {
  // Create an instance of a page block component if it exists
  if (typeof Components[block.component] !== "undefined") {
    // Check to see if this block has nested blocks inside of it
    if (block.nested === true) {
      // Recursively generate page blocks for nested components
      return React.createElement(
        Components[block.component],
        {
          key: block.uuid,
          block: block
        },
        GeneratePageBlocks(block.children)
      );
    }
    // Non-nested block (default)
    return React.createElement(
      Components[block.component], 
      {
        ...block.props,
        key: block.uuid,
        block: block
      },
      block.children
    );
  }
  
  // If no component exists, create an error component
  return CreateErrorComponent(block);
}

function CreateErrorComponent(block) {
  return React.createElement(
    () =>
      <div className="my-8 p-4 bg-red-600 text-white">
        <div className="font-extrabold">
          The component {block.component}({block.uuid}) does not exist.
        </div>
        <div className="">
          Check to make sure your JSON file does not have a typo in the block component <strong>AND</strong> make sure the component is included in page.jsx's Components dictionary.
        </div>
      </div>,
    { key: block.uuid }
  );
}

Page.defaultProps = {
  padding: "8",
  leading: "",
  fontSize: "base",
  fontStyle: "normal"
}