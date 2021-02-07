import { VscBook, VscEdit, VscTerminal } from "react-icons/vsc";

export default function ProteanApp(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-gray-100 font-sans divide-y divide-gray-300 dark:text-gray-100 dark:bg-black dark:divide-gray-700">
      {props.children}
    </div>
  );
}

export function ProteanAppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-8 px-2 my-auto items-center bg-gray-200 dark:bg-gray-900">
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 focus:outline-none">
        <VscTerminal size="16"></VscTerminal>
      </button>
      <h4 className="flex-none ml-2 mr-6">
        {props.children}
      </h4>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 focus:outline-none">
        <h5>
          File
        </h5>
      </button>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 focus:outline-none">
        <h5>
          View
        </h5>
      </button>
      <button className="flex-none h-full my-auto px-2 justify-center hover:bg-gray-300 focus:outline-none">
        <h5>
          Document
        </h5>
      </button>
    </div>
  );
}

export function ProteanAppCommandBar(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-2 my-auto items-center">
      <div className="flex-none flex h-full my-auto pr-2 items-center border-r border-gray-300">
        <div className="space-x-1">
          <CommandAdmin></CommandAdmin>
          <CommandRead></CommandRead>
          <CommandWrite></CommandWrite>
        </div>
      </div>
      <div className="flex-none flex h-full my-auto px-2 items-center border-r border-gray-300">
        <div className="space-x-1">
          <CommandAdmin></CommandAdmin>
          <CommandRead></CommandRead>
          <CommandWrite></CommandWrite>
        </div>
      </div>
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

export function CommandAdmin(props) {
  return (
    <button className="flex-none p-2 my-auto justify-center hover:bg-gray-200 focus:outline-none">
      <VscTerminal size="20"></VscTerminal>
    </button>
  );
}

export function CommandRead(props) {
  return (
    <button className="flex-none p-2 my-auto justify-center hover:bg-gray-200 focus:outline-none">
      <VscBook size="20"></VscBook>
    </button>
  );
}

export function CommandWrite(props) {
  return (
    <button className="flex-none p-2 my-auto justify-center hover:bg-gray-200 focus:outline-none">
      <VscEdit size="20"></VscEdit>
    </button>
  );
}