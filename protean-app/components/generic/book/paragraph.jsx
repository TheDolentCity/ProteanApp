export function Paragraph({ css, children }) {
  return (
    <p className={css}>
      {children}
    </p>
  );
}

Paragraph.defaultProps = {
  css: "my-4 mb-8 leading-6 text-gray-800 dark:text-gray-300",
}