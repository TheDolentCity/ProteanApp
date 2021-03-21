import React, { createContext, useContext, useReducer } from 'react';

const ProteanIs = {
  uuid: "ProteanIs",
  type: "PAGE",
  title: "Protean Is...",
  format: {

  },
  content:
`
# Protean Is...

---

## ... For Roleplaying With Friends
TODO

## ... A Story Game
TODO

## ... Cooperative
TODO

## ... Modular
TODO

## ... Accessible
TODO
`
}

const ProteanDiceSystemPage = {
  uuid: "ProteanDiceSystemPage",
  type: "PAGE",
  title: "Dice System",
  parentTitle: "Chapter 1: Core Rules",
  format: {

  },
  content: 
`
<H1>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-accent-600">
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

const ProteanSkeletonsAndFramesPage = {
  uuid: "ProteanSkeletonsAndFramesPage",
  type: "PAGE",
  title: "Skeletons & Frames",
  format: {

  },
  content:
`
# Skeletons
Every character in Protean has a skeleton made up of frames. The skeleton is the basic building blocks for your character's representation. If rolling dice is a verb then the skeleton frames are the nouns. They communicate to the player what state their character is in at any point in time. Most RPGs have frames in some form. With a few small differences, traditional hit points are frames. Frames are designed to be abstract to support all sorts of content, from hydration to mutation mechanics.

## Frames
A frame represents a vital aspect of your character that can temporarily, or permanently, be broken. Every frame has a name, description, numerical score, repair method, and defense. Injuries, misfortune, and emotions cause fractures that lower your frame's score as you play, but defenses can mitigate a fracture. When your frame reaches a score of 0 or lower it creates a shatter. The Advocate and Actors must work together to interpret shatters. The maximum frame score is 10.

### Fractures
Fractures are an abstract concept, but incuring one is always negative for a character. It can represent anything from emotional harm, to dishonor, to a biting insult. A fracture always has a targeted frame and a numerical value you subtract from your current frame's score. The maximum fracture score is 5.

### Defenses
When the Advocate declares a fracture to one of your frames you reduce it by your frame's associated defense. A defense can reduce a fracture to zero, but it can never increase your frame's score. The maximum defense score is 3.

Consider the following examples:
- Frame Score: 2 &rarr; Defense: 0 &rarr; Fracture: 2 &rarr; Final Frame Score: 0
- Frame Score: 2 &rarr; Defense: 1 &rarr; Fracture: 2 &rarr; Final Frame Score: 1
- Frame Score: 2 &rarr; Defense: 3 &rarr; Fracture: 2 &rarr; Final Frame Score: 2

### Shatters
A frame shatters once it has reached a score of 0 or lower. This is always negative, or at least mostly negative, for your character. TODO. The rest of this explanation needs to happen but it's long and difficult and I don't want to do it right now so I'll do it after the first playtest. Dante will explain this on the fly when they happen.
`
}

const ProteanModuleBasicFrames = {
  uuid: "ProteanModuleBasicFrames",
  type: "PAGE",
  title: "MODULE: Basic Frames",
  format: {

  },
  content:
`
<Subtitle>MODULE</Subtitle>

# Basic Frames
These frames are suggestions but they function as a good starting point for any game. Use these as a baseline and add or subtract to fit your game's setting and themes.

## Frames List
This module includes five basic frames. They cover most of the basic aspects of characters in stories. They have physical, emotional, and mental needs. They have tools and equipment to help them. And there is always an element of chance at play. As always, the most interesting thing is what happens when a frame's score reaches 0 and it shatters.

### Body
This frame represents health, pain, blood, and energy. Example Fractures: cuts, bruises, marathons, falls, lack of sleep, diseases, and poisons.

### Mind
This frame represents judgements, focus, and perception. Example fractures include concussions, isolation, horrible images, fear, and dark magics.

### Presence
This frame represents social acuity and how people treat you. Example fractures include poor appearance, dishonorable offense, uncouth behavior, and meltdowns.

### Luck
This frame represents fortune, opportunities, and blessings. Example fractures include going down a wrong path, making a loud noise, reckless decisions, and upsetting a god.

### Supplies
This frame represents physical resources, equipment, and money. Example fractures include using torches, eating rations, tying off rope, and getting pickpocketed.

## Shatters
TODO

### Body
TODO

**Battered:** is a body shatter type. TODO.

**Bleeding:** is a body shatter type. TODO.

**Exhausted:** is a body shatter type. TODO.

**Broken:** is a body shatter type. TODO.

### Mind
TODO

**Fuzzy:** is a mind shatter type. TODO.

**Obsession:** is a mind shatter type. TODO.

**Shock:** is a mind shatter type. TODO.

**Memory Loss:** is a mind shatter type. TODO.

### Presence
TODO

**Ignored:** is a presence shatter type. TODO.

**Insecure:** is a presence shatter type. TODO.

**Uncharacteristic:** is a presence shatter type. TODO.

**Disrespected:** is a presence shatter type. TODO.

### Luck
TODO

**Ignored:** is a luck shatter type. TODO.

**Insecure:** is a luck shatter type. TODO.

**Uncharacteristic:** is a luck shatter type. TODO.

**Disrespected:** is a luck shatter type. TODO.
`
}

const BloodMeridianSheet = {
  uuid: "Blood Meridian",
  type: "SHEET",
  title: "Blood Meridian",
  parentTitle: "Character Sheet",
  content: {
    title: "MECH:\\\\ Blood Meridian",
    numberBlocks: [
      {
        title: "Hull",
        fieldTitles: [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Score"
        ],
        fieldValues: [
          6,
          8,
          1,
          1
        ],
      },
      {
        title: "Evasion",
        fieldTitles: [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Score"
        ],
        fieldValues: [
          4,
          6,
          0,
          0
        ],
      },
      {
        title: "Systems",
        fieldTitles: [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Score"
        ],
        fieldValues: [
          5,
          5,
          0,
          0
        ],
      },
      {
        title: "Heat Capacity",
        fieldTitles: [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Score"
        ],
        fieldValues: [
          3,
          3,
          0,
          0
        ],
      },
    ],
    diceBlocks: [
      {
        title: "Size",
        dice: "1d10",
        description: "A titan's size represents their physical strength and resilience. The larger a titan is the bigger a wall they can run through and the better chance they'll have of wrestling another titan to the ground."
      },
      {
        title: "Speed",
        dice: "2d6",
        description: "A titan's speed represents their reaction time and capability for traversing terrain. The faster a titan the easier it will be to reposition and complete critical tasks quickly."
      },
      {
        title: "M35 Mjolnir Cannon",
        dice: "3d12",
        description: "Long spin up and reloading time.\n\nThe Mjolnir is a hard-mounted, multi-barrel auxiliary cannon that uses magnetic acceleration to fire stacks of airburst projectiles at its target."
      },
      {
        title: "Hand Cannons",
        dice: "1d6",
        description: "Hits hard. Very hard.\n\nThe hand cannon is a licensed version of GMS's Type-I Pistol, adapted for a much heavier caliber."
      },
      {
        title: "Anti-Materiel Rifle",
        dice: "2d12",
        description: "description description description description description description description description description description description description description description description description description description description description description description description description description"
      },
      {
        title: "Synthetic Muscle Netting",
        dice: "5d10",
        description: "Use this block instead of the size block when ramming or grappling other titans.\n\nYour titan has a modification that improves its catalytic and structural boosting capabilities."
      },
    ],
    noteBlocks: [
      {
        title: "Notes",
        description: "",
      },
      {
        title: "Shatters",
        description: "This is a list of your current shatters:\n- None yet",
      },
    ],
  },
}

const TEST_BOOK_1 = {
  uuid: "01",
  type: "BOOK",
  title: "Protean RPG",
  content: [
    ProteanIs,
    ProteanDiceSystemPage,
    ProteanSkeletonsAndFramesPage,
    ProteanModuleBasicFrames
  ]
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
  darkMode: false,
  files: [
    TEST_BOOK_1,
    BloodMeridianSheet
  ],
  activeFile: [
    BloodMeridianSheet
  ],
  activePage: [

  ],
  fileIcons: {
    "BOOK": "ReadingMode",
    "SHEET": "TextDocumentShared",
    "PAGE": "TextDocument",
  }
};

const reducer = (globalState, action) => {
  switch (action.type) {
    case "setDarkMode":
      return {
        ...globalState,
        darkMode: action.payload.darkMode
      }
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