import { VscTerminal } from "react-icons/vsc";

export default function ProteanApp(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-gray-100 font-sans divide-y divide-gray-300 dark:text-gray-100 dark:bg-black dark:divide-gray-700">
      {props.children}
    </div>
  );
}

export function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center dark:bg-gray-900">
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-200 focus:outline-none">
        <VscTerminal size="16"></VscTerminal>
      </button>
      <h4 className="flex-none ml-2 mr-6">
        {props.children}
      </h4>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-200 focus:outline-none">
        <h5>
          File
        </h5>
      </button>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-200 focus:outline-none">
        <h5>
          View
        </h5>
      </button>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-200 focus:outline-none">
        <h5>
          Document
        </h5>
      </button>
    </div>
  );
}

export function ProteanAppCommandBar(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-2 my-auto items-center dark:bg-gray-900">
      <h3 className="flex-grow">
        {props.children}
      </h3>
    </div>
  );
}

export function ProteanAppBody(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full whitespace-nowrap overflow-hidden divide-x divide-gray-300 dark:divide-gray-700">
      {props.children}
    </div>
  );
}