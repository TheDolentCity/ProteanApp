export default function Panel(props) {
  return (
    <div className={"flex-auto " + props.css}>
      <div className="h-screen whitespace-normal overflow-y-auto">
        {props.children}
      </div>
    </div>
  );
}

export function PanelHeader(props) {
  return (
    <div className="flex w-full h-12 px-6 my-auto items-center border-b border-gray-300 dark:border-gray-700">
      {props.children}
    </div>
  );
}

export function PanelBody(props) {
  return (
    <div className="w-full h-auto p-6 whitespace-normal overflow-y-auto">
      {props.children}
    </div>
  );
}

export function PanelHeaderIcon(props) {
  return (
    <button onClick="" className="pr-2 hover:bg-gray-200">
      {props.children}
    </button>
  );
}

export function PanelHeaderText(props) {
  return (
    <h3>
      {props.children}
    </h3>
  );
}