/**
 * @typedef {import('./CodeBlock').CodeBlockProps} CodeBlockProps
 */

/**
 * @param {import('react').PropsWithChildren<CodeBlockProps>} props
 */
export default function Code(props) {
  const { highlightLineNumbers = true, startFromLineNumber, language, className, children } = props;

  const codeClassName = language ? `language-${language}` : '';

  return (
    <pre
      // style={{ tabSize: 2 }} // <--- this would have worked IF I had used tabs instead of spaces, which I'm not.
      data-id='code-animation'
      className={className}
    >
      <code
        className={codeClassName}
        data-line-numbers={highlightLineNumbers}
        data-ln-start-from={startFromLineNumber}
        data-noescape
        data-trim
      >
        {children}
      </code>
    </pre>
  );
}
