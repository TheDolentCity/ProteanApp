import React from 'react';

export default function FileInputButton(props) {
  const fileInputRef = React.useRef(null);
  const formRef = React.useRef(null);

  const onClickHandler = () => {
    fileInputRef.current?.click();
  };

  const onChangeHandler = (event) => {
    if (!event.target.files?.length) {
      return;
    }

    var formData = new FormData();

    Array.from(event.target.files).forEach((file) => {
      formData.append(event.target.name, file);
    });

    props.onChange(formData);

    formRef.current?.reset();
  };

  return (
    <form ref = { formRef } >
      <button type="button" onClick={onClickHandler} className="px-2 py-1 text-sm font-semibold bg-yellow-600 hover:bg-yellow-700 focus:outline-none">
        {props.children}
      </button>
      <input
        accept={props.acceptedFileTypes}
        multiple={props.allowMultipleFiles}
        name={props.uploadFileName}
        onChange={onChangeHandler}
        ref={fileInputRef}
        className="hidden"
        type="file"
      />
    </form>
  );
};

FileInputButton.defaultProps = {
  acceptedFileTypes: '',
  allowMultipleFiles: true,
};