import { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className={"w-full px-8 pt-3 bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700 " + this.props.css}>
        <h3 className="">
          {this.props.children}
        </h3>
      </div>
    );
  }
}

export default Header;