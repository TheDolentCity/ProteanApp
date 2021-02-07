import { VscBook, VscEdit, VscTerminal } from "react-icons/vsc";

export default function ProteanAppCommandBar(props) {
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