export default function Body(props) {
  return (
    <div className="flex whitespace-nowrap divide-x divide-gray-300 dark:divide-gray-700">
      {props.children}
    </div>
  );
}