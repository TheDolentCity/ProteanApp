import { Component } from 'react';
import PropTypes from 'prop-types';

export default class PanelContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: true};
  }

  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    icon: PropTypes.instanceOf(Object).isRequired,
    label: PropTypes.string.isRequired,
  };

  toggleOpen = () => {
    this.setState((state) => {
      return {isOpen: !state.isOpen}
    });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <div className={"flex-1 flex flex-col whitespace-normal " + this.props.openCss}>
          <PanelHeader>
            <PanelIcon onClick={this.toggleOpen}>
              {this.props.icon}
            </PanelIcon>
            <PanelHeaderLabel>
              {this.props.label}
            </PanelHeaderLabel>
          </PanelHeader>
          {this.props.children}
        </div>
      );
    }
    else {
      return (
        <div className={"flex-none w-16 " + this.props.closedCss}>
          <PanelHeader>
            <PanelIcon onClick={this.toggleOpen}>
              {this.props.icon}
            </PanelIcon>
          </PanelHeader>
        </div>
      );
    }
  }
}

function PanelHeader(props) {
  return (
    <div className={"flex-none flex w-full h-12 px-4 my-auto items-center border-b border-gray-300 dark:border-gray-700" + props.css}>
      {props.children}
    </div>
  );
}

function PanelIcon(props) {
  return (
    <button onClick={props.onClick} className="inline-block p-2 my-auto justify-center hover:bg-gray-200 focus:outline-none">
      {props.children}
    </button>
  );
}

function PanelHeaderLabel(props) {
  return (
    <h3 className="ml-2 truncate">
      {props.children}
    </h3>
  );
}

export function PanelCommands(props) {
  return (
    <div className={"flex-none flex w-full h-12 px-6 my-auto items-center border-b border-gray-300 dark:border-gray-700" + props.css}>
      {props.children}
    </div>
  );
}

export function PanelBody(props) {
  return (
    <div className="flex-grow w-full p-6 whitespace-normal overflow-y-auto">
      {props.children}
    </div>
  );
}