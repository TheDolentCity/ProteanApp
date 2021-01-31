import React from "react";
import FileInputButton from "../buttons/file-input-button";
import { uploadFileRequest } from "../../../domains/upload"
import { GlobalStateContext } from "../../context/global-context"

function FileUploader(props) {
  // Access the global state
  const globalState = React.useContext(GlobalStateContext);

  // Handles the uploading of files
  var onChange = async (formData) => {
    var response = await uploadFileRequest(formData, (event) => {
      console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    });
    globalState.context.storage = response;
    console.log('response', response);
    console.log('globalState.context.storage', globalState.context.storage);
  };

  return (
    <FileInputButton
      uploadFileName="theFiles"
      onChange={onChange}
      allowMultipleFiles={true}>
      Upload File(s)
    </FileInputButton>
  );
}

export default FileUploader;