import ProteanPanel from '../protean-framework/protean-panel';
import PageNavigation from '../generic/navigation/page-navigation'

export default function PageNavigationPanel(props) {
  return (
    <ProteanPanel
      label={props.label}
      openCss="">
      <PageNavigation></PageNavigation>
    </ProteanPanel>
  );
}