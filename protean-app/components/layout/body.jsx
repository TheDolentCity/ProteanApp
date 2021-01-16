export default function Body(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full whitespace-nowrap overflow-hidden divide-x divide-gray-300 dark:divide-gray-700">
      {props.children}
    </div>
  );
}