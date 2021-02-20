import { useGlobalStore } from '../../stores/global-store';
import { NavigationListSection } from './navigation-list';

export default function FileExplorer(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activePageDispatch(page) {
    return {
      type: "setActivePage",
      payload: {
        activePage: page
      }
    }
  }


  return (
    globalState.books.map(book => (
      console.log("BOOK:" + JSON.stringify(book)),
      <NavigationListSection section={book} onItemClick={(page) => dispatch(activePageDispatch(page))}></NavigationListSection>
    ))
  );
}