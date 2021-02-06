export function BulletedList(props) {
  return (
    <ul className="mt-4 mb-8 ml-4 list-disc list-outsidetext-base font-normal">
      {props.children}
    </ul>
  );
}

export function ListItem(props) {
  return (
    <li className="my-2">
      {props.children}
    </li>
  );
}