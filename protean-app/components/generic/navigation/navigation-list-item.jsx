export default function NavigationListItem(props) {
  return (
    <button onClick={props.onClick} className="flex-none h-6 my-auto px-2 hover:bg-protean-toolPanel-light-hoverBackground dark:hover:bg-protean-toolPanel-dark-hoverBackground focus:outline-none">
      <h6 className="pl-5 text-left truncate">
        {props.children}
      </h6>
    </button>
  );
}