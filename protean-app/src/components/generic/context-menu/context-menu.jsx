import useContextMenu from './use-context-menu';

export default function ContextMenu(props) {
  const { xPos, yPos, showMenu } = useContextMenu();
  
  if (showMenu) {
    return (
      <ul className="shadow-md bg-white dark:bg-black">
        { props.children }
      </ul>
    );
  }
  else {
    return (<ul></ul>);
  }
};