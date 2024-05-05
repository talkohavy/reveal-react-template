/**
 * @param {import('react').PropsWithChildren<{
 *   highlightLineNumbers?: boolean | string,
 *   startFromLineNumber?: number
 * }>} props
 */
export default function Code(props) {
  const { highlightLineNumbers, startFromLineNumber, children } = props;

  // pre data-id

  return (
    <pre data-id='code-animation'>
      <code data-trim data-line-numbers={highlightLineNumbers} data-noescape data-ln-start-from={startFromLineNumber}>
        {children}
      </code>
    </pre>
  );
}
