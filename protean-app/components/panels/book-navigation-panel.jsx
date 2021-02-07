import Panel from '../generic/layout/panel';
import BookNavigation from '../generic/navigation/book-navigation'

export default function BookNavigationPanel(props) {
  return (
    <Panel
      label={"Navigate " + props.bookName }
      openCss="min-w-72 max-w-72">
      <BookNavigation></BookNavigation>
    </Panel>
  );
}