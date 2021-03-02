import ProteanPanel from '../protean-framework/protean-panel';
import DiceRoller from '../generic/game/dice-roller';

export default function DiceRollerPanel(props) {
  return (
    <ProteanPanel
      label={props.label}
      openCss="">
      <DiceRoller></DiceRoller>
    </ProteanPanel>
  );
}