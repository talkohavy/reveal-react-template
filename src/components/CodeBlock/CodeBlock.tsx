import type { PropsWithChildren } from 'react';

type CodeBlockProps = PropsWithChildren<{
  highlightLineNumbers?: boolean | string;
  /**
   * The line number that would appear on the left for the first line of the code snippet.
   *
   * Useful for when you cut a snippet from a large file, and you want the line numbers to
   * be exactly as they are in the original file.
   * @default 1
   */
  startFromLineNumber?: number;
  /**
   * @default auto-detect
   */
  language?:
    | 'javascript'
    | 'typescript'
    | 'html'
    | 'yaml'
    | 'sql'
    | 'css'
    | 'scss'
    | 'json'
    | 'markdown'
    | 'dockerfile'
    | 'python'
    | 'go'
    | 'java'
    | 'php'
    | 'matlab'
    | 'r'
    | 'dart'
    | 'curl'
    | 'awk'
    | 'svelte';
  className?: string;
}>;

export default function Code(props: CodeBlockProps) {
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
