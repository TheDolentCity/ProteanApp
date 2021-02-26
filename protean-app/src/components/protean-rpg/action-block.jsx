import { Component } from 'react';
import Dice from '../generic/game/dice';
import Surface, { SurfaceSection } from '../generic/layout/surface';

export default function ActionBlockPanel(props) {
  if (this.props.actionBlocks !== undefined) {
    return (
      <Surface>
        <SurfaceSection>
          {this.props.actionBlocks.map(function (actionBlock) {
            return (
              <ActionBlock
                dice={actionBlock.dice}
                header={actionBlock.header}
                body={actionBlock.body}>
              </ActionBlock>
            );
          })}
        </SurfaceSection>
      </Surface>
    );
  }
  else return <div></div>;
}

class ActionBlock extends Component {
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
        <ActionBlockContainer>
          <ActionBlockSection css="">
            <ActionBlockRollButton></ActionBlockRollButton>
            <ActionBlockHeader>
              {this.props.header}
            </ActionBlockHeader>
          </ActionBlockSection>
          <ActionBlockSection css="items-center font-semibold">
            <ActionBlockDice dice={this.props.dice}></ActionBlockDice>
          </ActionBlockSection>
          <ActionBlockSection css="px-4 pt-2 pb-4">
            {this.props.body}
          </ActionBlockSection>
        </ActionBlockContainer>
      );
    }
    else {
      return (
        <ActionBlockContainer>
          <ActionBlockSection css="">
            <ActionBlockRollButton></ActionBlockRollButton>
            <ActionBlockHeader>
              {this.props.header}
            </ActionBlockHeader>
          </ActionBlockSection>
        </ActionBlockContainer>
      );
    }
  }
}

function ActionBlockContainer(props) {
  return (
    <div className="text-base">
      {props.children}
    </div>
  );
}

function ActionBlockSection(props) {
  return (
    <div className={"flex w-full min-h-12 align-text-top text-left border-b border-gray-400 bg-white " + props.css}>
      {props.children}
    </div>
  );
}

function ActionBlockExpandButton(props) {
  return (
    <ExpandButton
      onClick={props.onClick}
      css="flex-none p-2 hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-white">
    </ExpandButton>
  );
}

function ActionBlockRollButton(props) {
  return (
    <button onClick={props.onClick} className="flex-none p-2 hover:bg-black hover:bg-opacity-10 dark:hover:bg-white focus:outline-none">
      
    </button>
  );
}

function ActionBlockHeader(props) {
  return (
    <div className="flex-grow ml-2 py-2 text-xl text-left dark:bg-gray-800">
      <span className="font-semibold">
        {props.children}
      </span>
    </div>
  );
}

function ActionBlockDice(props) {
  return (
    <div className="flex-none px-4 py-2">
      Roll <Dice count={props.dice.count} size={props.dice.size}></Dice>
    </div>
  );
}