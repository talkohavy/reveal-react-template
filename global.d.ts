declare module '*.svg' {
  const content: string;
  export default content;
}

// added this so that import.meta.env won't error and say: "Property 'env' does not exist on type 'ImportMeta'""
interface ImportMeta {
  readonly env: any;
}

declare module 'vite-plugin-svgr' {
  function svgr(options?: any): any;
  export default svgr;
}
