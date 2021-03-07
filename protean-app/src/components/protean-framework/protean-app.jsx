export default function ProteanApp(props) {
  return (
    // dark container
    <div className="">
      <div className="flex w-screen h-screen max-w-screen max-h-screen font-sans text-gray-800 dark:text-gray-300 bg-blueGray-150 dark:bg-gray-900">
        {props.children}
      </div>
    </div>
  );
}