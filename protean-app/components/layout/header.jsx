export default function Header(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-4 my-auto items-center border-b border-gray-300 dark:border-gray-700">
      <h3 className="">
        {props.children}
      </h3>
    </div>
  );
}