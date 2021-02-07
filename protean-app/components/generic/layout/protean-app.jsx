export default function ProteanApp(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-gray-100 font-sans divide-y divide-gray-300 dark:text-gray-100 dark:bg-black dark:divide-gray-700">
      {props.children}
    </div>
  );
}