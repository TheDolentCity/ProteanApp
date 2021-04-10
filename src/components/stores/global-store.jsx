import React, { createContext, useContext, useReducer } from 'react';

const CharacterSheets = {
  uuid: "character-sheets.json",
  metadata: {
    type: "PAGE",
    title: "Character Sheets",
  },
  content:
`
# Character Sheets
This is an overview of how character sheets function in the Protean App so that you understand how to use them to play Protean RPG.

## Widgets
The components that make up character sheets are called widgets. These are little pieces of functionality. For example, there is a widget to add additional blocks (we'll get to that) to your character sheet.

## Blocks
Blocks are technically a type of widget, but they're non-functional and instead focus on the recording and viewing of data. Protean RPG has a mechanic called action blocks, but in the Protean App they are represented with dice blocks on a character sheet. An overview of each block and how to use them can be found below.

### Text Block
An auto-resizing, full page width, text area. A secondary attribute can be applied to change the styling of the text block (Header1, Paragraph, etc.) but currently this can only be managed by editing JSON.

<TextBlock static={false} onChange={() => {}} textBlock={{
  "textType": "Header1",
  "text": ""}}>
</TextBlock>

<TextBlock static={false} onChange={() => {}} textBlock={{
  "textType": "Paragraph",
  "text": ""}}>
</TextBlock>

### Note Block
An auto-resizing text area with a title and description. This is a quick and easy tool to pair large amounts of text with a section header.

<NoteBlock static={false} onChange={() => {}} noteBlock={{
  "title": "Notes",
  "description": "This is where someone can write a lot of notes. Maybe about their cat. Or a well-laid battle plan. Or more realistically, some absurd note like how many assorted gears they have and how much they weigh."}}>
</NoteBlock>

### Dice Block
An auto-resizing text area with a title, dice section, and description. This is a quick and easy tool to pair large amounts of text with a section header and a dice value. In Protean RPG, these are used for action blocks.

<DiceBlock static={false} onChange={() => {}} diceBlock={{
  "title": "Big Fucking Sword",
  "dice": "3d12",
  "description": "This is a big fucking sword. It is heavy and it hurts people a lot which is why you roll 3d12."}}>
</DiceBlock>

### Number Block
A block with a title and one or more fields. Each field has a title and a value. This can represent grouped numerical values with ease. In Protean RPG, these are used for defenses.

<NumberBlock static={false} onChange={() => {}} numberBlock={{
  "title": "Hit Points",
  "fieldTitles": [
    "Current Score",
    "Max Score",
    "Current Resistance",
    "Max Resistance"
  ],
  "fieldValues": [
    8,
    10,
    1,
    1
  ]}}>
</NumberBlock>
`
}

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

const ActionBlocksAndTags = {
  uuid: "action-blocks-and-tags.json",
  metadata: {
    type: "PAGE",
    title: "Action Blocks And Tags",
  },
  content:
`
# Action Blocks and Tags
Action blocks and tags are the core metrics for what a character is capable of. Anything from a weapon to a lockpicking skill falls under the realm of action blocks.

## Action Blocks
Action blocks are an abstract, mechanical method for providing stats for character props and skills. The stat block and the description of the item are one in the same. An action block is usually one or two sentences of descriptive text combined with a dice value. You can use an action block when you're making checks to determine the outcome of events in the game and when you do so you use the action block's dice value as the starting point.

## Tags
A tag is a heuristic or shortcut used to make action blocks less unwieldy. Most action blocks are accompanied by tags of some kind, usually one to three. Tags should make it clear what a prop or skill is capable of the vast majority of the time. They also can make some checks easier (see the Making Checks section).

## Example Action Block

<DiceBlock diceBlock={{
  "title": "Grapple Cable",
  "dice": "2d8",
  "description": "Auxiliary grapple cable mounts that support the weight of the mech, but can also be used for pulling objects towards the pilot (Medium Range)."}}>
</DiceBlock>
`
}

