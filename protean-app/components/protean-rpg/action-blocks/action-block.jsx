import { Component } from 'react';
import Dice from '../../generic/game/dice';
import Surface, { SurfaceSection } from '../../generic/layout/surface';

export default class ActionBlock extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggleOpen = () => {
    this.setState((state) => {
      return { isOpen: !state.isOpen }
    });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <Surface>
          <SurfaceSection>
            <ActionBlockHeader onClick={this.toggleOpen}>
              <ActionBlockLabel>
                {this.props.header}
              </ActionBlockLabel>
            </ActionBlockHeader>
          </SurfaceSection>
          <SurfaceSection>
            <ActionBlockDice>
              Roll {this.props.dice}
            </ActionBlockDice>
          </SurfaceSection>
          <SurfaceSection>
            <ActionBlockBody>
              {this.props.body}
            </ActionBlockBody>
          </SurfaceSection>
        </Surface>
      );
    }
    else {
      return (
        <Surface>
          <SurfaceSection>
            <ActionBlockHeader onClick={this.toggleOpen}>
              <ActionBlockLabel>
                {this.props.header}
              </ActionBlockLabel>
            </ActionBlockHeader>
          </SurfaceSection>
        </Surface>
      );
    }
  }
}

function ActionBlockHeader(props) {
  return(
    <button onClick={props.onClick} className="flex w-full text-2xl text-left bg-white hover:bg-cyan-100 dark:hover:bg-gray-700 focus:outline-none">
      {props.children}
    </button>
  );
}

function ActionBlockDice(props) {
  return(
    <div className="flex-none px-4 py-2 font-bold border-t border-b border-gray-200 bg-gray-50">
      {props.children}
    </div>
  );
}

function ActionBlockLabel(props) {
  return(
    <div className="flex-grow px-4 py-2 truncate text-left dark:bg-gray-800">
      <span className="font-bold">
        {props.children}
      </span>
    </div>
  );
}

function ActionBlockBody(props) {
  return(
    <div className="px-4 py-2 text-base text-gray-600 bg-white">
      {props.children}
    </div>
  );
}