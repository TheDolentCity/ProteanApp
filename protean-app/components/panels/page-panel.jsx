import Panel, { PanelCommands, PanelBody } from '../generic/layout/panel';

import { FiBook } from 'react-icons/fi'

export default function PagePanel(props) {
  return (
    <Panel
      icon={<FiBook size="20"></FiBook>}
      label="Protean RPG"
      openCss="">
      <PanelCommands>
        COMMANDS
      </PanelCommands>
      <PanelBody>
        {props.children}
      </PanelBody>
    </Panel>
  );
}