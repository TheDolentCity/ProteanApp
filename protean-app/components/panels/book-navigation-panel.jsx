import Panel, { PanelCommands, PanelBody } from '../generic/layout/panel';
import BookNavigation from '../generic/navigation/book-navigation'

import { FiMenu } from 'react-icons/fi'

export default function BookNavigationPanel(props) {
  return (
    <Panel
      icon={<FiMenu></FiMenu>}
      label="Table Of Contents"
      openCss="min-w-72 max-w-72">
      <PanelBody>
        <BookNavigation></BookNavigation>
      </PanelBody>
    </Panel>
  );
}