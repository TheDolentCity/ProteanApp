import { Component } from 'react'

class SidebarTip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar
        light="false"
        bgColor="bg-magenta-600"
        title={this.props.title}
        text={this.props.text}>
      </Sidebar>
    );
  }
}

export default SidebarTip;