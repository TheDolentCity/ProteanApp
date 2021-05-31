import React, { createContext, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

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

const TestPage = {
  uuid: "test-page.json",
  metadata: {
    type: "PAGE",
    title: "Test Page",
  },
  content:
  `
  # Header 1
  This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

  ## Header 2
  This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.
  
  <Columns count="2">

  ## Header 2 w/ 2 columns
  This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

  </Columns>
  
  <Columns count="3">

  ### Header 3 w/ 3 columns
  This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph. This is a test page to test out what the default markdown elements look like. This is a paragraph.

  </Columns>
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

## ...For Roleplaying With Friends
The only rule you have to follow is to have fun and respects your friends.

## ...Cooperative
No gods, no game masters. Just friends working together to have fun and make a cool story.

## ...Modular
One of the design goals of Protean is for the core rules to be as small as possible and to turn everything else into an optional module. Currently this feature is not supported by Protean App, but it will be.

## ...Accessible
Hosting the rules for free as a web application makes the game accessible to many. Not to mention all of the accessibility tooling from an interactive web UI. I plan on making the game more accessible over time as well (url slugs, search, etc.).

## ...A Story Game
There are three kinds of stories told by Protean players:
- The game story, a sequential fiction set within our minds.
- The character story, a character's fiction that a single player experiences as they roleplay as them.
- The meta story, the nonfictional account of the players at the table.
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
To ensure even distribution of labor, facilitate ease of play, and simply not place all responsibilities of the game on the Advocate, certain responsibilities are distributed among the Actors. Everyone chooses a unique role during session 0 of the game.

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

## 2. "Right Tool For The Job"
If you are making a check and the Advocate agrees that your action block is the "right tool for the job" then you add +1 die to the pool. But what does that mean? It depends on what the action block represents. 
The easiest way to determine if something is the right tool for the job is to ask "what do you use this tool/skill for?" Do not consider what it _could_ be used for, just what its purpose is. Read the examples that follow.

### Shovel
- A shovel is the right tool for the job if you are digging a hole.
- A shovel is NOT the right tool for the job if you are trying to knock someone out.

### Flattery
- Flattery is the right tool for the job if you are trying to compliment someone.
- Flattery is NOT the right tool for the job to convince someone you're trustworthy.

### Computer
- A computer is the right tool for the job if you are trying to use computer programs or execute complex algorithms.
- A computer is NOT the right tool for the job to write a convincing speech just because it has a word processor and access to the internet.

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
Dice results are unique and significant ways to interpret checks. These are less commonly used than dice tags, but when they are rolled they always change the game dramatically.

### Disaster
The Actor fails to accomplish their goal. The Advocate introduces a new problem, serious danger, or character that wasn't in the scene prior as part of the group narration.

### Chaos
The result is neither positive nor negative. Chaos is a drastic shift in the situation. This might mean a dogfight between two outlaw ships is suddenly interrupted by a giant military armada. The Advocate and the Actors should work together to come up with a way that the goals of every character in the scene shift due to a random event.

### Triumph
The Actor accomplishes their goal. The Advocate should prompt them for a solution to an existing problem, removal of a serious danger, or allow them to introduce a character that wasn't in the scene prior as part of the group narration.

## Dice Tags
Dice tags are the most common way to interpret the results of a check. They have fairly straightforward interpretations and the only hard and fast rule is that if a dice roll doesn't have an associated dice result it must have a Success or Failure tag.

### Success
If a die has any numerical amount of success then the Actor accomplishes their goal. The numerical value is not always used, but it can be used to represent how much damage was done to a challenge (building a wall, destroying a bunker, tank squad) if the check's intention was to resolve or otherwise remove the challenge.

### Failure
If a die has any numerical amount of failure then the Actor fails to accomplish their goal. The numerical value is not always used, but it should almost always be used to apply damage to one of the Actor's defenses. A consensus on which defense the damage is inflicted to should be reached between the two, but the focus should be on what makes the most sense in the narrative OR what makes the best story.

### Advantage
The Actor adds a number of positive tags to the scene equal to the amount of advantage. The Actor and Advocate should work together to make sure these tags are interesting and make sense for the scene, but the Actor leads the process.

### Disadvantage
The Advocate adds a number of negative tags to the scene equal to the amount of disadvantage. The Actor and Advocate should work together to make sure these tags are interesting and make sense for the scene, but the Advocate leads the process.

### Toll
Whether they succeed or fail, the Actor always suffers an amount of damage when they roll a result with toll. The numerical value of the toll is inflicted as damage to one of the Actor's defenses. A consensus on which defense the damage is inflicted to should be reached between the Advocate and Actor, but the focus should be on what makes the most sense in the narrative OR what makes the best story.

## Dice Tables
Every die in Protean is unique. This means interpreting a 4 on a d4 is very different than a 4 on a d12. The default configuration of the six core RPG dice (d4, d6, d8, d10, d12, and d20) is represented below with tables. Use these tables when you make checks to determine the dice result or dice tags that you rolled.

<DieTable
  die="d4"
  description="FAIL FORWARD: There is a lower chance of success using this die, but the worst case scenario still provides an advantage.">
  <DieTableRow index={1} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={2} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={3} result="1 Failure, 1 Advantage"></DieTableRow>
  <DieTableRow index={4} result="2 Success"></DieTableRow>
</DieTable>

<DieTable
  die="d6"
  description="GO BIG OR GO HOME: This die has the highest chance of triumph AND disaster.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Disaster!"></DieTableRow>
  <DieTableRow index={3} result="Disaster!"></DieTableRow>
  <DieTableRow index={4} result="2 Success"></DieTableRow>
  <DieTableRow index={5} result="2 Success"></DieTableRow>
  <DieTableRow index={6} result="Triumph!"></DieTableRow>
</DieTable>

<DieTable
  die="d8"
  description="GIVE AND TAKE: If you succeed there is always a drawback, but if you fail there is always a boon.">
  <DieTableRow index={1} result="Failure 3, Advantage 2"></DieTableRow>
  <DieTableRow index={2} result="Failure 2, Advantage 1"></DieTableRow>
  <DieTableRow index={3} result="Failure 2, Advantage 1"></DieTableRow>
  <DieTableRow index={4} result="Failure 1, Advantage 1"></DieTableRow>
  <DieTableRow index={5} result="Success 1, Disadvantage 1"></DieTableRow>
  <DieTableRow index={6} result="Success 2, Disadvantage 1"></DieTableRow>
  <DieTableRow index={7} result="Success 2, Disadvantage 1"></DieTableRow>
  <DieTableRow index={8} result="Success 3, Disadvantage 2"></DieTableRow>
</DieTable>

<DieTable
  die="d10"
  description="UNRELIABLE: This die has the highest likelihood of chaos and a low chance of failure rolls, but the highest rolls are fairly timid.">
  <DieTableRow index={1} result="Failure 3"></DieTableRow>
  <DieTableRow index={2} result="Failure 3"></DieTableRow>
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
  <DieTableRow index={1} result="3 Failure"></DieTableRow>
  <DieTableRow index={2} result="2 Failure"></DieTableRow>
  <DieTableRow index={3} result="2 Failure"></DieTableRow>
  <DieTableRow index={4} result="1 Failure"></DieTableRow>
  <DieTableRow index={5} result="Chaos!"></DieTableRow>
  <DieTableRow index={6} result="2 Success, 1 Toll"></DieTableRow>
  <DieTableRow index={7} result="2 Success, 1 Toll"></DieTableRow>
  <DieTableRow index={8} result="3 Success, 2 Toll"></DieTableRow>
  <DieTableRow index={9} result="3 Success, 2 Toll"></DieTableRow>
  <DieTableRow index={10} result="4 Success, 3 Toll"></DieTableRow>
  <DieTableRow index={11} result="4 Success, 3 Toll"></DieTableRow>
  <DieTableRow index={12} result="Triumph!"></DieTableRow>
</DieTable>

<DieTable
  die="d20"
  description="NORMAL: A fairly spread out and even distribution of mixed and matched positive/negative results. This is the default die.">
  <DieTableRow index={1} result="Disaster!"></DieTableRow>
  <DieTableRow index={2} result="Failure 2"></DieTableRow>
  <DieTableRow index={3} result="Failure 2"></DieTableRow>
  <DieTableRow index={4} result="Failure 2"></DieTableRow>
  <DieTableRow index={5} result="Failure 2"></DieTableRow>
  <DieTableRow index={6} result="Failure 2, Advantage 1"></DieTableRow>
  <DieTableRow index={7} result="Failure 1"></DieTableRow>
  <DieTableRow index={8} result="Failure 1"></DieTableRow>
  <DieTableRow index={9} result="Failure 1"></DieTableRow>
  <DieTableRow index={10} result="Failure 1"></DieTableRow>
  <DieTableRow index={11} result="Failure 1, Advantage 1"></DieTableRow>
  <DieTableRow index={12} result="Success 1, Disadvantage 1"></DieTableRow>
  <DieTableRow index={13} result="Success 1, Disadvantage 1"></DieTableRow>
  <DieTableRow index={14} result="Success 1"></DieTableRow>
  <DieTableRow index={15} result="Success 1"></DieTableRow>
  <DieTableRow index={16} result="Success 2, Toll 1"></DieTableRow>
  <DieTableRow index={17} result="Success 2, Disadvantage 1"></DieTableRow>
  <DieTableRow index={18} result="Success 2"></DieTableRow>
  <DieTableRow index={19} result="Success 2"></DieTableRow>
  <DieTableRow index={20} result="Triumph!"></DieTableRow>
</DieTable>
`
}

const ExampleOfPlay = {
  uuid: 'example-of-play.json',
  metadata: {
    type: 'PAGE',
    title: 'Example of Play'
  },
  content:
    `
# Example of Play
Zero and Feather are two mech pilots whose mission has gone horribly wrong. Zero is attempting to tear an entrance into a derelict starship before a legion of drones destroy her and Feather. Feather is currently fighting the drones off with their mech's plasma sword. The Advocate says that this will be a hard check and that Zero's Size action block makes the most sense for ripping a hole in the side of the starship. But Zero suggests that she use her Grapple Cable action block instead and explains how she would fire the grappling hooks into weaknesses in the metal and pull to create a hole. The Advocate agrees that makes sense (and is way cooler) so Zero rolls 2d8.

<WidgetContainer>
<DiceBlock diceBlock={{
  "title": "Size",
  "dice": "1d20",
  "description": "A lancer's size represents their physical strength and resilience. The larger a lancer is the bigger a wall they can run through and the better chance they'll have of wrestling another lancer to the ground."}}>
</DiceBlock>

<DiceBlock diceBlock={{
  "title": "Grapple Cable",
  "dice": "2d8",
  "description": "Auxiliary grapple cable mounts that support the weight of the mech, but can also be used for pulling objects towards the pilot (Medium Range)."}}>
</DiceBlock>
</WidgetContainer>

Zero rolls a 6 and an 8, but the difficulty is hard so the highest roll is removed, leaving the 6 and a result of _Success 3, Disadvantage 1_. "You start to pull," says the Advocate, "but you quickly realize you have to use your higher torque option on your grapple cables. The cables move slower in that mode so Feather will have to perform an action to hold back the drones while you're tearing open the door. Feather there is a horde of drones flying towards you from every angle so this will be a severe check. What would you like to do?"

Feather consults their character sheet and decides that their only viable option is to use their mech's Micro Missile System. However Feather's supplies defense is currently only 2 and the Micro Missile System has a side effect where upon firing it the user suffers 3 supplies damage. Feather also says that they think the Micro Missile System is the right tool for the job for taking out flying drones due to its 'blast' and 'self-guided' tags. The Advocate agrees so instead of rolling 2d12 Feather rolls 3d12.

<DiceBlock diceBlock={{
  "title": "Micro Missile System",
  "dice": "2d12",
  "description": "An internal integration of micro missiles throughout the frame of the mech that supports immediate destruction of adversaries in all directions (Medium Range, Blast, Self-guided). Any time you use this action block suffer 3 supplies damage."}}>
</DiceBlock>

"I stab my sword into the ground, stretch my mech's arms wide open and fire as many micro missiles as I can at the drones," says Feather. They roll a 2, 10, and 12, but since the check's difficulty is severe the two highest results are ignored. This leaves Feather with the _Failure 4_ result. "You unleash a hail storm of micro missiles at the oncoming drones and you do manage to take down most of the closest ones. Zero rips a hole into the starship, but the surge of power from firing all of the micro missiles has overloaded your systems temporarily. Take 4 systems damage." Feather says, "Okay so with the 3 supplies damage from the micro missiles as well I break both my supplies and systems defense."

<WidgetContainer>
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
</WidgetContainer>

"Uh oh. Hmm the condition for the supplies defense is that your Micro Missile System is out of ammo and you can't use it until you get back to base," says the Advocate. "And for your systems break, hmm... your mech's batteries are overloaded. You need to get a replacement battery and until then your mech won't be able to move."

Feather curses, but Zero asks, "Well the hole into the ship is open now right? Can I try to grab Feather and jump into it and then collapse the entrance so the remaining drones can't get in? I think it should just be a check using my laser cannon."

"Alright what could go wrong. That's going to be a hard check though."

<DiceBlock diceBlock={{
  "title": "Laser Cannon",
  "dice": "2d10",
  "description": "A shoulder-mounted, super-heated laser that can introduce structural distortion in nanoseconds at extreme distances (Extreme Range, Melts, Pierces)."}}>
</DiceBlock>

She rolls a 6 and a 7, but since the check's difficulty is hard the 7 is ignored. This leaves Zero with the _Chaos!_ result. "You drag Feather into the starship and fire the laser cannon into the roof of the entrance you just created. At first it seems to work. Sheets of metal tumble between you and the drones, cutting them off from you. But before you can relish your success, a large groan reverberates throughout the ship. The ground beneath you shakes for a moment. Then it collapses. You fall fifty feet into some kind of underground cave system. The cave's ceiling was weakened by all of the explosives and lasers above, not to mention the starship that crashed into it at some point. You find yourself now at the bottom of a large cavern with multiple passageways snaking into the pitch black dark. What would you like to do?"

"I climb out of my mech," Feather says. "I need a battery so can I use my mech scanner to try and find the nearest one? I think it makes sense that it could find one if it can detect mechs."

"I agree, but that doesn't need to be a check. You have enough time to tune it and figure it out. The nearest one is somewhere Northeast of here."

Feather climbs aboard Zero's mech and pulls out a flashlight. They slap the side of the mech twice like a jockey and say "Hurry up I want to get OFF of this planet."
`
}

const CombatModule = {
  uuid: 'combat-module.json',
  metadata: {
    type: 'PAGE',
    title: 'Module: Combat'
  },
  content:
`
# Module: Combat
This module provides more detailed rules for combat. This is useful for any game with a heavy combat focus, such as a mech combat game.

## Turns
This module introduces turn-based actions for combat. This applies to PCs and NPCs. The Advocate establishes whether the NPCs act first or whether the PCs act first based on the starting incident for the combat. On your turn you take one *significant* action. If an action doesn't require concentration or thought then it can be performed as part of the turn. There are three types of significant actions: movements, attacks, and checks.

### Movements

### Attacks

### Checks
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

const LancerSettingPrimer = {
  uuid: "lancer-setting-primer.json",
  metadata: {
    type: "PAGE",
    title: "Lancer Setting Primer"
  },
  content:
`
# Lancer Setting Primer

Freedom is not a bargaining chip.

It began with the Fall of humanity. But from the ashes Union was forged. Advanced technology of the ancients was found scattered across Cradle, a place sometimes referred to as EARTH by remnants from the Fall. Union spent its first 2000 years creating near-light starships and expanding into the void of space. But Union was not alone. They found humans who had survived on other planets, like the Aunic peoples. Peace was tried for a time, but Union and the Aunic people deceived each other and the First Distal War began.

## SecComm
A more aggressive and authoritative Second Committee of Union (SecComm for short) was founded in response. One by one, the free planets of the galaxy fell to SecComm...

Some people resisted. RA, the first Non-Human Person (NHP), manifested themselves and removed Deimos from known space, forcing Union to formally recognize "artifical intelligences" as NHPs. But the event accelerated understanding of paracausal science and soon SecComm invented blink gate technology. Tens of billions of colonists were forcibly distributed across the Orion Arm of the galaxy.

Then came the Hercynian Crisis, a conflict so violent, so deadly, that the only viable way to participate in the conflict and survive was to pilot a highly advanced war machine. A lancer.

Mounting discontent with the "Great Expansion" and the bloody conflict of the First Distal War boiled over during the Hercynian Crisis. The pilots who survived told their stories and rightfully pointed fingers at SecComm. Revolution was swift. ThirdComm was born.

## ThirdComm
Expansion was halted, but an Aunic crusade fleet's attack on a blink gate erupted into the Second Distal War. ThirdComm dedicated themselves to upholding Union's original Utopian Pillars: ALL SHALL HAVE THEIR MATERIAL NEEDS FULFILLED, NO WALLS SHOULD STAND BETWEEN WORLDS, NO HUMAN SHALL BE HELD IN BONDAGE THROUGH FORCE, LABOR, OR DEBT.

The Aunic people did not view this as Utopia however. Their treatment at the hands of SecComm was still clear in their minds.

"ALL SHALL HAVE THEIR MATERIAL NEEDS FULFILLED" meant "we will control your resources."

"NO WALLS SHOULD STAND BETWEEN WORLDS" meant "we can go where we please."

"NO HUMAN SHALL BE HELD IN BONDAGE THROUGH FORCE, LABOR, OR DEBT" was an excuse to invade any planet where humans performed labor, whether they wanted to or not.

ThirdComm had halted the empire of Union's Second Committee, but it had yet to recognize its unjust hierarchy and imposed ideals on other worlds. Eventually Union's Central Committee ceded this point to the Aunic people and a peace agreement was reached with the new pillars.

> YOU ARE HUNGRY, YOU SHALL BE FED,  
> YOU ARE HURT, YOU SHALL BE HEALED,  
> YOU ARE CHAINED, YOU SHALL BE FREED,  
> NO PAYMENT,  
> NO SERVICE,  
> NO EXCHANGE,  
> YOU NEED ONLY ASK.  

## FourthComm
FourthComm was born from these pillars with a staunch intervention-on-request policy. Union would provide ample resources, including military, to any group of people that sought its aid. They no longer required planets to join them to gain protection. They no longer sent heavily armed mechs to rim planets and bent other cultures to their wills. They simply helped people, no matter the price.

Additionally, they did have a scorched earth policy of aggression towards all mega-Corporations. It was the opinion of FourthComm that this capitalist structure had to end once and for all. Harrison Armory, IPS-Northstar, and more became transparent overnight. All lancer frames became open sourced. As long as you passed the simulator tests, anyone could be a licensed pilot.
`
}

const LancerCampaignPrimer = {
  uuid: "lancer-campaign-primer.json",
  metadata: {
    type: "PAGE",
    title: "Lancer Campaign Primer"
  },
  content:
`
# Campaign: Midnight at Termis
The year is 8192u.

You are all cadets, _senior_ cadets, in the Union Naval Academy (UNA). For various reasons you have chosen to join and serve Union to uphold its new principles. UNA training is harsh and individualized to make sure you become a strong pilot. In the last two years of your training you are assigned three other squad members.

Together you've trained every day aboard the Bellicose, a crusier dedicated to transporting cadets to different planets for training. It is equipped with advanced simulators for training as well. The Bellicose still contains active Union Naval forces, but in a diminished capacity.

You just took your last test to become an official member of the active Union Navy, a dream you've been realizing for the last ten years. But the problem is... you are almost certain you just failed the test.
`
}

const LancerCharacterCreation = {
  uuid: "lancer-character-creation.json",
  metadata: {
    type: "PAGE",
    title: "Lancer Character Creation"
  },
  content:
    `
# Character Creation Steps
Follow these steps to create your pilot and lancer character sheets.

## Character Backstory and Traits

### 1. Read Base Character Information
Read the initial backstory, motivation, strength, and weakness that I wrote for your character. Consider the following questions:
- _Do I sympathize with this character's motivation?_
- _Can I roleplay to this character's strength?_
- _Am I comfortable acting on this character's weakness?_

### 2. Finalize Character Information
If any of the answers to the previous questions is "no," then consider what needs to be changed to turn the answer into a yes. Once you are comfortable with your character's design, move on to the next step.

## Pilot Sheet

### 1. Choose Pilot Action Blocks
Every pilot has six action blocks. Three of these are action blocks that you can fill with any skills (called Triggers in the lancer core rulebook). One of these is a pilot hardsuit, a piece of equipment every lancer pilot utilizes. The last two action blocks are for any pieces of gear your pilot brings on missions.

### 2. Choose Action Block Dice
For this game we will be using the "standard distribution" of dice sizes. This means your six action blocks must each have a unique die value (d4, d6, d8, d10, d12 and d20). Consult the Protean RPG Making Checks page to see the differences between the dice sizes.

## Lancer Sheet

### 1. Choose a Lancer Frame
The most fun step. Step into the mind of your character and think about how they handle problems. Are they the kind of pilot to run into danger and punch it in the face? Or do they use stealth and tech system attacks to take down their enemies?

The lancer frames can be found on pages 128-252 in the Lancer core rulebook, pages 41-67 of the Long Rim supplement, and 179-189 of the No Room For A Wallflower adventure.

**DISCLAIMER:** Some lancer frames might be restricted by me if I don't think they are fair or would work in Protean RPG. A few examples are the Pegasus (which literally has a gun that chooses to ignore physics) and the Lich which can control time and reanimate itself.

### 2. Create Lancer Defenses
We are using four defenses in the Protean version of lancer: Hull, Heat, Systems, and Supplies. Each has a separate conversion method found below:
- **Hull:** The maximum score is equal to your lancer's 'HP' minus 2. The Hull resistance is equal to your lancer's 'Armor'.
- **Heat:** The maximum score is equal to your lancer's 'Heat Capacity'.
- **Systems:** The maximum score is equal to your lancer's 'E-defense' minus 2.
- **Supplies:** The maximum score is equal to 6, no matter what lancer frame you chose.

### 3. Choose Lancer Action Blocks
Every lancer has eight action blocks. Four of these are free action blocks that you can fill with any systems or weapons available to your lancer frame. Four of these are constant as they are a defining part of every lancer: frame, core system, size, and speed. Let's handle these constant ones first.

#### Frame Action Block
Record the name and basic descripton of your lancer frame in the action block titled 'Frame:'. Your frame block always rolls 2dx. Don't worry about its dice size, but record its traits as tags in paranthesis. Use the following example as a reference:

<DiceBlock diceBlock={{
  "title": "Frame: Monarch",
  "dice": "2d20",
  "description": "The Monarch is SSC's groundbreaking lession in how to design a fast platform for the delivery of missiles and other self-propelled ordnance. The monarch is ready to mount ground-to-ground, ground-to-air, ground-to-orbit, and all-theater missiles and guidance systems. (Avenger Silos, Seeking Payload)."}}>
</DiceBlock>
<Spacer></Spacer>

#### Core System Action Block
Record the name and basic description of your lancer's core system in the action block titled 'Core:'.  Your core system block always rolls 3dx. Don't worry about its dice size, but record its traits as tags in paranthesis. Use the following example as a reference:

<DiceBlock diceBlock={{
  "title": "Core: HIGH-PENETRATION MISSILE SYSTEM",
  "dice": "3d20",
  "description": "The SSC-30 High-Penetration Missile System is a mech-mounted micro-missile delivery system with a payload of 60 or more deadly, miniaturized Avenger warheads in a single volley. (Long Range, Blast, Self-Guided). Whenever you use this action block take 6 supplies damage."}}>
</DiceBlock>
<Spacer></Spacer>

#### Size & Speed Action Blocks
The name and description of every lancer mech's Size and Speed is the same, but you do have to convert your frame's size and speed to the action block version.
- **Size:** The number of dice rolled is equal to your lancer's 'Size' + 1. If your lancer is half sized (1/2), then its number of dice rolled is just 1.
- **Speed:** The number of dice is equal to your lancer's 'Speed' minus 2 (to a minimum of 1).

The following examples use the same Monarch frame from above, which is 'Size 2' and 'Speed 5' in Lancer.

<WidgetContainer>
<DiceBlock diceBlock={{
  "title": "Size",
  "dice": "3dX",
  "description": "A lancer's size represents their physical strength and resilience. The larger a lancer is the bigger a wall they can run through and the better chance they'll have of wrestling another lancer to the ground."}}>
</DiceBlock>

<DiceBlock diceBlock={{
  "title": "Speed",
  "dice": "3dX",
  "description": "A lancer's speed represents their reaction time and capability for traversing terrain. The faster a lancer the easier it will be to reposition and complete critical tasks quickly."}}>
</DiceBlock>
</WidgetContainer>

#### Free Action Blocks
You can use the GMS weapons, GMS systems, and the weapons/systems from your frame to determine your action blocks. These must be converted from Lancer RPG to Protean RPG. Work with the Advocate in order to do the conversions.

### 4. Choose Action Block Dice
For this game we will be using the "standard distribution" of dice sizes. This means six of your action blocks must each have a unique die value (d4, d6, d8, d10, d12 and d20). The additional two action blocks can use any die size you wish. Consult the Protean RPG Making Checks page to see the differences between the dice sizes.
`
}

const LancerGMSWeapons = {
  uuid: "lancer-gms-weapons.json",
  metadata: {
    type: "PAGE",
    title: "GMS Weapons",
  },
  content:
`
# GMS Weapons
Much like GMS mechs, GMS weapons are reliable galactic standards, made using interchangeable parts and built to withstand almost any conditions. There are three lines currently in production. 

## GMS Type-I: KINETIC
The Type-I (T-1) line is defined by powerful, reliable, and conventional-kinetic ranged and melee weapons.

<WidgetContainer>
  <DiceBlock diceBlock={{
    "title": "Kinetic Axe",
    "dice": "2dX",
    "description": "A heavy mechanical axe that can tear through lancer armor in one swing (Melee Range, Heavy, Cleaves)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Machine Gun",
    "dice": "2dX",
    "description": "A reliable, rapid-fire gun that utilizes a drum magazine (Medium Range, Rapid Fire, Inaccurate)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Pistols",
    "dice": "2dX",
    "description": "A pair of reliable pistols for close range engagements (Medium Range, Accurate, CQB)."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Shotgun",
    "dice": "2dX",
    "description": "A multi-purpose kinetic and flechette gun with high kinetic impact at close range (Close Range, Knockback, Spread)."}}>
  </DiceBlock>
</WidgetContainer>

## GMS Type-II: ENERGY
The Type-II (T-2) line displays GMS’s proprietary “charged” melee weapons and energy weapons. T-2 charged melee weapons are structurally similar to GMS’s T-1 melee weapons, though built with different materials to tolerate the intense heat generated by their projected plasma sheaths.

<WidgetContainer>
  <DiceBlock diceBlock={{
    "title": "Charged Blade",
    "dice": "3dX",
    "description": "An electrified and super-heated sword that can melt through enemy lancers (Melee Range, Burns, Melts) Take 2 Heat damage whenever you use this action block."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Laser Cannon",
    "dice": "3dX",
    "description": "A powerful, overheating laser that can burn through multiple lancers in one shot (Extreme Range, Laser Accurate, Pierces). Take 4 Heat damage whenever you use this action block."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Launcher",
    "dice": "2dX",
    "description": "A single shot, break-action thermite launcher. The rounds burn extremely hot for extended amounts of time, turning a battlefield into scorched earth littered with active thermite (Medium Range, Burns Over Time, Lights Areas On Fire). Take 2 Heat damage whenever you use this action block."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Thermal Rifle",
    "dice": "2dX",
    "description": "A long rifle equipped with lenses to focus laser beams into spears of plasma that burn holes in enemy lancers (Long Range, Burns, Melts). Take 2 Heat damage whenever you use this action block."}}>
  </DiceBlock>
</WidgetContainer>

## GMS Type-III: ORDNANCE
The Type-III (T-3) line is made up of heavy weapons, ordnance, and other exotic, specialized, or massive weapons.

<WidgetContainer>
  <DiceBlock diceBlock={{
    "title": "Anti-Materiel Rifle",
    "dice": "2dX",
    "description": "A lancer-sized, magnetic railgun with a long spin up time and extreme kinetic force (Extreme Range, Charge Up, Knockback, Tears). Whenever you use this action block take 2 Systems damage."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Howitzer",
    "dice": "2dX",
    "description": "A mounted cannon that turns a lancer into portable artillery (Long Range, Arcing, Blast, Knockback, Inaccurate). Whenever you use this action block take 2 Supplies damage."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "Missile Racks",
    "dice": "2dX",
    "description": "Auxiliary launchers with tracking capabilities (Medium Range, Blast, Tracking). Whenever you use this action block take 2 Supplies damage."}}>
  </DiceBlock>

  <DiceBlock diceBlock={{
    "title": "RPG",
    "dice": "2dX",
    "description": "A powerful, directed rocket that can be used to destroy foe or terrain alike (Medium Range, Accurate, Blast, Knockback). Whenever you use this action block take 2 Supplies damage."}}>
  </DiceBlock>
</WidgetContainer>
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

<WidgetContainer>
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
</WidgetContainer>
`
}

const PilotWeapons = {
  uuid: "pilot-weapons.json",
  metadata: {
    type: "PAGE",
    title: "Pilot Weapons",
  },
  content:
`
# Pilot Weapons

## Assault Rifles
<WidgetContainer>
<NoteBlock noteBlock={{
	"title": "R-201 Carbine",
	"description": "Full-auto rifle with high accuracy.\\n(1d8 Attack)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "Hemlok BF-R",
	"description": "Burst-fire assault rifle.\\n(2d4 Attack)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "G2A5",
	"description": "Semi-auto precision rifle.\\n(1d6 Attack, Long Range)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "V-47 Flatline",
	"description": "Full-auto rifle with a punch.\\n(1d10 Attack, no damage on a 1 or 2)"}}>
</NoteBlock>
</WidgetContainer>

## Submachine Guns
<WidgetContainer>
<NoteBlock noteBlock={{
	"title": "Alternator",
	"description": "Twin barrel SMG with high fire rate.\\n(2d6 Attack at short range, otherwise 1d4 Attack)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "Volt",
	"description": "CQB focused, energy actuated SMG.\\n(1d6 Attack, +1 Fight at short range)"}}>
</NoteBlock>
</WidgetContainer>

## Light Machine Guns
<WidgetContainer>
<NoteBlock noteBlock={{
	"title": "Spitfire",
	"description": "Steady fire rate and a heavy hitter.\\n(2d4 Attack, -1 Fight, Attack dice explode on a 4)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "L-Star",
	"description": "Plasma-fueled LMG with high lethality and inaccuracy.\\n(1d12 Attack, -1 Fight)."}}>
</NoteBlock>
</WidgetContainer>

## Sniper Rifles
<WidgetContainer>
<NoteBlock noteBlock={{
	"title": "Kraber-AP Sniper",
	"description": "Fires a unique round that ensures 'one shot, one kill'.\\n(2d20 Attack take highest, Extreme range, you must concentrate and skip two attacks to attack with this weapon.)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "D-3 Triple Take",
	"description": "Triple-barrel sniper rifle with auto-tightening choke.\\n(1d4 Attack, Long range, increases to 3d4 the next time you use it if you skip an attack)."}}>
</NoteBlock>
</WidgetContainer>

## Anti-Lancer Weapons
<WidgetContainer>
<NoteBlock noteBlock={{
	"title": "Charge Rifle",
	"description": "Charged beam sniper rifle.\\n(1d6 Attack, Extreme range)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "Magnetic Grenade Launcher",
	"description": "Fires magnetic grenades that veer towards nearby lancers.\\n(1d6 Attack, +1 Fight)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "LG-97 Thunderbolt",
	"description": "Fires a large, slow-moving ball of electricity with a very wide AOE.\\n(1d4 Attack)"}}>
</NoteBlock>
<NoteBlock noteBlock={{
	"title": "Archer Heavy Rocket",
	"description": "The Archer fires a powerful homing rocket. It must be locked onto a target.\\n(1d8 Attack)"}}>
</NoteBlock>
</WidgetContainer>
`
}

const ProteanRPGChapterOne = {
  uuid: "protean-rpg-chapter-one.json",
  metadata: {
    type: "FOLDER",
    title: "Chapter One: What Is Protean?"
  },
  content: [
    ProteanIs,
    ThePlayers
  ]
}

const ProteanRPGChapterTwo = {
  uuid: "protean-rpg-chapter-two.json",
  metadata: {
    type: "FOLDER",
    title: "Chapter Two: Playing The Game"
  },
  content: [
    ActionBlocksAndTags,
    DefensesAndConditions,
    MakingChecks,
    ExampleOfPlay
  ]
}

const ProteanRPGChapterThree = {
  uuid: "protean-rpg-chapter-three.json",
  metadata: {
    type: "FOLDER",
    title: "Chapter Three: Rule Modules"
  },
  content: [
    CombatModule
  ]
}

const ProteanApp = {
  uuid: "protean-app.json",
  metadata: {
    type: "BOOK",
    title: "Protean App",
    activePage: 0
  },
  content: [
    CharacterSheets,
    TestPage
  ]
}

const ProteanRPG = {
  uuid: "protean-rpg.json",
  metadata: {
    type: "BOOK",
    title: "Protean RPG",
    activePage: 0
  },
  content: [
    ProteanRPGChapterOne,
    ProteanRPGChapterTwo,
    ProteanRPGChapterThree
  ]
}

const LancerSupplement = {
  uuid: "lancer-supplement.json",
  metadata: {
    type: "BOOK",
    title: "Lancer Supplement",
    activePage: 0
  },
  content: [
    LancerSettingPrimer,
    LancerCampaignPrimer,
    LancerCharacterCreation, 
		PilotWeapons
  ]
}

const BuiltInFiles = {
  [ProteanApp.uuid]: ProteanApp,
  [ProteanRPG.uuid]: ProteanRPG,
  [LancerSupplement.uuid]: LancerSupplement
}

function loadLocalStorage(key, defaultValue) {
  return localStorage.getItem(key) === null ? defaultValue : JSON.parse(localStorage.getItem(key));
}

function isNotBuiltInFile(uuid) {
  // console.log(`isNotBuiltInFile:${uuid}:${BuiltInFiles[uuid]}:${BuiltInFiles[uuid] === undefined}`);
  return BuiltInFiles[uuid] === undefined;
}

function saveNonBuiltInFiles(files) {
  // console.log("saveNonBuiltInFiles:FileNames:\n" + JSON.stringify(files.map(file => file.uuid)));
  var nonBuiltInFiles = files.filter(file => isNotBuiltInFile(file?.uuid));
  // console.log("saveNonBuiltInFiles:NonBuiltInFileNames:\n" + JSON.stringify(nonBuiltInFiles.map(file => file.uuid)));
  console.log("saveNonBuiltInFiles:\n" + JSON.stringify(nonBuiltInFiles, null, 2));
  localStorage.setItem("files", JSON.stringify(nonBuiltInFiles));
}

function updateTreeFile(treeFiles, newFile) {
	for (var i = 0; i < treeFiles.length; i++) {
		if (treeFiles[i].uuid === newFile.uuid) {
			treeFiles.splice(i, 1, newFile);
			return treeFiles;
		}
		// Call recursive function if this file has child files
		else if (Array.isArray(treeFiles[i].content) && treeFiles[i].content.length > 0) {
			updateTreeFile(treeFiles[i].content, newFile);
		}
	}

	// Default return
	return treeFiles;
}

// Gets all of the files needed for the application to run.
// This returns the built in files, local files, or the combination of the two.
function getFiles() {
  // Get all files that have been saved to local storage
  var localFiles = loadLocalStorage("files", null);
  console.log("getFiles:LocalFilesNames:\n" + JSON.stringify(localFiles?.map(file => file.uuid)));

  // Return the built in files if there are none in local storage
  if (localFiles === null) {
    console.log("getFiles:BuiltInFilesNames:" + JSON.stringify([...Object.values(BuiltInFiles)]?.map(file => file.uuid)));
    return [...Object.values(BuiltInFiles)];
  }
  // Return built in files and local storage files
  else {
    console.log("getFiles:BuiltInFilesNames+LocalFilesNames:" + JSON.stringify([...Object.values(BuiltInFiles), ...localFiles]?.map(file => file.uuid)));
    // console.log("getFiles:LocalFilesNames:" + JSON.stringify([...localFiles]));
    return [...Object.values(BuiltInFiles), ...localFiles];
  }
}

const GlobalStoreContext = createContext();
const initialGlobalState = {
	mode: "ReadingMode",
  darkMode: loadLocalStorage("darkMode", false),
  files: getFiles(),
  activeFile: {
    
  },
  fileIcons: {
    "BOOK": "ReadingMode",
    "SHEET": "TextDocumentShared",
    "PAGE": "TextDocument",
  }
};

const reducer = (globalState, action) => {
  switch (action.type) {
    case "setMode":
      return {
        ...globalState,
        mode: action?.payload.mode
      }
    case "setDarkMode":
      localStorage.setItem("darkMode", action?.payload.darkMode);
      return {
        ...globalState,
        darkMode: action?.payload.darkMode
      }
    case "uploadFile":
      const newFile = { ...action?.payload.file };
      const existingFileUuids = globalState.files.map(file => file.uuid);
      while (existingFileUuids.includes(newFile?.uuid)) {
        console.log(`Existing file with uuid '${newFile?.uuid}' exists.`);
        console.log(`Renaming new file...`);
        newFile.uuid = uuidv4();
        console.log(`Renamed new file to '${newFile.uuid}'`);
      }
      saveNonBuiltInFiles([...globalState.files, newFile]);
      return {
        ...globalState,
        files: [...globalState.files, newFile]
      }
		case "newDocument":
			var newDocument = {};
			switch (action?.payload.documentType) {
				case "BOOK":
					newDocument = {
						uuid: uuidv4(),
						metadata: {
							type: "BOOK",
							title: "untitled"
						},
						content: []
					};
					break;
				case "FOLDER":
					newDocument = {
						uuid: uuidv4(),
						metadata: {
							type: "FOLDER",
							title: "untitled"
						},
						content: []
					};
					break;
				case "PAGE":
					newDocument = {
						uuid: uuidv4(),
						metadata: {
							type: "PAGE",
							title: "untitled"
						},
						content: ``
					};
					break;
				case "SHEET":
					newDocument = {
						uuid: uuidv4(),
						metadata: {
							type: "SHEET",
							title: "untitled"
						},
						content: []
					};
					break;
			}
			switch (action?.payload.parentFile?.metadata.type) {
				case "BOOK":
					action?.payload.parentFile?.content.push(newDocument);
					saveNonBuiltInFiles(globalState.files);
					break;
				case "FOLDER":
					action?.payload.parentFile?.content.push(newDocument);
					saveNonBuiltInFiles(globalState.files);
					break;
				default:
					globalState.files.push(newDocument);
					saveNonBuiltInFiles(globalState.files);
					break;
			}
			return {
				...globalState
			}
    case "setActiveFile":
      return {
        ...globalState,
        activeFile: action?.payload.activeFile,
      }
    case "updateActiveFile":
			var filesCopy = [...globalState.files];
			updateTreeFile(filesCopy, action.payload.activeFile);
      saveNonBuiltInFiles(filesCopy);
      return {
        ...globalState,
				files: filesCopy,
        activeFile: action.payload.activeFile
      }
		case "updateFile":
			var filesCopy = [...globalState.files];
			updateTreeFile(filesCopy, action.payload.updateFile);
      saveNonBuiltInFiles(filesCopy);
      return {
        ...globalState,
				files: filesCopy
      }
    case "deleteFile":
      // Don't delete built in files
      if (isNotBuiltInFile(action?.payload.deleteFile?.uuid) == false) {
        console.log("Error: Cannot delete built in file.");
        return { ...globalState };
      }

      // Remove the file from the arrays
      console.log("deleteFile:originals:\n" + JSON.stringify(globalState?.files.map(f => f.uuid)));
      const files = globalState?.files.filter((file) => action?.payload.deleteFile?.uuid !== file.uuid);
      console.log("deleteFile:afterDelete:\n" + JSON.stringify(files.map(f => f.uuid)));

      // Save the new list of files in local storage
      saveNonBuiltInFiles(files);

      // Return the new in-memory global state
      // Nullifies the active file if it is the file we just deleted
      return {
        ...globalState,
        files: files,
        activeFile: action?.payload?.deleteFile?.uuid === globalState.activeFile?.uuid ? null : globalState.activeFile
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