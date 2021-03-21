import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { ProteanToolButton } from '../../protean-framework/protean-tools/protean-tool';

export default function ProteanFileUpload() {
  const { globalState, dispatch } = useGlobalStore();
  const fileInputRef = React.useRef(null);
  const formRef = React.useRef(null);

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

    var formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    formRef.current?.reset();

    console.log("=============== FORM DATA ===============");
    console.log(JSON.stringify(formData));
    console.log("=========================================");

    dispatch(uploadFileDispatch(formData[0]));
  };

  return (
    <form ref={formRef}>
      <ProteanToolButton
        icon="Upload"
        onClick={onClickHandler}>
        Upload
      </ProteanToolButton>
      <input
        type="file"
        className="hidden"
        accept=".json,application/json,"
        multiple={false}
        onChange={onChangeHandler}
        ref={fileInputRef}
      />
    </form>
  );
};