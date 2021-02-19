import ProteanPanel from '../protean-framework/protean-panel';
import BookNavigation from '../generic/navigation/book-navigation'

export default function BookNavigationPanel(props) {
  return (
    <ProteanPanel
      label={props.label}
      openCss="">
      <BookNavigation></BookNavigation>
    </ProteanPanel>
  );
}