

export default function Page(props) {
  return (
    <article className="p-8 text-base font-normal">
      {props.children}
    </article>
  );
}