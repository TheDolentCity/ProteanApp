import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: true};
  }

  // static propTypes = {
  //   children: PropTypes.instanceOf(Object).isRequired,
  //   icon: PropTypes.instanceOf(Object).isRequired,
  //   label: PropTypes.string.isRequired,
  //   isOpen: PropTypes.bool.isRequired,
  // };

  toggleOpen = () => {
    this.setState((state) => {
      return {isOpen: !state.isOpen}
    });
  };

  render() {
    return (
      <div className={"flex-auto h-screen whitespace-normal overflow-y-auto " + this.props.css}>
        <PanelHeader>
          <PanelHeaderIcon onClick={this.toggleOpen}>
            {this.props.icon}
          </PanelHeaderIcon>
          <PanelHeaderLabel>
            {this.props.label}
          </PanelHeaderLabel>
        </PanelHeader>
        <PanelBody isOpen={this.state.isOpen}>
          {this.props.children}
        </PanelBody>
      </div>
    );
  }
}

export function PanelHeader(props) {
  return (
    <div className="flex w-full h-12 px-6 my-auto items-center border-b border-gray-300 dark:border-gray-700">
      {props.children}
    </div>
  );
}

export function PanelBody(props) {
  if (props.isOpen) {
    return (
      <div className="w-full h-auto p-6 whitespace-normal overflow-y-auto">
        {props.children}
      </div>
    );
  }
  else return <div></div>;
}

export function PanelHeaderIcon(props) {
  return (
    <button onClick={props.onClick} className="p-2 my-auto mr-2 items-center hover:bg-gray-200 focus:outline-none">
      {props.children}
    </button>
  );
}

export function PanelHeaderLabel(props) {
  return (
    <h3>
      {props.children}
    </h3>
  );
}