import ProteanPanel from '../generic/layout/protean-panel';

export default function PagePanel(props) {
  return (
    <ProteanPanel
      label="Protean RPG"
      openCss="">
      {props.children}
    </ProteanPanel>
  );
}