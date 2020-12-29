import { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="fixed w-full px-8 py-4 bg-white border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default Header;