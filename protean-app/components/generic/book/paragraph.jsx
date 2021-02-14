export default function Paragraph(props) {
  return (
    <p className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading
      }>
      {props.block.text}
    </p>
  );
}

Paragraph.defaultProps = {
  spaceBefore: "4",
  spaceAfter: "8",
  leading: "6"
}