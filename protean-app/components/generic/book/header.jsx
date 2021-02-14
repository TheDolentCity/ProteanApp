export function Header1(props) {
  return (
    <h1 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h1>
  );
}

export function Header2(props) {
  return (
    <h2 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h2>
  );
}

export function Header3(props) {
  return (
    <h3 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h3>
  );
}

export function Header4(props) {
  return (
    <h4 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h4>
  );
}

export function Header5(props) {
  return (
    <h5 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h5>
  );
}

export function Header6(props) {
  return (
    <h6 className=
      {
        "mt-" + props.spaceBefore + " " +
        "mb-" + props.spaceAfter + " " +
        "leading-" + props.leading + " " +
        "text-" + props.fontSize + " " +
        "font-" + props.fontStyle
      }>
      {props.children}
    </h6>
  );
}

Header1.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "10",
  fontSize: "5xl",
  fontStyle: "bold"
}

Header2.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "9",
  fontSize: "3xl",
  fontStyle: "semibold"
}

Header3.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "7",
  fontSize: "xl",
  fontStyle: "semibold"
}

Header4.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "6",
  fontSize: "base",
  fontStyle: "semibold"
}

Header5.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "5",
  fontSize: "sm",
  fontStyle: "medium"
}

Header6.defaultProps = {
  spaceBefore: "0",
  spaceAfter: "0",
  leading: "4",
  fontSize: "xs",
  fontStyle: "medium"
}