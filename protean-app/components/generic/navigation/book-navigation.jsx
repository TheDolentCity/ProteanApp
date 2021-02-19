import { useGlobalStore } from '../../stores/global-store';
import NavigationList from './navigation-list';
import NavigationListItem from './navigation-list-item';

export default function BookNavigation(props) {
  const { globalState, dispatch } = useGlobalStore();

  function activeBookDispatch(book) {
    return {
      type: "setActiveBook",
      payload: {
        activeBook: book
      }
    }
  }

  return (
    <NavigationList>
      {
        globalState.books?.map(book => (
          <NavigationListItem key={book.uuid} onClick={() => dispatch(activeBookDispatch(book))} >
            {book.title}
          </NavigationListItem>
        ))
      }
    </NavigationList>
  );
}