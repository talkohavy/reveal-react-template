import type { PropsWithChildren } from 'react';

type CodeBlockProps = PropsWithChildren<{
  highlightLineNumbers?: boolean | string;
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
