import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { ProteanToolButton, ProteanToolRow } from './protean-tool';

export default function ProteanFileUpload() {
  const { globalState, dispatch } = useGlobalStore();
  const fileInputRef = React.useRef(null);

  function uploadFileDispatch(newFile) {
    return {
      type: "uploadFile",
      payload: {
        file: newFile
      }
    }
  }

  function onClickHandler() {
    fileInputRef.current?.click();
  };

  function onChangeHandler(event) {
    if (!event.target.files?.length) {
      return;
    }
    const file = event.target?.files[0];
    const reader = new FileReader();
    reader.onload = e => {
      const contents = e.target.result;
      console.log("UPLOAD_CONTENTS:\n" + contents);
      dispatch(uploadFileDispatch(JSON.parse(contents)));
    };
    reader.readAsText(file);
  };

  return (
    <ProteanToolRow>
      <ProteanToolButton
        icon="Upload"
        onClick={onClickHandler}>
        Upload Files
      <input
          type="file"
          className="hidden"
          accept=".json,application/json,"
          multiple={false}
          onChange={onChangeHandler}
          ref={fileInputRef}
        />
      </ProteanToolButton>
    </ProteanToolRow>
  );
};