export default function AppContainer(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-white font-sans dark:text-gray-100 dark:bg-gray-900">
      {props.children}
    </div>
  );
}