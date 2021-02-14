export default function ProteanApp(props) {
  return (
    <div className="flex flex-col w-screen h-screen max-w-screen max-h-screen font-sans bg-protean-light text-protean-dark dark:bg-protean-dark dark:text-protean-light">
      {props.children}
    </div>
  );
}