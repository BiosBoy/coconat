interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  __REDUX_DEVTOOLS_EXTENSION__: any;
}

declare const __DEV__: string;
declare const __PROD__: string;
declare const __TEST__: string;

declare module '*.json' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.css' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.cssmodule.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.svg' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}
