import ProteanPanel from '../generic/layout/protean-panel';
import BookNavigation from '../generic/navigation/book-navigation'

export default function BookNavigationPanel(props) {
  return (
    <ProteanPanel
      label={"Navigate " + props.bookName }
      openCss="">
      <BookNavigation></BookNavigation>
    </ProteanPanel>
  );
}