import { Component } from 'react';
import ProteanPanel from '../generic/layout/protean-panel';
import Sheet from '../sheets/sheet'

export default class SheetPanel extends Component {
  render() {
    return (
      <ProteanPanel
        label="Character Sheet"
        openCss="min-w-72">
        <Sheet file={this.state?.file}></Sheet>
      </ProteanPanel>
    );
  }
}