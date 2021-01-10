import { Component } from 'react'

class ActionBlock extends Component {
  render() {
    return (
      <button className="w-full rounded shadow-lg text-left text-2xl bg-white border-1 border-gray-300 group dark:bg-gray-700">
        <div className="flex">
          <div className="flex-none p-4 rounded-l font-bold group-hover:bg-cyan-300 dark:group-hover:bg-cyan-700">
            {this.props.dice}
          </div>
          <div className="flex-grow p-4 rounded-r truncate bg-gray-100 group-hover:bg-cyan-400 dark:bg-gray-800 dark:group-hover:bg-cyan-600">
            <span className="font-semibold">
              {this.props.title}
            </span>
          </div>
        </div>
      </button>
    );
  }
}

export default ActionBlock;