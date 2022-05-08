declare module '*.jpeg';
declare module '*.svg';
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
