export default function ProteanAppBody(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full whitespace-nowrap overflow-hidden divide-x divide-gray-400 dark:divide-gray-600">
      {props.children}
    </div>
  );
}