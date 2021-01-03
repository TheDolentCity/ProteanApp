import { Component } from 'react'

class SidebarNote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar 
        light="false"
        bgColor="bg-gray-300"
        title={this.props.title}
        text={this.props.text}>
      </Sidebar>
    );
  }
}

export default SidebarNote;