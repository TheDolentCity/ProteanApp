import { Component } from 'react';
import Panel, { PanelCommands, PanelBody } from '../generic/layout/panel';
import FileUploader from '../generic/storage/file-uploader';
import Sheet from '../sheets/sheet'

import { GiStabbedNote } from 'react-icons/gi'

export default class SheetPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { file: undefined };
  }

  onFileUpload = (uploadedFile) => {
    console.log("UploadedFile: " + uploadedFile);
    this.setState({
      file: uploadedFile
    });
  };

  render() {
    return (
      <Panel
        icon={<GiStabbedNote size="20"></GiStabbedNote>}
        label="Character Sheet"
        openCss="min-w-72">
        <PanelCommands>
          <FileUploader onFileUpload={this.onFileUpload}></FileUploader>
        </PanelCommands>
        <PanelBody>
          <Sheet file={this.state.file}></Sheet>
        </PanelBody>
      </Panel>
    );
  }
}