import { Component } from 'react'

class SidebarWarning extends Component {
  render() {
    return (
      <div className="p-4 mt-4 mb-8 rounded-md bg-yellow-600 text-gray-900 dark:text-gray-900">
        <h3 className="p-0 m-0 text-gray-900 dark:text-gray-900">{this.props.title}</h3>
        <p className="p-0 m-0 text-gray-900 dark:text-gray-900">{this.props.text}</p>
      </div>
    );
  }
}

export default SidebarWarning;