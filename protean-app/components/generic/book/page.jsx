export default function Page(props) {
  return (
    <article className="text-base font-normal">
      {props.children}
    </article>
  );
}