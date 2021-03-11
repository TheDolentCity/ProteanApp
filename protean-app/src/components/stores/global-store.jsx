import React, { createContext, useContext, useReducer } from 'react';

const TEST_PAGE_1 = {
  uuid: "01",
  type: "PAGE",
  title: "PAGE 1 - Health System",
  parentTitle: "Chapter 1: Core Rules",
  content: 
`
# Paragraph
<H1 css="text-cyan-400">Paragraph</H1>
<H1 css="text-magenta-400">Paragraph</H1>
<H1 css="text-yellow-400">Paragraph</H1>

That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.
<P css="text-cyan-400">
That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.
</P>
<P css="text-magenta-400">
That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.
</P>
<P css="text-yellow-400">
That is a paragraph. A paragraph (from the [Ancient Greek](https://en.wikipedia.org/wiki/Ancient_Greek) παράγραφος, parágraphos, "to write beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language,paragraphs are usually an expected part of formal writing, used to organize longer prose.
</P>

# Paragraph
`
}

const ProteanDiceSystemPage = {
  uuid: "ProteanDiceSystemPage",
  type: "PAGE",
  title: "Dice System",
  parentTitle: "Chapter 1: Core Rules",
  props: {
    
  },
  content: 
`
<H1>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-magenta-500">
    Protean Dice System
  </span>
</H1>

Protean's dice system can be separated into two core mechanics: dynamic dice and dice outcomes. Dynamic dice are a method for changing the tone of dice rolls based on setting or genre. Dice outcomes are a spectrum of narrative success and failure to drive your story forward.

## Dynamic Dice
Most RPGs that use dice use one of two ways to determine an outcome from rolled dice: numerical results or symbolic results. A numerical outcome might be rolling a 14 on a d20 and then adding an attack modifier of +5 for a total of 19 and then comparing that to some target value to determine a success or failure result.

### Symbolic vs Numeric
Most RPGs that use dice use one of two ways to determine an outcome from rolled dice: numerical results or symbolic results. A numerical outcome might be rolling a 14 on a d20 and then adding an attack modifier of +5 for a total of 19 and then comparing that to some target value to determine a success or failure result. 

A symbolic result might be a custom-made d6 that has a sword icon on four sides and a skull icon on two. In these systems it is common for there to be many sub-systems (damage, critical success, narrative fortune, etc.) that rely on the different kinds of symbols. Distinct iconography can be easier to interpret than numeric values when it comes to those sub-systems.

Protean RPG uses a combination of the two. Most dice faces have a numerical result (-2, +1, +4) that you add together when making a check, but some dice will also have unique symbols with equally unique narrative effects.

Here is the default d12 configuration from Protean RPG:
<ConfiguredDie
  css="mb-8"
  die="12" 
  dieTags={["Risky", "Forceful", "Powerful"]}
  dieResults={["Failure", "-3 flux", "-2 flux", "-2 flux", "-1 flux", "-1 flux", "+1 flux", "+2 flux", "+3 flux", "+4 flux", "+5 flux", "+6 flux"]}>
</ConfiguredDie>

### Dice Configuration
Now that you understand how the dice faces work, you must also understand how they change. Protean RPG Core has a default dice configuration, but different settings and modules can (and are encouraged to) implement unique dice configurations. This means that the symbols and numeric values on these dice values change. For example, the configuration for a d12 in a Victorian Horror game might look like this (compare the Victorian one to the core):
<ConfiguredDie
  css="mb-8"
  die="12"
  dieTags={["Victorian", "Dangerous", "Hail Mary"]}
  dieResults={["Disaster", "Failure", "Failure", "-3 flux", "-2 flux", "-1 flux", "+4 flux", "+4 flux", "+4 flux", "+6 flux", "+6 flux", "+6 flux"]}>
</ConfiguredDie>
<ConfiguredDie
  css="mb-8"
  die="12" 
  dieTags={["Core", "Risky", "Powerful"]}
  dieResults={["Failure", "-3 flux", "-2 flux", "-2 flux", "-1 flux", "-1 flux", "+1 flux", "+2 flux", "+3 flux", "+4 flux", "+5 flux", "+6 flux"]}>
</ConfiguredDie>

#### Physical Dice Disclaimer
Unfortunately, the fluctuations in dice faces means I cannot easily produce physical dice for the game as it may change based on the module or system run that day, but I have provided the ability to upload editable dice configurations to the Protean App and simulate rolling them there.

### Dice Sizes and Representations
Protean uses seven different polyhedral dice. The most common is the six-sided die or 'd6'. This format is used to represent dice the vast majority of the time. For example, the seven polyhedral dice are commonly called d4, d6, d8, d10, d12, and d20. They are represented this way in both the Protean App and the Protean RPG. Other sizes of dice, such as d3, d66, or d100, can be rolled using a combination of the above dice.
`
}

const ProteanBreakersPage = {
  uuid: "ProteanBreakersPage",
  type: "PAGE",
  title: "Breakers",
  parentTitle: "Chapter 1: Core Rules",
  props: {

  },
  content:
`
# Breakers
A breaker represents a vital aspect of a character that can temporarily, or permanently, be broken. It is a tracker-based mechanic that can be used to mimic behaviors like hit points. Every breaker has a name, description, and initial value. The Advocate and Actors must work together to interpret what happens when a character's breaker reaches the breaking point (normally 0). 
`
}

const TEST_PAGE_3 = {
  uuid: "03",
  type: "PAGE",
  title: "PAGE 3 - Weapon System",
  parentTitle: "Chapter 2: The Advocate",
  props: {
    
  },
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 3"
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

const TEST_PAGE_4 = {
  uuid: "04",
  type: "PAGE",
  title: "Chapter 2: The Advocate",
  props: {
    
  },
  content: [
    {
      uuid: "01",
      nested: false,
      component: "Header1",
      children: "PAGE 4"
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

const CarterGuyusSheet = {
  uuid: "CarterGuyusSheet",
  type: "SHEET",
  title: "Carter Guyus",
  parentTitle: "Character Sheet",
  props: {

  },
  content:
`
<DiceBlock></DiceBlock>
`
}

const TEST_BOOK_1 = {
  uuid: "01",
  type: "BOOK",
  title: "Protean RPG",
  content: [
    ProteanDiceSystemPage,
    ProteanBreakersPage
  ]
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
  files: [
    TEST_BOOK_1,
    CarterGuyusSheet
  ],
  activeFile: [
    CarterGuyusSheet
  ],
  activePage: [

  ]
};

const reducer = (globalState, action) => {
  switch (action.type) {
    case "uploadFile": 
      return {
        ...globalState,
        files: globalState.files.push(action.payload.file)
      }
    case "setActiveFile":
      return {
        ...globalState,
        activeFile: action.payload.activeFile
      }
    case "setActivePage":
      return {
        ...globalState,
        activePage: action.payload.activePage
      }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const GlobalStoreProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialGlobalState);

  return (
    <GlobalStoreContext.Provider value={{ globalState, dispatch }}>
      {children}
    </GlobalStoreContext.Provider>
  )
}

export const useGlobalStore = () => useContext(GlobalStoreContext);