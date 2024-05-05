/**
 * @param {import('react').PropsWithChildren<{
 *   highlightLineNumbers?: boolean | string,
 *   startFromLineNumber?: number,
 *   className?: string
 * }>} props
 */
export default function Code(props) {
  const { highlightLineNumbers = true, startFromLineNumber, className, children } = props;

  // pre data-id

  return (
    <pre data-id='code-animation' className={className}>
      <code data-trim data-line-numbers={highlightLineNumbers} data-noescape data-ln-start-from={startFromLineNumber}>
        {children}
      </code>
    </pre>
  );
}