const DefensesAndConditions = {
  uuid: "defenses-and-conditions.json",
  metadata: {
    type: "PAGE",
    title: "Defenses",
  },
  content:
    `
# Defenses & Conditions
Defenses communicate to the player what state their character is in at any point in time. They're designed to be abstract to support all sorts of content, from hydration to mutation mechanics. Conditions are permanent or temporary modifications to your character in the form of negative tags.

## Defense
Action blocks are for making checks, but defenses determine a lot of the fallout from these checks. Every defense has a current score, max score, current resistance, and max resistance. Each defense functions similarily to a timer: your defense score goes down over time as you take damage and once it reaches 0 it breaks. When your defense breaks you gain a condition and your defense score resets to its maximum. Here is an example:

<NumberBlock static={false} onChange={() => {}} numberBlock={{
  "title": "Body",
  "fieldTitles": [
    "Current Score",
    "Max Score",
    "Current Resistance",
    "Max Resistance"
  ],
  "fieldValues": [
    2,
    10,
    1,
    1
  ]}}>
</NumberBlock>

Given the example above, if you were to take 3 Body damage then you would suffer a condition. When this happens your defense score resets to its max, but any overflow damage is applied so you would end up with 9/10 Body.

## Conditions
This is always negative, or at least mostly negative, for your character. TODO. The rest of this explanation needs to happen but it's long and difficult and I don't want to do it right now so I'll do it after the first playtest. Dante will explain this on the fly when they happen.
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
If you're making a check with a specific action block you will start with the associated dice as your pool. If you don't have any action block that would apply to the check, then you start with 1d20.

## 2. Apply Advantages
If the Advocate believes that you are in a situation where one of your action block's tags would grant some advantage then add an additional die of the same size. Example: add +1 die to a long range shot if your rifle has the 'magnification' tag.
- You can add as many dice as there are applicable tags, but you cannot add dice from other relevant action block tags. 
- You can add dice if a scene tag, such as a strong trade wind on the sea, would help in this situation.

## 3. Apply Disadvantages
If the Advocate believes that you are in a situation where an adversary's tags would inflict some disadvantage then increase the difficulty by one step. Example: difficulty changes from average to hard since the Gorgon has the 'turn to stone' tag and you need to close your eyes to try and strike at it.
- The Advocate should stick to as few disadvantages as possible in a scene. One disadvantage that can be worked around is better than ten that increase difficulty meaninglessly.
- Actors should try to work around a disadvantage once they learn of it and the Advocate should support their solutions. Using the example above, Perseus realizing he can use a reflective surface to get past the Gorgon's gaze would mean the Advocate should no longer apply the +1 difficulty when Perseus makes checks.

## 4. Apply Difficulty
There are three difficulties: average, hard, and severe.
- If the difficulty is average, do not modify the starting dice. 
- If the difficulty is hard, ignore the highest result. 
- If the difficulty is severe, ignore the two highest results.

If ignoring a die result would cause there to be no dice left to interpret then divide the lowest rolled die's result by 2, rounded down to a minimum of one. Ex: if making a severe check and you roll 1d20, you will need to divide by 2 twice since the singular die roll is ignored twice. So if the roll was 17 then the final result is actually 4.

## 5. Determine Result
Every die rolls differently, but there are common methods for interpreting them. You always take the result of the highest die rolled (keeping in mind to ignore some results based on difficulty). There are two kinds of results: numerical results and unique results. 

Unique results are special keywords like 'Chaos!' that represent a very specific and unique outcome. Numerical results are simpler and combine a result tag (success, disadvantage, etc.) with a value. Each result tag has a distinct way of interpreting this value.

Read about the dice results below and then look at the dice tables to see how each die is specifically rolled.

## Dice Results
Dice results are unique and significant ways to interpet checks. These are less commonly used than dice tags, but when they are rolled they always change the game dramatically.

### Disaster
The Actor fails to accomplish their goal. The Advocate introduces a new problem, serious danger, or character that wasn't in the scene prior as part of the group narration.

### Chaos
The result is neither positive nor negative. Chaos is a drastic shift in the situation. This might mean a dogfight between two outlaw ships is suddenly interrupted by a giant military armada. The Advocate and the Actors should work together to come up with a way that the goals of every character in the scene shift due to a random event.

### Triumph
The Actor accomplishes their goal. The Advocate should prompt them for a solution to an existing problem, removal of a serious danger, or allow them to introduce a character that wasn't in the scene prior as part of the group narration.

## Dice Tags
Dice tags are the most common way to interpet the results of a check. They have fairly straightforward interpetations and the only hard and fast rule is that if a dice roll doesn't have an associated dice result it must have a Success or Failure tag.

### Success
If a die has any numerical amount of success then the Actor accomplishes their goal. The numerical value is not always used, but it can be used to represent how much damage was done to a challenge (building a wall, destroying a bunker, tank squad) if the check's intention was to resolve or otherwise remove the challenge.

### Failure
If a die has any numerical amount of failure then the Actor fails to accomplish their goal. The numerical value is not always used, but it should almost always be used to apply damage to one of the Actor's defenses. A consensus on which defense the damage is inflicted to should be reached between the two, but the focus should be on what makes the most sense in the narrative OR what makes the best story.

### Advantage
The Actor adds a number of positive tags to the scene equal to the amount of advantage. The Actor and Advocate should work together to make sure these tags are interesting and make sense for the scene, but the Actor leads the process.

### Disadvantage
The Advocate adds a number of negative tags to the scene equal to the amount of disadvantage. The Actor and Advocate should work together to make sure these tags are interesting and make sense for the scene, but the Advocate leads the process.

### Toll
Whether they suceed or fail, the Actor always suffers an amount of damage when they roll a result with toll. The numerical value of the toll is inflicted as damage to one of the Actor's defenses. A consensus on which defense the damage is inflicted to should be reached between the Advocate and Actor, but the focus should be on what makes the most sense in the narrative OR what makes the best story.

## Dice Tables
Every die in Protean is unique. This means interpreting a 4 on a d4 is very different than a 4 on a d12. The default configuration of the six core RPG dice (d4, d6, d8, d10, d12, and d20) is represented below with tables. Use these tables when you make checks to determine the dice result or dice tags that you rolled.

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
`
}

