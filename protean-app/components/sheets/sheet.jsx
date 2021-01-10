import { Component } from 'react';
import ActionBlock from "../protean-rpg/action-blocks/action-block";

class Sheet extends Component {
  render() {
    return (
      <div className="">
        <h1>Carter Guyus</h1>
        <p>
          This is an example of the action blocks on a Protean character sheet.
        </p>
        <div className="w-full space-y-6">
          <ActionBlock
            title="Strength"
            dice="2d4"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?"> 
          </ActionBlock>
          <ActionBlock
            title="Dexterity"
            dice="4d6"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            title="Intelligence"
            dice="6d8"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            title="The Blood of the Innocent"
            dice="8d10"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            title="The Screams of the Wretched"
            dice="10d12"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            title="Foul deeds awake/Now for wrath/Now for ruin"
            dice="12d20"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            title="Foul deeds awake/Now for wrath/Now for ruin"
            dice="20d100"
            description="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
        </div>
      </div>
    );
  }
}

export default Sheet;