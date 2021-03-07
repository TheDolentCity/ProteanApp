import FabricIcon from "../generic/icons/fabric-icon";

export default function ProteanAppCommandBar(props) {
  return (
    <div className="flex-none flex flex-col w-12 h-full mx-auto bg-black bg-opacity-20">
      {props.children}
    </div>
  );
}

export function CommandGroup(props) {
  return (
    <div className="flex flex-col mx-auto py-2 border-b border-black border-opacity-40">
      {props.children}
    </div>
  );
}

export function Command(props) {
  return (
    <button onClick={props.onClick} className="p-1">
      {props.children}
    </button>
  );
}

export function CommandAdmin() {
  return (
    <Command>
      <FabricIcon name="Settings"></FabricIcon>
    </Command>
  );
}

export function CommandRead() {
  return (
    <Command>
      <FabricIcon name="ReadingMode"></FabricIcon>
    </Command>
  );
}

export function CommandWrite() {
  return (
    <Command>
      <FabricIcon name="EditCreate"></FabricIcon>
    </Command>
  );
}

export function CommandUpload() {
  return (
    <Command>
      <FabricIcon name="Upload"></FabricIcon>
    </Command>
  );
}

export function CommandDownload() {
  return (
    <Command>
      <FabricIcon name="Download"></FabricIcon>
    </Command>
  );
}