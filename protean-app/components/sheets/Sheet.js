import { Component } from 'react';
import ActionBlock from "../protean-rpg/action-blocks/action-block";

class Sheet extends Component {
  render() {
    return (
      <div className="w-full h-full p-8">
        <h1>Character Sheet</h1>
        <p>
          This is an example of the action blocks on a Protean character sheet.
        </p>
        <div className="w-full space-y-4">
          <ActionBlock></ActionBlock>
          <ActionBlock></ActionBlock>
          <ActionBlock></ActionBlock>
          <ActionBlock></ActionBlock>
          <ActionBlock></ActionBlock>
          <ActionBlock></ActionBlock>
        </div>
      </div>
    );
  }
}

export default Sheet;