const PlayingTheGame = {
  uuid: 'playing-the-game.json',
  metadata: {
    type: 'PAGE',
    title: 'Playing The Game'
  },
  content:
    `
# Playing The Game

## Example of Play
Zero, a mech pilot, is attempting to tear an entrance into a derelict starship before a legion of drones destroy her and Feather, her companion. Feather is currently fighting the drones off with their mech's plasma sword. The Advocate says that this will be a hard check and that Zero's Size action block makes the most sense for ripping a hole in the side of the starship. But Zero suggests that she use her Grapple Cable action block instead and explains how she would fire the grappling hooks into weaknesses in the metal and pull to create a hole. The Advocate agrees that makes sense (and is way cooler) so Zero rolls 2d8.

<DiceBlock diceBlock={{
  "title": "Grapple Cable",
  "dice": "2d8",
  "description": "Auxiliary grapple cable mounts that support the weight of the mech, but can also be used for pulling objects towards the pilot (Medium Range)."}}>
</DiceBlock>

Zero rolls a 6 and an 8, but the difficulty is hard so the highest roll is removed, leaving the 6 and a result of _Success 3, Disadvantage 1_. "You start to pull," says the Advocate, "but you quickly realize you have to use your higher torque option on your grapple cables. The cables move slower in that mode so Feather will have to perform an action to hold back the drones while you're tearing open the door. Feather there is a horde of drones flying towards you from every angle so this will be a severe check. What would you like to do?"

Feather consults their character sheet and decides that their only viable option is to use their mech's Micro Missile System. However Feather's supplies defense is currently only 2 and the Micro Missile System has a side effect where upon firing it the user suffers 3 supplies damage. Feather also says that they think the 'blast' and 'self-guided' tags on the Micro Missile System action block would be advantageous for taking out a horde of flying drones. The Advocate agrees so instead of rolling 1d12 Feather rolls 3d12.

<DiceBlock diceBlock={{
  "title": "Micro Missile System",
  "dice": "1d12",
  "description": "An internal integration of micro missiles throughout the frame of the mech that supports immediate destruction of adversaries in all directions (Medium Range, Blast, Self-guided). Any time you use this action block suffer 3 supplies damage."}}>
</DiceBlock>

"I stab my sword into the ground, stretch my mech's arms wide open and fire as many micro missiles as I can at the drones," says Feather. They roll a 2, 10, and 12, but since the check's difficulty is severe the two highest results are ignored. This leaves Feather with the _Failure 4_ result. "You unleash a hail storm of micro missiles at the oncoming drones and you do manage to take down all of the closest ones. Zero rips a hole into the starship, but the surge of power from firing all of the micro missiles has overloaded your systems temporarily. Take 4 systems damage." Feather says, "Okay so with the 3 supplies damage from the micro missiles as well I shatter both my supplies and systems defense."

<BlockContainer>
<NumberBlock numberBlock={{
  "title": "Supplies",
  "fieldTitles": [
    "Current Score",
    "Max Score",
    "Current Resistance",
    "Max Resistance"
  ],
  "fieldValues": [
    2,
    6,
    0,
    0
  ]}}>
</NumberBlock>

<NumberBlock numberBlock={{
  "title": "Systems",
  "fieldTitles": [
    "Current Score",
    "Max Score",
    "Current Resistance",
    "Max Resistance"
  ],
  "fieldValues": [
    4,
    5,
    0,
    0
  ]}}>
</NumberBlock>
</BlockContainer>


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

const LancerGMSWeapons = {
  uuid: "LancerGMSWeapons",
  metadata: {
    type: "PAGE",
    title: "GMS Weapons",
  },
  content:
`
# GMS Weapons
Much like GMS mechs, GMS weapons are reliable galactic standards, made using interchangeable parts and built to withstand almost any conditions. There are three lines currently in production. 

## GMS T-1: KINETIC
The Type-I (T-1) line is defined by powerful, reliable, and conventional-kinetic ranged and melee weapons.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Kinetic Axe",
    "dice": "2dX",
    "description": "A heavy mechanical axe that can cleave off pieces of a lancer in one swing (Melee Range, Heavy, Severes)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Machine Gun",
    "dice": "3dX",
    "description": "A reliable, rapid-fire gun that utilizes a drum magazine (Medium Range)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Pistols",
    "dice": "2dX",
    "description": "A pair of reliable, close range pistols (Close Range). This action block deals 1 damage to a challenge when it doesn't succeed on a check."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Shotgun",
    "dice": "2dX",
    "description": "A multi-purpose kinetic and flechette gun with ricochetting rounds (Close Range, Ricochet, Spread)."}}>
  </DiceBlock>
