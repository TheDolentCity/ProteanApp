export default function ProteanApp(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen font-sans text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900">
      {props.children}
    </div>
  );
}