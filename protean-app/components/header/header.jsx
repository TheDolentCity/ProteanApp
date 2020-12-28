import { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="fixed w-full px-8 py-4 bg-gray-50 border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
        <h3>Protean RPG</h3>
      </div>
    );
  }
}

export default Header;