</BlockContainer>

## GMS T-2: ENERGY
The Type-II (T-2) line displays GMS’s proprietary “charged” melee weapons and energy weapons. T-2 charged melee weapons are structurally similar to GMS’s T-1 melee weapons, though built with different materials to tolerate the intense heat generated by their projected plasma sheaths.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Charged Blade",
    "dice": "2dX",
    "description": "An electrified and super-heated sword that can melt through enemy lancers (Melee Range, Burns, Melts). Whenever you use this action block take 1 Heat damage, but also increase all damage dealt by this action block by +1."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Laser Cannon",
    "dice": "3dX",
    "description": "A powerful, overheating laser that can burn through multiple lancers in one shot (Extreme Range, Melts). Whenever you use this action block take 3 Heat damage."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Launcher",
    "dice": "1dX",
    "description": "A single shot, break-action thermite launcher. The rounds burn extremely hot for extended amounts of time, turning a battlefield into scorched earth littered with active thermite (Medium Range, Burns Over Time, Melts). Adversaries hit with this weapon must vacate the scorched area or burn to death."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Rifle",
    "dice": "2dX",
    "description": "A  (Long Range, Burns, Melts). Whenever you use this action block take 1 Heat damage, but also increase all damage dealt by this action block by +1."}}>
  </DiceBlock>
