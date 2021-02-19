import { useGlobalStore } from '../../stores/global-store';
import NavigationList from './navigation-list';
import NavigationListItem from './navigation-list-item';

export default function PageNavigation(props) {
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
    <NavigationList>
      {
        globalState.activeBook?.pages?.map(page => (
          <NavigationListItem key={page.uuid} onClick={() => dispatch(activePageDispatch(page))} >
            {page.title}
          </NavigationListItem>
        ))
      }
    </NavigationList>
  );
}