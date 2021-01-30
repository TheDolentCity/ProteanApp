import React from "react";
import FileInputButton from "../buttons/file-input-button";
import { uploadFileRequest } from "../../../domains/upload"

function FileUploader(props) {
  // Handles the uploading of files
  var onChange = async (formData) => {
    var response = await uploadFileRequest(formData, (event) => {
      console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    });
    console.log('response', response);
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