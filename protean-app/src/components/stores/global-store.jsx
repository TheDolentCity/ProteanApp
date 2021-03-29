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

const ProteanQuickReference = {
  uuid: "ProteanQuickReference",
  type: "PAGE",
  title: "Quick Reference",
  parentTitle: "Chapter 1: Core Rules",
  format: {

  },
  content:
`
# Quick Rules Reference
This page contains the smallest summary possible of all the rules for quick reference during play.

## Dice Tables

<DieTable 
  die="d4"
  description="You are always likely to succeed with this die, but if you do there will always be a consequence.">
  <DieTableRow index={1} fracture="-3" result="Failure"></DieTableRow>
  <DieTableRow index={2} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={3} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={4} fracture="+2" result="Threat"></DieTableRow>
</DieTable>

<DieTable
  die="d6"
  description="This die's worst result is boon, but it does occur more often than failure on other dice.">
  <DieTableRow index={1} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={2} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={3} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={4} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={5} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={6} fracture="+3" result="Success"></DieTableRow>
</DieTable>

<DieTable
  die="d8"
  description="This die commonly succeeds with strong results, but if it fails it is always a disaster.">
  <DieTableRow index={1} fracture="-5" result="Disaster"></DieTableRow>
  <DieTableRow index={2} fracture="-5" result="Disaster"></DieTableRow>
  <DieTableRow index={3} fracture="-5" result="Disaster"></DieTableRow>
  <DieTableRow index={4} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={5} fracture="+1" result="Threat"></DieTableRow>
  <DieTableRow index={6} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={7} fracture="+4" result="Success"></DieTableRow>
  <DieTableRow index={8} fracture="+5" result="Triumph"></DieTableRow>
</DieTable>

<DieTable
  die="d10"
  description="This die is unlikely to have a failure result and even if it does it is likely to be a minimally damaging one. The downside is that the die is very chaotic.">
  <DieTableRow index={1} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={2} fracture="-3" result="Failure"></DieTableRow>
  <DieTableRow index={3} fracture="-2" result="Boon"></DieTableRow>
  <DieTableRow index={4} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={5} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={6} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={7} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={8} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={9} fracture="+3" result="Success"></DieTableRow>
  <DieTableRow index={10} fracture="+4" result="Success"></DieTableRow>
</DieTable>

<DieTable
  die="d12"
  description="This die has the highest chance of triumph, but also suffers from a high chance of extreme failure.">
  <DieTableRow index={1} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={2} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={3} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={4} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={5} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={6} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={7} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={8} fracture=" 0" result="Chaos"></DieTableRow>
  <DieTableRow index={9} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={10} fracture="+5" result="Triumph"></DieTableRow>
  <DieTableRow index={11} fracture="+5" result="Triumph"></DieTableRow>
  <DieTableRow index={12} fracture="+5" result="Triumph"></DieTableRow>
</DieTable>

<DieTable
  die="d20"
  description="This die has the most even distribution of results, making it the default die. It excels at nothing.">
  <DieTableRow index={1} fracture="-5" result="Disaster"></DieTableRow>
  <DieTableRow index={2} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={3} fracture="-4" result="Failure"></DieTableRow>
  <DieTableRow index={4} fracture="-3" result="Failure"></DieTableRow>
  <DieTableRow index={5} fracture="-3" result="Failure"></DieTableRow>
  <DieTableRow index={6} fracture="-3" result="Failure"></DieTableRow>
  <DieTableRow index={7} fracture="-2" result="Boon"></DieTableRow>
  <DieTableRow index={8} fracture="-2" result="Boon"></DieTableRow>
  <DieTableRow index={9} fracture="-2" result="Boon"></DieTableRow>
  <DieTableRow index={10} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={11} fracture="-1" result="Boon"></DieTableRow>
  <DieTableRow index={12} fracture="+1" result="Threat"></DieTableRow>
  <DieTableRow index={13} fracture="+1" result="Threat"></DieTableRow>
  <DieTableRow index={14} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={15} fracture="+2" result="Threat"></DieTableRow>
  <DieTableRow index={16} fracture="+3" result="Success"></DieTableRow>
  <DieTableRow index={17} fracture="+3" result="Success"></DieTableRow>
  <DieTableRow index={18} fracture="+3" result="Success"></DieTableRow>
  <DieTableRow index={19} fracture="+4" result="Success"></DieTableRow>
  <DieTableRow index={20} fracture="+5" result="Triumph"></DieTableRow>
</DieTable>
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

Here is the default d20 configuration from Protean RPG:
<DieTable
  die="d20"
  description="This is the default die. It is very reliable no matter how many dice are rolled and contains all but the chaos dice result."
  dieData={
    [
      {
        fracture: "-5",
        result: "Disaster"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+4",
        result: "Success"
      },
      {
        fracture: "+5",
        result: "Triumph"
      }
    ]
  }>
</DieTable>

### Dice Configuration
Now that you understand how the dice faces work, you must also understand how they change. Protean RPG Core has a default dice configuration, but different settings and modules can (and are encouraged to) implement unique dice configurations. This means that the symbols and numeric values on these dice values change. For example, the configuration for a d12 in a Victorian Horror game might look like this (compare the Victorian one to the core):
<DieTable
  die="d20"
  description="This is the default die. It is very reliable no matter how many dice are rolled and contains all but the chaos dice result."
  dieData={
    [
      {
        fracture: "-5",
        result: "Disaster"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+4",
        result: "Success"
      },
      {
        fracture: "+5",
        result: "Triumph"
      }
    ]
  }>
</DieTable>

<Spacer space="mx-3"></Spacer>

<DieTable
  die="d20"
  description="This is the default die. It is very reliable no matter how many dice are rolled and contains all but the chaos dice result."
  dieData={
    [
      {
        fracture: "-5",
        result: "Disaster"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+4",
        result: "Success"
      },
      {
        fracture: "+5",
        result: "Triumph"
      }
    ]
  }>
</DieTable>

<Spacer space="mx-3"></Spacer>

<DieTable
  die="d20"
  description="This is the default die. It is very reliable no matter how many dice are rolled and contains all but the chaos dice result."
  dieData={
    [
      {
        fracture: "-5",
        result: "Disaster"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-4",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-3",
        result: "Failure"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-2",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "-1",
        result: "Boon"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+1",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+2",
        result: "Threat"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+3",
        result: "Success"
      },
      {
        fracture: "+4",
        result: "Success"
      },
      {
        fracture: "+5",
        result: "Triumph"
      }
    ]
  }>
</DieTable>

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

const LancerGear = {
  uuid: "LancerGear",
  type: "PAGE",
  title: "Lancer Gear",
  format: {

  },
  content:
`
# Lancer Gear
This is a collection of GMS weapons, systems, and modifications that can be installed into lancers.

## GMS Weapons

<BlockContainer>
  <DiceBlock
    staticTitle="Anti-Materiel Rifle"
    staticDice="2d12"
    staticDescription="A lancer-sized, magnetic railgun (Extreme Range, Accurate, Armor Piercing, Loading, Ordnance).">
  </DiceBlock>
  
  <DiceBlock
    staticTitle="Charged Blade"
    staticDice="2d8"
    staticDescription="An electrified and super-heated sword that can melt through most lancer armor (Melee Range, Armor Piercing).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Howitzer"
    staticDice="2d10"
    staticDescription="A mounted cannon that turns a lancer into portable artillery (Long Range, Arcing, Blast, Inaccurate, Loading, Ordnance).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Machine Gun"
    staticDice="3d4"
    staticDescription="A reliable, rapid-fire gun that utilizes a drum magazine (Medium Range, Inaccurate).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Missile Racks"
    staticDice="3d6"
    staticDescription="Auxiliary launchers with tracking capabilities (Medium Range, Blast, Loading, Tracking).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Shotgun"
    staticDice="3d20"
    staticDescription="A multi-purpose kinetic and flechette gun with ricochetting rounds (Close Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Thermal Rifle"
    staticDice="2d20"
    staticDescription="A powerful, overheating laser that can burn through multiple lancers in one shot (Long Range, Armor Piercing, Self-Heating).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Thermal Pistols"
    staticDice="2d12"
    staticDescription="Dual pistols capable of melting a lancer at close range when they strike cracks in the armor (Close Range, Armor Piercing, Self-Heating).">
  </DiceBlock>
</BlockContainer>
`
}

const TitanfallExpansionTitanGear = {
  uuid: "TitanfallExpansionTitanGear",
  type: "PAGE",
  title: "Titan Gear",
  format: {

  },
  content:
`
# Titan Gear
This is a collection of weapons, armor, and modifications that titans can equip.

## Titan Weapons
TODO

<BlockContainer>
  <DiceBlock
    staticTitle="XO-16 Automatic Rifle"
    staticDice="3d6"
    staticDescription="Fully automatic ballistic weapon that fires 1.6 inch slugs (Inaccurate, Medium Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="40mm Tracker Cannon"
    staticDice="1d8"
    staticDescription="A semi-automatic 40mm cannon that fires semi-guided explosive rounds (Tracking, Long Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="T-203 Thermite Launcher"
    staticDice="1d6"
    staticDescription="A single shot, fire-based weapon. The rounds burn extremely hot, doing massive damage to anything it touches (Burns, Melts, Medium Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Leadwall"
    staticDice="2d10"
    staticDescription="A powerful shotgun that does massive damage at short range with its many pellets (Close Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Splitter Rifle"
    staticDice="1d8"
    staticDescription="An energy rifle with two modes: rapid fire and regular fire. Rapid fire heats you up quickly.. (Medium Range, you may roll 2d8 instead but take 1 Heat).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Plasma Railgun"
    staticDice="1d12"
    staticDescription="A sniper rifle that utilizes an electro-magnetic rail to fire kinetic rounds across vast distances (Armor Piercing, Loading, Extreme Range).">
  </DiceBlock>

  <DiceBlock
    staticTitle="Predator Cannon"
    staticDice="1d12"
    staticDescription="A powerful minigun with a long spin up time (Spin Up, Slowing, Long Range).">
  </DiceBlock>
</BlockContainer>
`
}

const ProteanRPG = {
  uuid: "ProteanRPG.json",
  type: "BOOK",
  title: "Protean RPG",
  content: [
    ProteanIs,
    ProteanQuickReference,
    ProteanDiceSystemPage,
    ProteanSkeletonsAndFramesPage,
    ProteanModuleBasicFrames,
  ]
}

const SupplementLancer = {
  uuid: "Supplement-Lancer.json",
  type: "BOOK",
  title: "Supplement - Lancer",
  content: [
    LancerGear,
  ]
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
  darkMode: false,
  files: [
    ProteanRPG
  ],
  activeFile: {

  },
  activePage: {

  },
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
        files: [...globalState.files, action.payload.file]
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