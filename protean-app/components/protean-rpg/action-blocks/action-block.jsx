import { Component } from 'react'

class ActionBlock extends Component {
  render() {
    return (
      <div className="w-full rounded shadow-xl bg-white border-1 border-gray-300 dark:bg-gray-700">
        <div className="flex space-x-2">
          <div className="flex-none w-20 h-20 ml-4 mt-4 rounded border border-gray-900 dark:bg-gray-600"></div>
          <div className="flex-grow my-1 p-4 whitespace-nowrap">
            <p className="m-0 text-sm">Page 25</p>
            <h4 className="m-0">Action Block Name</h4>
            <p className="m-0 text-sm">Roll: [ . . . ]</p>
          </div>
          <div className="flex-auto h-28 p-4 rounded-r bg-gray-100">
            <p className="h-20 m-0 text-sm overflow-ellipsis overflow-hidden">
              The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ActionBlock;