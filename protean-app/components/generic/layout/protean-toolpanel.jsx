

export default function ProteanToolPanel(props) {
  return (
    <div className="flex-none flex flex-col min-w-72 max-w-72 whitespace-normal overflow-y-auto bg-gray-200 dark:bg-gray-800">
      {props.children}
    </div>
  );
}