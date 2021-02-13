import { VscBook, VscCloudDownload, VscCloudUpload, VscEdit, VscTerminal } from "react-icons/vsc";

export default function ProteanAppCommandBar(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-2 my-auto items-center">
      <CommandGroup>
        <CommandAdmin></CommandAdmin>
        <CommandRead></CommandRead>
        <CommandWrite></CommandWrite>
      </CommandGroup>
      <CommandGroup>
        <CommandUpload></CommandUpload>
        <CommandDownload></CommandDownload>
      </CommandGroup>
    </div>
  );
}

function CommandGroup(props) {
  return (
    <div className="flex-none flex h-full my-auto px-2 items-center border-r border-gray-400">
      <div className="space-x-1">
        {props.children}
      </div>
    </div>
  );
}

function Command(props) {
  return (
    <button onClick={props.onClick} className="flex-none p-2 my-auto justify-center hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none">
      {props.children}
    </button>
  );
}

function CommandAdmin(props) {
  return (
    <Command>
      <VscTerminal size="20"></VscTerminal>
    </Command>
  );
}

function CommandRead(props) {
  return (
    <Command>
      <VscBook size="20"></VscBook>
    </Command>
  );
}

function CommandWrite(props) {
  return (
    <Command>
      <VscEdit size="20"></VscEdit>
    </Command>
  );
}

function CommandUpload(props) {
  return (
    <Command>
      <VscCloudUpload size="20"></VscCloudUpload>
    </Command>
  );
}

function CommandDownload(props) {
  return (
    <Command>
      <VscCloudDownload size="20"></VscCloudDownload>
    </Command>
  );
}