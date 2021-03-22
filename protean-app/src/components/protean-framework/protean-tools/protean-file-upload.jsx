import React from 'react';
import { useGlobalStore } from "../../stores/global-store";
import { ProteanToolButton } from '../../protean-framework/protean-tools/protean-tool';

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
      console.log("FILE:\n" + file);
      console.log("CONTENTS:\n" + contents);
      dispatch(uploadFileDispatch(JSON.parse(contents)));
    };
    reader.readAsText(file);
  };

  return (
    <ProteanToolButton
      icon="Upload"
      onClick={onClickHandler}>
      Upload
      <input
        type="file"
        className="hidden"
        accept=".json,application/json,"
        multiple={false}
        onChange={onChangeHandler}
        ref={fileInputRef}
      />
    </ProteanToolButton>
  );
  // return (
  //   <form ref={formRef}>
      
  //     <input
  //       type="file"
  //       className="acc-focus input-text flex w-full mx-auto px-4 py-1 space-x-3 items-center rounded hover:raise-10"
  //       accept=".json,application/json,"
  //       multiple={false}
  //       onChange={onChangeHandler}
  //       ref={fileInputRef}
  //     />
  //   </form>
  // );
};