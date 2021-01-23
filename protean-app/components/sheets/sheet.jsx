import { Component } from 'react';
import ActionBlock from "../protean-rpg/action-blocks/action-block";
import Dice from "../generic/game/dice"

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
            dice={<Dice count="1" size="4"></Dice>}
            header="Dexterity"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="3" size="6"></Dice>}
            header="Strength"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="5" size="8"></Dice>}
            header="Wisdom"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="7" size="10"></Dice>}
            header="The Blood of the Innocent"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="9" size="12"></Dice>}
            header="The Screams of the Wretched"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="11" size="20"></Dice>}
            header="Foul deeds awake/Now for wrath/Now for ruin"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
          <ActionBlock
            dice={<Dice count="13" size="100"></Dice>}
            header="And the Red Dawn!"
            body="The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?">
          </ActionBlock>
        </div>
      </div>
    );
  }
}

export default Sheet;