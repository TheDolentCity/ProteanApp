import { Component } from 'react'
import FileInputButton from "../buttons/file-input-button";
import { uploadFileRequest } from "../../../domains/upload"

export default function AppContainer(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-gray-50 font-sans divide-y divide-gray-300 dark:text-gray-100 dark:bg-gray-900 dark:divide-gray-700">
      {props.children}
    </div>
  );
}

export class AppHeader extends Component {
  // Handles the uploading of files
  onChange = async (formData) => {
    var response = await uploadFileRequest(formData, (event) => {
      console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
    });
    console.log('response', response);
  };

  render() {
    return (
      <div className="flex-none flex flex-nowrap h-12 px-4 my-auto items-center">
        <h3 className="">
          {this.props.children}
        </h3>
        <FileInputButton
          uploadFileName="theFiles"
          onChange={this.onChange}
          allowMultipleFiles={true}>
          Upload File(s)
        </FileInputButton>
      </div>
    );
  }
}

export function AppBody(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full h-full whitespace-nowrap overflow-hidden divide-x divide-gray-300 dark:divide-gray-700">
      {props.children}
    </div>
  );
}

export function AppFooter(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-4 my-auto items-center">
      <h4 className="font-normal">
        {props.children}
      </h4>
    </div>
  );
}