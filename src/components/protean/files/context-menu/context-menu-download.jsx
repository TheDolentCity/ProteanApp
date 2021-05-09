import React from 'react';
import { SmallItem } from '../item';

export default function ContextMenuDownload({ file }) {
  const fileOutputRef = React.useRef(null);

  function downloadFile(event) {
    event.preventDefault();

    if (file !== null) {
      const blob = new Blob([JSON.stringify(file)], { type: 'text/json;charset=utf-8' });
      const fileDownloadUrl = URL.createObjectURL(blob);
      fileOutputRef.current?.setAttribute("href", fileDownloadUrl);
      fileOutputRef.current?.click();
    }
  }

  return (
    <div className="w-full">
      <SmallItem
        onClick={downloadFile}
        icon="Download">
        Download File
      </SmallItem>
      <a
        className="hidden"
        href=""
        download={file.uuid}
        ref={fileOutputRef}>
        DOWNLOAD
      </a>
    </div>
  );
}