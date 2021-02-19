export default function NavigationList(props) {
  return (
    <nav className="flex flex-col w-full max-h-full whitespace-normal overflow-y-auto">
      { props.children }
    </nav>
  );
}