declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.svg';
declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  const content: string;
  export default content;
}

// added this so that import.meta.env won't error and say: "Property 'env' does not exist on type 'ImportMeta'""
interface ImportMeta {
  readonly env: any;
}

declare module 'reveal.js/plugin/highlight/highlight.js' {
  function RevealHighlight(options?: any): any;
  export default RevealHighlight;
}

declare module 'reveal.js/plugin/markdown/markdown.js' {
  function RevealMarkdown(options?: any): any;
  export default RevealMarkdown;
}

declare module 'reveal.js/plugin/math/math.js' {
  const RevealMath: { KaTeX: any };
  export default RevealMath;
}

declare module 'reveal.js/plugin/notes/notes.js' {
  function RevealNotes(options?: any): any;
  export default RevealNotes;
}
