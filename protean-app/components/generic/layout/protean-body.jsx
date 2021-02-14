export default function ProteanAppBody(props) {
  return (
    <div className="flex-grow flex flex-nowrap w-full whitespace-nowrap overflow-hidden">
      {props.children}
    </div>
  );
}