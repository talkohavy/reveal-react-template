export type CodeBlockProps = {
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
  highlightLineNumbers?: boolean | string;
  startFromLineNumber?: number;
  className?: string;
};