</BlockContainer>

## GMS T-3: ORDNANCE
The Type-III (T-3) line is made up of heavy weapons, ordnance, and other exotic, specialized, or massive weapons.

<BlockContainer>
  <DiceBlock diceBlock={{
    "title": "Anti-Materiel Rifle",
    "dice": "2d6",
    "description": "A lancer-sized, magnetic railgun (Extreme Range, Accurate, Armor Piercing, Loading, Ordnance)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Howitzer",
    "dice": "2d10",
    "description": "A mounted cannon that turns a lancer into portable artillery (Long Range, Arcing, Blast, Inaccurate, Loading, Ordnance)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Missile Racks",
    "dice": "2d4",
    "description": "Auxiliary launchers with tracking capabilities (Medium Range, Blast, Loading, Tracking)."}}>
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

const ProteanApp = {
  uuid: "ProteanApp.json",
  metadata: {
    type: "BOOK",
    title: "Protean App",
    activePage: 0
  },
  content: [
    CharacterSheets
  ]
}

const ProteanRPG = {
  uuid: "ProteanRPG.json",
  metadata: {
    type: "BOOK",
    title: "Protean RPG",
    activePage: 0
  },
  content: [
    ProteanIs,
    ThePlayers,
    ActionBlocksAndTags,
    DefensesAndConditions,
    MakingChecks,
    PlayingTheGame
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
    LancerGMSWeapons,
  ]
}

const BlankLancerSheet = {
  "uuid": "lancer-sheet.json",
  "metadata": {
    "type": "SHEET",
    "title": "Lancer Sheet"
  },
  "content": {
    "textBlocks": [
      {
        "textType": "Header1",
        "text": "Lancer Name"
      },
      {
        "textType": "Paragraph",
        "text": "This is a blank description for a lancer. A lancer is a highly advanced mech that can turn any pilot into a one man army."
      }
    ],
    "numberBlocks": [
      {
        "title": "Hull",
        "fieldTitles": [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Defense"
        ],
        "fieldValues": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "Heat",
        "fieldTitles": [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Defense"
        ],
        "fieldValues": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "Systems",
        "fieldTitles": [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Defense"
        ],
        "fieldValues": [
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "Supplies",
        "fieldTitles": [
          "Current Score",
          "Max Score",
          "Current Defense",
          "Max Defense"
        ],
        "fieldValues": [
          0,
          0,
          0,
          0
        ]
      }
    ],
    "diceBlocks": [
      {
        "title": "Size",
        "dice": "",
        "description": "A lancer's size represents their physical strength and resilience. The larger a lancer is the bigger a wall they can run through and the better chance they'll have of wrestling another lancer to the ground."
      },
      {
        "title": "Speed",
        "dice": "",
        "description": "A lancer's speed represents their reaction time and capability for traversing terrain. The faster a lancer the easier it will be to reposition and complete critical tasks quickly."
      },
      {
        "title": "",
        "dice": "",
        "description": ""
      },
      {
        "title": "",
        "dice": "",
        "description": ""
      },
      {
        "title": "",
        "dice": "",
        "description": ""
      },
      {
        "title": "",
        "dice": "",
        "description": ""
      }
    ],
    "noteBlocks": [
      {
        "title": "Notes",
        "description": ""
      },
      {
        "title": "Conditions",
        "description": ""
      }
    ]
  }
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
  files: loadLocalStorage("files", [ProteanApp, ProteanRPG, LancerSupplement, BlankLancerSheet]),
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