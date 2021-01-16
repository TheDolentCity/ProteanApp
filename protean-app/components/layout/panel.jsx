import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
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
        <div className={"flex-auto h-full whitespace-normal " + this.props.openCss}>
          <PanelHeader>
            <PanelIcon onClick={this.toggleOpen}>
              {this.props.icon}
            </PanelIcon>
            <PanelHeaderLabel isOpen={this.state.isOpen}>
              {this.props.label}
            </PanelHeaderLabel>
          </PanelHeader>
          <PanelBody isOpen={this.state.isOpen}>
            {this.props.children}
          </PanelBody>
        </div>
      );
    }
    else {
      return (
        <div className={"flex-none w-16 h-full " + this.props.closedCss}>
          <PanelHeader css="items-center">
            <PanelIcon onClick={this.toggleOpen}>
              {this.props.icon}
            </PanelIcon>
          </PanelHeader>
        </div>
      );
    }
  }
}

export function PanelHeader(props) {
  return (
    <div className={"flex w-full h-12 px-4 my-auto items-center border-b border-gray-300 dark:border-gray-700" + props.css}>
      {props.children}
    </div>
  );
}

export function PanelIcon(props) {
  return (
    <button onClick={props.onClick} className="inline-block p-2 my-auto justify-center hover:bg-gray-200 focus:outline-none">
      {props.children}
    </button>
  );
}

export function PanelHeaderLabel(props) {
  return (
    <h3 className="ml-2 truncate">
      {props.children}
    </h3>
  );
}

export function PanelBody(props) {
  return (
    <div className="w-full h-full p-6 whitespace-normal overflow-y-auto">
      {props.children}
    </div>
  );
}