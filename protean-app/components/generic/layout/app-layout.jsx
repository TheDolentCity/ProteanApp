import FileUploader from '../storage/upload-files';

export default function AppContainer(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen text-gray-900 bg-gray-50 font-sans divide-y divide-gray-300 dark:text-gray-100 dark:bg-gray-900 dark:divide-gray-700">
      {props.children}
    </div>
  );
}

export function AppHeader(props) {
  return (
    <div className="flex-none flex flex-nowrap h-12 px-4 my-auto items-center">
      <h3 className="flex-grow">
        {props.children}
      </h3>
      <FileUploader></FileUploader>
    </div>
  );
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