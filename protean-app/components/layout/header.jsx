export default function Header(props) {
  return (
    <div className="flex w-full h-12 my-auto px-8 items-center border-b border-gray-300 dark:border-gray-700">
      <h3 className="flex-none">
        {props.children}
      </h3>
    </div>
  );
}