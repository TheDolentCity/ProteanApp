

export default function ProteanToolPanel(props) {
  return (
    <div className="flex-none flex-col min-w-72 max-w-72 whitespace-normal overflow-y-auto divide-y divide-gray-400 dark:divide-gray-600">
      {props.children}
    </div>
  );
}