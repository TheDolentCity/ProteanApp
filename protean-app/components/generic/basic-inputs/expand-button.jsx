import { Component } from 'react';

import { MdExpandMore, MdExpandLess } from 'react-icons/md'

export default class ExpandButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpanded: false };
  }

  toggleExpand = () => {
    this.setState((state) => {
      return { isExpanded: !state.isExpanded }
    });
  };

  render() {
    if (this.state.isExpanded) {
      return (
        <button 
          onClick={() => {this.toggleExpand(); this.props.onClick();}}
          className={"focus:outline-none " + this.props.css}>
          <MdExpandLess size="20"></MdExpandLess>
        </button>
      );
    }
    else {
      return (
        <button
          onClick={() => { this.toggleExpand(); this.props.onClick(); }}
          className={"focus:outline-none " + this.props.css}>
          <MdExpandMore size="20"></MdExpandMore>
        </button>
      );
    }
  }
}