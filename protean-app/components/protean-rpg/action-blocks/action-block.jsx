import { Component } from 'react'

class ActionBlock extends Component {
  render() {
    return (
      <div className="w-full rounded shadow-lg bg-white border-1 border-gray-300 dark:bg-gray-700">
        <div className="flex space-x-2">
          <div className="flex-none p-4 text-4xl font-bold">
            {this.props.dice}
          </div>
          <div className="flex-grow p-4 rounded-r truncate bg-gray-100">
            <span className="text-4xl font-semibold">
              {this.props.title}
            </span>
          </div>
          {/* <div className="flex-grow my-1 p-4 whitespace-nowrap">
            <button className="rounded m-0 px-2 py-1 text-white bg-cyan-600 hover:bg-cyan-800 focus:outline-none">
              Roll The Dice!
            </button>
          </div> */}
          {/* <span className="p-4 rounded-r bg-gray-100"> */}
            {/* <p className="m-0 text-4xl font-semibold">
              {this.props.title}
            </p> */}
            {/* <p className="max-h-20 m-0 text-4xl overflow-ellipsis overflow-hidden">
              {this.props.title}
            </p> */}
            {/* <button className="inline-block">

            </button> */}
            {/* <p className="max-h-20 m-0 text-sm overflow-ellipsis overflow-hidden">
              {this.props.description}
            </p> */}
          {/* </span> */}
        </div>
      </div>
    );
  }
}

export default ActionBlock;