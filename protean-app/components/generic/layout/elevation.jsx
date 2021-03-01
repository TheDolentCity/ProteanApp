export default function Elevation(props) {
  return (
    <div className={"shadow-md " + props.css}>
      {props.children}
    </div>
  );
}