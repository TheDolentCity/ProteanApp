import React, { useState } from 'react'
import { Header1, Header2, Header3, Header4, Header5, Header6 } from './header';
import { ListBulleted, ListNumbered } from './lists';
import Paragraph from './paragraph'

const TEST_CONTENT = [
  {
    uuid: "01",
    component: "Header1",
    text: "Grip System"
  },
  {
    uuid: "02",
    component: "Paragraph",
    text: "Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely."
  },
  {
    uuid: "03",
    component: "Header2",
    text: "Grip System"
  },
  {
    uuid: "04",
    component: "Paragraph",
    text: "TODO"
  },
  {
    uuid: "05",
    component: "Header3",
    text: "Grip Dice"
  },
  {
    uuid: "06",
    component: "Paragraph",
    text: "These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances."
  },
  {
    uuid: "07",
    component: "Header3",
    text: "Grip Risk"
  },
  {
    uuid: "08",
    component: "Paragraph",
    text: "If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving."
  },
]

export default function Page(props) {
  const [content, setContent] = useState(TEST_CONTENT);

  return (
    <article className=
      {
        "p-" + props.padding + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {content.map(block => PageBlock(block))}
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
  "Paragraph": Paragraph
}

function PageBlock(block) {
  // Create an instance of a page block component if it exists
  if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
      key: block.uuid,
      block: block
    });
  }
  
  // If no component exists, create an error component
  return React.createElement(
    () => <div className="">The component {block.component} DOES NOT EXIST</div>, 
    { key: block.uuid }
  );
}

Page.defaultProps = {
  padding: "8",
  leading: "",
  fontSize: "base",
  fontStyle: "normal"
}