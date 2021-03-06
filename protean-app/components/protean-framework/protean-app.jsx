export default function ProteanApp(props) {
  return (
    // dark container
    <div className="dark">
      <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen font-sans text-gray-1000 dark:text-gray-300 bg-gray-200 dark:bg-gray-900">
        {/* text-gray-1000 dark:text-gray-100 bg-gray-200 dark:bg-gray-1000 */}
        {props.children}
      </div>
    </div>
  );
}