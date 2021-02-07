import { Component } from 'react';
import Panel from '../generic/layout/panel';
import Sheet from '../sheets/sheet'

export default class SheetPanel extends Component {
  render() {
    return (
      <Panel
        label="Character Sheet"
        openCss="min-w-72">
        <Sheet file={this.state?.file}></Sheet>
      </Panel>
    );
  }
}