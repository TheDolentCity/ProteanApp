import React, { createContext, useContext, useState, useReducer } from 'react';

const ProteanIs = {
  uuid: "ProteanIs.json",
  metadata: {
    type: "PAGE",
    title: "Protean Is...",
  },
  content:
`# Protean Is...

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

const ThePlayers = {
  uuid: "ThePlayers.json",
  metadata: {
    type: "PAGE",
    title: "The Players",
  },
  content:
`# The Players
Everyone reading this right now is a player, no matter what you do while playing. However, there are two primary ways to play Protean: as an Advocate, or as an Actor.

## The Advocate
Most roleplaying games have one player who acts as an authority to settle conflict and play all the characters in the game that aren't "player" characters. This is commonly referred to as the Game Master, GM, or Referee, but in Protean we call this player the Advocate.

The Advocate's role in Protean is similar to that of a traditional GM, but they are not placed on a pedestal above the rest of the players. The story is not their story. The story belongs to every person in the group. The Advocate's job is to ensure that remains the case.

The Advocate exists to draw limits and work with the Actors to create a shared narrative, not to make their own story and lets the players move around in it.

You are not the antagonist that everyone else fights against. You are not the master of the rules with a righteous decree to punish anyone who dares not follow them. You are a friend at the table who leads discussions and helps fill in the sets, extras, and other characters that create a great story. In short, you are an Advocate of the story and the Actors inside of it.

## The Actors
Most tabletop roleplaying games have players create and then control a single character, called a player character or PC. But in Protean, we refer to any player who has a single character that they control/roleplay as an Actor. This is representative of their overall role in the game. However, every Actor is also expected to take on a unique role in the game.

## Actor Roles
To ensure even distribution of labor, facilitate ease of play, and simply not place all responisiblites of the game on the Advocate, certain responisiblites are distributed among the Actors. Everyone chooses a unique role during session 0 of the game.

### Palaver
- Mediates the Actors during decision making and makes sure everyone's voice is heard.
- Relays the final decision regarding Actors actions to the Advocate.
- **Do not** impose your view on others.
- **Do not** talk over others.
- **Do not** give an answer to the Advocate without consensus.

### Mapper
- Records notes about important world details and locales.
- Makes diagrams of locations if necessary.
- **Do not** spend time creating diagrams when you should be paying attention.
- **Do not** spend time creating diagrams if no Actor believes they are necessary.

### Chronicler
- Records the events of a game session.
- Notes what transpires from a high level.
- Notes the names of important characters and their purpose in the story.
- **Do not** write too detailed; these should be used to remind any other player what happened last session or who a specific character is, but it does not need to be an autobiography.
- **Do not** spend time writing when you should be paying attention.

### Quartermaster
- Manage shared party equipment and consumables (light, rations, batteries, etc.).
- Reminds other Actors of the equipment, consumable, and carry rules when necessary.
- **Do not** wait for someone to tell you what equipment they have or are consuming, pay attention and ask questions if you're unsure.
- **Do not** require your character to possess or use the shared equipment just because you are recording it.

### Timekeeper
- Track literal time if it is used mechanically.
- Track abstract time if it is used mechanically.
- Track world time to help keep other Actors grounded in the fiction.
- Prompt the Advocate if they did not clarify how much time has passed.
- **Do not** remind players of the time too often.
- **Do not** remind someone how much time something will take if they clearly know it will take time.
`
}

const RulesInBrief = {
  uuid: "RulesInBrief.json",
  metadata: {
    type: "PAGE",
    title: "Rules In Brief",
  },
  content:
`# Rules In Brief

## Character Sheets
Character sheets have several components to represent your character. Most of these are referred to as blocks. 

## Making Checks

### 1. Determine Starting Dice Pool
If you're making a check with a specific dice block you will start with the associated dice as your pool. If you don't have any dice block that would apply to the check, then you start with 1d20.

### 2. Apply Advantages
Add +1 die if the Advocate says you have advantage.

### 3. Apply Difficulty
Subtract -1 or -2 dice if the Advocate deems this check hard or challenging.

### 4. Roll Dice
Roll all of the dice in your pool and take the highest result. If a rule stated that you take the lowest result then obviously do that instead.

### 5. Determine Result
Use the dice tables and dice result references below to interpret the check results.

## Dice Table References

<DieTable
  die="d4"
  description="FAIL FORWARD: There is a lower chance of success using this die, but the worst case scenario still provides an advantage.">
  <DieTableRow index={1} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={2} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={3} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={4} result="3 Success"></DieTableRow>
</DieTable>

<DieTable
  die="d6"
  description="GO BIG OR GO HOME: This die has the highest chance of triumph AND disaster.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Disaster!"></DieTableRow>
  <DieTableRow index={3} result="Disaster!"></DieTableRow>
  <DieTableRow index={4} result="3 Success"></DieTableRow>
  <DieTableRow index={5} result="3 Success"></DieTableRow>
  <DieTableRow index={6} result="Triumph!"></DieTableRow>
</DieTable>

<DieTable
  die="d8"
  description="GIVE AND TAKE: If you succeed there is always a drawback, but if you fail there is always a boon.">
  <DieTableRow index={1} result="Failure 5, Advantage 2"></DieTableRow>
  <DieTableRow index={2} result="Failure 3, Advantage 1"></DieTableRow>
  <DieTableRow index={3} result="Failure 3, Advantage 1"></DieTableRow>
  <DieTableRow index={4} result="Failure 1, Advantage 1"></DieTableRow>
  <DieTableRow index={5} result="Success 1, Disadvantage 1"></DieTableRow>
  <DieTableRow index={6} result="Success 3, Disadvantage 1"></DieTableRow>
  <DieTableRow index={7} result="Success 3, Disadvantage 1"></DieTableRow>
  <DieTableRow index={8} result="Success 5, Disadvantage 2"></DieTableRow>
</DieTable>

<DieTable
  die="d10"
  description="UNRELIABLE: This die has the highest likelihood of chaos and a low chance of failure rolls, but the highest rolls are fairly timid.">
  <DieTableRow index={1} result="Failure 4"></DieTableRow>
  <DieTableRow index={2} result="Failure 2"></DieTableRow>
  <DieTableRow index={3} result="Chaos!"></DieTableRow>
  <DieTableRow index={4} result="Chaos!"></DieTableRow>
  <DieTableRow index={5} result="Chaos!"></DieTableRow>
  <DieTableRow index={6} result="Chaos!"></DieTableRow>
  <DieTableRow index={7} result="Success 1"></DieTableRow>
  <DieTableRow index={8} result="Success 1, Advantage 1"></DieTableRow>
  <DieTableRow index={9} result="Success 2"></DieTableRow>
  <DieTableRow index={10} result="Success 2, Advantage 1"></DieTableRow>
</DieTable>

<DieTable
  die="d12"
  description="COSTLY: This die has high rolls on average, but also rolls a high amount of toll. Your greatest successes will cost the most.">
  <DieTableRow index={1} result="6 Failure"></DieTableRow>
  <DieTableRow index={2} result="4 Failure"></DieTableRow>
  <DieTableRow index={3} result="2 Failure"></DieTableRow>
  <DieTableRow index={4} result="1 Failure"></DieTableRow>
  <DieTableRow index={5} result="Chaos!"></DieTableRow>
  <DieTableRow index={6} result="2 Success, 1 Toll"></DieTableRow>
  <DieTableRow index={7} result="2 Success, 1 Toll"></DieTableRow>
  <DieTableRow index={8} result="4 Success, 2 Toll"></DieTableRow>
  <DieTableRow index={9} result="4 Success, 2 Toll"></DieTableRow>
  <DieTableRow index={10} result="6 Success, 3 Toll"></DieTableRow>
  <DieTableRow index={11} result="6 Success, 3 Toll"></DieTableRow>
  <DieTableRow index={12} result="Triumph!"></DieTableRow>
</DieTable>

<DieTable
  die="d20"
  description="NORMAL: A fairly spread out and even distribution of mixed and matched positive/negative results. This is the default die.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Failure 4"></DieTableRow>
  <DieTableRow index={3} result="Failure 4"></DieTableRow>
  <DieTableRow index={4} result="Failure 4"></DieTableRow>
  <DieTableRow index={5} result="Failure 4"></DieTableRow>
  <DieTableRow index={6} result="Failure 4, Advantage 1"></DieTableRow>
  <DieTableRow index={7} result="Failure 2"></DieTableRow>
  <DieTableRow index={8} result="Failure 2"></DieTableRow>
  <DieTableRow index={9} result="Failure 2"></DieTableRow>
  <DieTableRow index={10} result="Failure 2"></DieTableRow>
  <DieTableRow index={11} result="Failure 2, Advantage 1"></DieTableRow>
  <DieTableRow index={12} result="Success 2, Disadvantage 1"></DieTableRow>
  <DieTableRow index={13} result="Success 2, Disadvantage 1"></DieTableRow>
  <DieTableRow index={14} result="Success 2"></DieTableRow>
  <DieTableRow index={15} result="Success 2"></DieTableRow>
  <DieTableRow index={16} result="Success 4, Toll 1"></DieTableRow>
  <DieTableRow index={17} result="Success 4, Disadvantage 1"></DieTableRow>
  <DieTableRow index={18} result="Success 4"></DieTableRow>
  <DieTableRow index={19} result="Success 4"></DieTableRow>
  <DieTableRow index={20} result="Triumph!"></DieTableRow>
</DieTable>

## Dice Results In Detail

### Disaster
The Actor fails to accomplish their goal. The Advocate introduces a new problem, serious danger, or character that wasn't in the scene prior as part of the group narration. 

### Failure
The Actor fails to accomplish their goal. The Advocate should prompt them for what went wrong.

### Boon
The Actor fails to accomplish their goal. As part of the narration, the Actor adds an aspect to the scene that can be treated as an advantage for the Actors.

### Chaos
The result is neither positive nor negative. Chaos is a drastic shift in the situation. This might mean a dogfight between two outlaw ships is suddenly interrupted by a giant military armada. The Advocate and the Actors should work together to come up with a way that the goals of every character in the scene shift due to a random event.

### Threat
The Actor accomplishes their goal. As part of the narration, the Advocate adds an aspect to the scene that can be treated as a disadvantage or unfortunate circumstance for the Actors.

### Success
The Actor accomplishes their goal. The Advocate should prompt them for how they succeed.

### Triumph
The Actor accomplishes their goal. The Advocate should prompt them for a solution to an existing problem, removal of a serious danger, or allow them to introduce a character that wasn't in the scene prior as part of the group narration.
`
}

const MakingChecks = {
  uuid: "MakingChecks.json",
  metadata: {
    type: "PAGE",
    title: "Making Checks",
  },
  content:
`# Making Checks

## 1. Determine Starting Dice Pool
If you're making a check with a specific dice block you will start with the associated dice as your pool. If you don't have any dice block that would apply to the check, then you start with 1d20.

## 2. Apply Advantages
If the Advocate believes that you are in a situation where you would have some advantage, be it a surplus of medical supplies, strong trade wind on the sea, or simply having access to a shovel while digging, then they may grant you an advantage. 

## 3. Apply Difficulty
There are three difficulties: average, hard, and challenge.

- If the difficulty is average, do not modify the starting dice. 
- If the difficulty is hard, roll one less die. 
- If the difficulty is challenge, roll two less dice. 

If you hit a dice pool of 0 it becomes a pool of 2 dice and you take the lowest result instead of the highest. Further subtractions increase the amount of dice. So if your dice pool started as 1d20 and the difficulty was challenging then you would roll 3d20 and take the lowest result.
`
}

const ProteanQuickReference = {
  uuid: "QuickReference.json",
  metadata: {
    type: "PAGE",
    title: "Quick Reference",
  },
  content:
`
# Quick Rules Reference
This page contains the smallest summary possible of all the rules for quick reference during play.

## Dice Tables

<DieTable 
  die="d4"
  description="You are always likely to succeed with this die, but if you do there will always be a consequence.">
  <DieTableRow index={1} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={2} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={3} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={4} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
</DieTable>

<DieTable
  die="d6"
  description="This die's worst result is boon, but it does occur more often than failure on other dice.">
  <DieTableRow index={1} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={2} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={3} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={4} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={5} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={6} result="Success, the Actor accomplishes their goal"></DieTableRow>
</DieTable>

<DieTable
  die="d8"
  description="This die commonly succeeds with strong results, but if it fails it is always a disaster.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Disaster!"></DieTableRow>
  <DieTableRow index={3} result="Disaster!"></DieTableRow>
  <DieTableRow index={4} result="Chaos!"></DieTableRow>
  <DieTableRow index={5} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={6} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={7} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={8} result="Triumph"></DieTableRow>
</DieTable>

<DieTable
  die="d10"
  description="This die is unlikely to have a failure result and even if it does it is likely to be a minimally damaging one. The downside is that the die is very chaotic.">
  <DieTableRow index={1} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={2} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={3} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={4} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={5} result="Chaos!"></DieTableRow>
  <DieTableRow index={6} result="Chaos!"></DieTableRow>
  <DieTableRow index={7} result="Chaos!"></DieTableRow>
  <DieTableRow index={8} result="Chaos!"></DieTableRow>
  <DieTableRow index={9} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={10} result="Success, the Actor accomplishes their goal"></DieTableRow>
</DieTable>

<DieTable
  die="d12"
  description="This die has the highest chance of triumph, but also suffers from a high chance of extreme failure.">
  <DieTableRow index={1} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={2} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={3} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={4} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={5} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={6} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={7} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={8} result="Chaos!"></DieTableRow>
  <DieTableRow index={9} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={10} result="Triumph"></DieTableRow>
  <DieTableRow index={11} result="Triumph"></DieTableRow>
  <DieTableRow index={12} result="Triumph"></DieTableRow>
</DieTable>

<DieTable
  die="d20"
  description="This die has the most even distribution of results, making it the default die. It excels at nothing.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={3} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={4} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={5} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={6} result="Failure + the Actor fails to accomplish their goal"></DieTableRow>
  <DieTableRow index={7} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={8} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={9} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={10} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={11} result="Failure + the Actor adds an advantage to the scene"></DieTableRow>
  <DieTableRow index={12} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={13} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={14} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={15} result="Success + the Advocate adds an obstacle to the scene"></DieTableRow>
  <DieTableRow index={16} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={17} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={18} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={19} result="Success, the Actor accomplishes their goal"></DieTableRow>
  <DieTableRow index={20} result="Triumph"></DieTableRow>
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
  metadata: {
    type: "PAGE",
    title: "Lancer Gear",
  },
  content:
`
# Lancer Gear
This is a collection of GMS weapons, systems, and modifications that can be installed into lancers.

## GMS Weapons
Much like GMS mechs, GMS weapons are reliable galactic standards, made using interchangeable parts and built to withstand almost any conditions. There are three lines currently in production. 

### T-1
The Type-I (T-1) line is defined by powerful, reliable, and conventional-kinetic ranged and melee weapons.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Heavy Axe",
    "dice": "3d6",
    "description": "A heavy mechanical axe that can cleave off pieces of a lancer in one swing (Melee Range, Cleaving)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Machine Gun",
    "dice": "3d4",
    "description": "A reliable, rapid-fire gun that utilizes a drum magazine (Medium Range, Inaccurate)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Pistols",
    "dice": "2d12",
    "description": "A pair of reliable, close range pistols (Close Range, Accurate)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Shotgun",
    "dice": "2d8",
    "description": "A multi-purpose kinetic and flechette gun with ricochetting rounds (Close Range, Ricochet)."
  }}>
  </DiceBlock>
</BlockContainer>

### T-2
The Type-II (T-2) line displays GMS’s proprietary “charged” melee weapons and energy weapons. T-2 charged melee weapons are structurally similar to GMS’s T-1 melee weapons, though built with different materials to tolerate the intense heat generated by their projected plasma sheaths.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Charged Blade",
    "dice": "3d8",
    "description": "An electrified and super-heated sword that can melt through most lancer armor (Melee Range, Melting, Self-Heating)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Cannon",
    "dice": "1d12",
    "description": "A single shot, fire-based weapon. The rounds burn extremely hot for extended amounts of time, doing massive damage to anything it touches (Medium Range, Burns, Melts)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Pistols",
    "dice": "2d20",
    "description": "Dual pistols capable of melting a lancer at close range when they strike cracks in the armor (Close Range, Melting, Self-Heating)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Rifle",
    "dice": "2d8",
    "description": "A powerful, overheating laser that can burn through multiple lancers in one shot (Long Range, Melting, Self-Heating)."
  }}>
  </DiceBlock>
</BlockContainer>

### T-3
The Type-III (T-3) line is made up of heavy weapons, ordnance, and other exotic, specialized, or massive weapons.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Anti-Materiel Rifle",
    "dice": "2d6",
    "description": "A lancer-sized, magnetic railgun (Extreme Range, Accurate, Armor Piercing, Loading, Ordnance)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Howitzer",
    "dice": "2d10",
    "description": "A mounted cannon that turns a lancer into portable artillery (Long Range, Arcing, Blast, Inaccurate, Loading, Ordnance)."
  }}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Missile Racks",
    "dice": "2d4",
    "description": "Auxiliary launchers with tracking capabilities (Medium Range, Blast, Loading, Tracking)."
  }}>
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
  metadata: {
    type: "BOOK",
    title: "Protean RPG",
    activePage: 1
  },
  content: [
    ProteanIs,
    ThePlayers,
    RulesInBrief,
    MakingChecks
  ]
}

const LancerSupplement = {
  uuid: "Lancer.json",
  metadata: {
    type: "BOOK",
    title: "Lancer",
    activePage: 0
  },
  content: [
    LancerGear,
  ]
}

function loadLocalStorage(key, defaultValue) {
  if (localStorage.getItem(key) !== null && key !== "darkMode") {
    console.log("LocalStorage:" + key + "\n" + localStorage.getItem(key));
    var parsed = JSON.parse(localStorage.getItem(key));
    console.log("LocalStorage[0]:" + key + "\n" + JSON.stringify(parsed[0]));
    console.log("LocalStorageParsed:" + key + "\n" + parsed);
    console.log("LocalStorageLength:" + key + "\n" + parsed.length);
    console.log("DefaultValue:" + key + "\n" + defaultValue);
    console.log("ClearedValue:" + key + "\n" + parsed.filter(
      function (x) {
        // if (x === undefined || x === null) {
        //   console.log("ERROR: File loaded from local storage was undefined or null");
        // }
        return x !== undefined || x !== null;
      }
    ));
  }
  return localStorage.getItem(key) === null ? defaultValue : JSON.parse(localStorage.getItem(key));
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
  darkMode: loadLocalStorage("darkMode", false),
  files: loadLocalStorage("files", [ProteanRPG, LancerSupplement]),
  activeFile: {
    
  },
  fileIcons: {
    "BOOK": "ReadingMode",
    "SHEET": "TextDocumentShared",
    "PAGE": "TextDocument",
  },
  conditionalRenders: {
    "ProteanSettingsModal": false
  }
};

const reducer = (globalState, action) => {
  switch (action.type) {
    case "setDarkMode":
      localStorage.setItem("darkMode", action.payload.darkMode);
      return {
        ...globalState,
        darkMode: action.payload.darkMode
      }
    case "uploadFile":
      localStorage.setItem("files", JSON.stringify([...globalState.files, action.payload.file]));
      return {
        ...globalState,
        files: [...globalState.files, action.payload.file]
      }
    case "setActiveFile":
      return {
        ...globalState,
        activeFile: action.payload.activeFile,
      }
    case "setActivePage":
      var copyFile = { ...globalState.activeFile };
      copyFile.metadata.activePage = action.payload.activePage;
      return {
        ...globalState,
        activeFile: copyFile
      }
    case "updateActiveFileContent":
      var copyFile = { ...globalState.activeFile };
      copyFile.content = action.payload.content;
      localStorage.setItem("files", JSON.stringify(globalState.files));
      return {
        ...globalState,
        activeFile: copyFile
      }
    case "setProteanSettingsState":
      return {
        ...globalState,
        conditionalRenders: {
          ...globalState.conditionalRenders,
          "ProteanSettingsModal": action.payload.state
        }
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