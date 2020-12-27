import { Component } from 'react'
import Nav from './Nav'

class NavigationPanel extends Component {
  render() {
    return(
      <div>
        <div className="w-full p-4 shadow-md bg-white dark:bg-gray-900">
          <h3>Protean RPG</h3>
        </div>
        <Nav></Nav>
      </div>
    );
  }
}

export default NavigationPanel;