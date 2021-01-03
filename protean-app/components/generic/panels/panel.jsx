import { Component } from 'react'

class Panel extends Component {
  render() {
    return (
      <div className={"flex-auto " + this.props.css}>
        <div className="h-s05 max-h-s05 px-8 pt-3 border-b border-gray-300 dark:border-gray-700">
          {this.props.title}
        </div>
        <div className="h-s90 max-h-s90 p-8 whitespace-normal overflow-y-auto">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;