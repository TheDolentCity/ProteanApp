import { Component } from 'react'

class SidebarNote extends Component {
  render() {
    return (
      <div className="p-4 mt-4 mb-8 rounded-lg bg-gray-200 dark:bg-gray-700">
        <h3 className="p-0 m-0 text-gray-900 dark:text-gray-100">{this.props.title}</h3>
        <p className="p-0 m-0 text-gray-900 dark:text-gray-100">{this.props.text}</p>
      </div>
    );
  }
}

export default SidebarNote;