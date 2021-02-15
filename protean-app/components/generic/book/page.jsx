import React, { useState } from 'react'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './header';
import { ListBulleted, ListItem, ListNumbered } from './lists';
import Paragraph from './paragraph'

export default function Page(props) {
  const [page, setPage] = useState(TEST_PAGE);

  return (
    <article className=
      {
        "p-" + props.padding + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {GeneratePageBlocks(page.content)}
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
      <div className="p-4 bg-red-600 text-white">
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

const TEST_PAGE = {
  title: "Grip",
  padding: "8",
  leading: "",
  fontSize: "base",
  fontStyle: "normal",
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "Grip System"
    },
    {
      uuid: "02",
      nested: false,
      component: "Paragraph",
      children: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
    },
    {
      uuid: "03",
      nested: false,
      component: "Header2",
      children: "Grip System"
    },
    {
      uuid: "04",
      nested: false,
      component: "Paragraph",
      children: "TODO"
    },
    {
      uuid: "05",
      nested: false,
      component: "Header3",
      children: "Grip Dice"
    },
    {
      uuid: "06",
      nested: false,
      component: "Paragraph",
      children: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
    },
    {
      uuid: "07",
      nested: false,
      component: "Header3",
      children: "Grip Risk"
    },
    {
      uuid: "08",
      nested: false,
      component: "Paragraph",
      children: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving.",
      props: {
        spaceAfter: "0"
      }
    },
    {
      uuid: "10",
      nested: true,
      component: "ListBulleted",
      children: [
        {
          uuid: "11",
          nested: false,
          component: "ListItem",
          children: "If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious."
        },
        {
          uuid: "12",
          nested: false,
          component: "ListItem",
          children: "If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic."
        },
        {
          uuid: "13",
          nested: false,
          component: "ListItem",
          children: "If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly."
        },
      ]
    },
    {
      uuid: "09",
      nested: false,
      component: "Dragon",
      children: "This component does not exist"
    },
  ]
}