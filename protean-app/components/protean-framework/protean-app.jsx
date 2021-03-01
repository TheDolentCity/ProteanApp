export default function ProteanApp(props) {
  return (
    // dark container
    <div className=""> 
      <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen font-sans text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-black">
        {props.children}
      </div>
    </div>
  );
}