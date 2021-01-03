import { Component } from 'react'

class Sidebar extends Component {
  render() {
    switch (this.props.light) {
      case "true":
        return (
          <div className={"p-4 mt-4 mb-8 rounded-md shadow-lg text-white dark:text-gray-900" + this.props.bgColor}>
            <h3 className="p-0 m-0 text-white dark:text-gray-900">{this.props.title}</h3>
            <p className="p-0 m-0 text-white dark:text-gray-900">{this.props.text}</p>
          </div>
        );
      case "false":
        return (
          <div className={"p-4 mt-4 mb-8 rounded-md shadow-lg text-gray-900 dark:text-white" + this.props.bgColor}>
            <h3 className="p-0 m-0 text-gray-900  dark:text-white">{this.props.title}</h3>
            <p className="p-0 m-0 text-gray-900  dark:text-white">{this.props.text}</p>
          </div>
        );
      default:
        return (
          <div className={"p-4 mt-4 mb-8 rounded-md shadow-lg " + this.props.bgColor}>
            <h3 className="p-0 m-0">{this.props.title}</h3>
            <p className="p-0 m-0">{this.props.text}</p>
          </div>
        );
    }
  }
}

export default Sidebar;