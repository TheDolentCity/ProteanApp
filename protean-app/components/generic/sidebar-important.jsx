import { Component } from 'react'

class SidebarImportant extends Component {
  render() {
    return (
      <div className="p-4 mt-4 mb-8 rounded-lg bg-cyan-600 text-white">
        <h3 className="p-0 m-0 text-white">{this.props.title}</h3>
        <p className="p-0 m-0 text-white">{this.props.text}</p>
      </div>
    );
  }
}

export default SidebarImportant;