export default function ProteanToolPanel(props) {
  return (
    <div className="flex-none flex flex-col min-w-72 max-w-72 whitespace-normal overflow-y-auto bg-gray-200 dark:bg-gray-800">
      <div className="flex-none flex h-8 max-h-8 my-auto px-2 items-center">
        <h6 className="pl-5 uppercase">
          Tool Panel
        </h6>
      </div>
      <div className="flex-grow">
        {props.children}
      </div>
    </div>
  );
}