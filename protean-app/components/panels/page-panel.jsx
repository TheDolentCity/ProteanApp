import Panel from '../generic/layout/panel';

export default function PagePanel(props) {
  return (
    <Panel
      label="Protean RPG"
      openCss="">
      {props.children}
    </Panel>
  );
}