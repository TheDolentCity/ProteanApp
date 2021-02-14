import { VscBook, VscCloudDownload, VscCloudUpload, VscEdit, VscTerminal } from "react-icons/vsc";

export default function ProteanAppCommandBar(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-2 my-auto items-center">
      {props.children}
    </div>
  );
}

export function CommandGroup(props) {
  return (
    <div className="flex-none flex h-full my-auto px-2 items-center">
      <div className="space-x-1">
        {props.children}
      </div>
    </div>
  );
}

export function Command(props) {
  return (
    <button onClick={props.onClick} className="flex-none p-2 my-auto justify-center hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none">
      {props.children}
    </button>
  );
}

export function CommandAdmin(props) {
  return (
    <Command>
      <VscTerminal size="20"></VscTerminal>
    </Command>
  );
}

export function CommandRead(props) {
  return (
    <Command>
      <VscBook size="20"></VscBook>
    </Command>
  );
}

export function CommandWrite(props) {
  return (
    <Command>
      <VscEdit size="20"></VscEdit>
    </Command>
  );
}

export function CommandUpload(props) {
  return (
    <Command>
      <VscCloudUpload size="20"></VscCloudUpload>
    </Command>
  );
}

export function CommandDownload(props) {
  return (
    <Command>
      <VscCloudDownload size="20"></VscCloudDownload>
    </Command>
  );
}