

export default function Page(props) {
  return (
    <article className="p-8 text-base font-normal bg-white dark:bg-black">
      {props.children}
    </article>
  );
}