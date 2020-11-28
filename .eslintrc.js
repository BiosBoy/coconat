module.exports = {
  extends: ['airbnb', 'plugin:import/react', 'prettier/@typescript-eslint', 'plugin:cypress/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    sourceType: 'module',
    createDefaultProgram: true
  },
  overrides: [
    {
      files: ['cypress/*/**'],
      rules: {
        'jest/no-disabled-tests': 'off',
        'jest/no-focused-tests': 'off',
        'jest/no-identical-title': 'off',
        'jest/valid-expect': 'off'
      }
    }
  ],
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'prefer-arrow',
    'react',
    'react-hooks',
    'import',
    'jest'
  ],
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
    es6: true
  },
  settings: {
    'import/parser': 'babel-eslint',
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$', 'node_modules'],
    'import/resolver': {
      node: {
        paths: [
          './src',
          './shared',
          './globals'
        ],
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.d.ts'
        ]
      }
    },
    react: {
      pragma: 'React',
      version: 'detect'
    },
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.d.ts'
    ],
    propWrapperFunctions: ['forbidExtraProps', 'exact', 'Object.freeze'],
    'import/core-modules': []
  },
  globals: {
    jest: true,
    react_disableWarnings: true,
    react_enableWarnings: true,
    __DEV__: true,
    __TEST__: true,
    __PROD__: true,
    __COVERAGE__: true,
    __NODE_ENV__: true,
    __WEBPACK_MODE__: true,
    __DEV_PATH__: true,
    WebsocketHandler: true,
    getAction: true
  },
  rules: {
    'react-hooks/rules-of-hooks': ['error'],
    'react-hooks/exhaustive-deps': ['warn'],
    // "indent": [
    //     1,
    //     2,
    //     {
    //         "SwitchCase": 1,
    //         "flatTernaryExpressions": false,
    //         "ignoreComments": false
    //     }
    // ],
    'import/extensions': [
      1,
      'always',
      {
        js: 'never',
        '.js': 'never',
        jsx: 'never',
        '.jsx': 'never',
        json: 'never',
        '.json': 'never',
        ts: 'never',
        '.ts': 'never',
        tsx: 'never',
        '.tsx': 'never',
        'd.ts': 'never',
        '.d.ts': 'never'
      }
    ],
    'import/no-named-as-default': [0],
    'linebreak-style': ['error', 'unix'],
    'no-restricted-imports': ['error', 'lodash'],
    'no-restricted-globals': [2, 'find'],
    'no-var': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all'
      }
    ],
    'vars-on-top': [0],
    'consistent-return': [1],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^prevState|^prevProps|^nextProps|^nextState|^_'
      }
    ],
    'no-cond-assign': [1, 'always'],
    'default-case': [
      1,
      {
        commentPattern: '^no default$'
      }
    ],
    'no-use-before-define': [
      1,
      {
        functions: true,
        classes: true,
        variables: true
      }
    ],
    'one-var-declaration-per-line': [1, 'always'],
    'no-confusing-arrow': [
      1,
      {
        allowParens: true
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': [
      1,
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'no-case-declarations': [1],
    'newline-per-chained-call': 'off',
    'no-restricted-syntax': [
      1,
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'guard-for-in': [1],
    'no-mixed-operators': [
      0,
      {
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['**', '+'],
          ['**', '-'],
          ['**', '*'],
          ['**', '/'],
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],
    'no-continue': [1],
    'func-name-matching': [
      1,
      'always',
      {
        includeCommonJSModuleExports: false
      }
    ],
    'prefer-template': 'error',
    'no-useless-escape': [1],
    'new-parens': 'error',
    'class-methods-use-this': [
      1,
      {
        exceptMethods: [
          'render',
          'getInitialState',
          'getDefaultProps',
          'getChildContext',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          'componentDidCatch',
          'getSnapshotBeforeUpdate'
        ]
      }
    ],
    'no-return-assign': [1, 'always'],
    'no-plusplus': [
      1,
      {
        allowForLoopAfterthoughts: true
      }
    ],
    'no-restricted-properties': [
      1,
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated'
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead'
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead'
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.'
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.'
      }
    ],
    'prefer-promise-reject-errors': [
      1,
      {
        allowEmptyReject: false
      }
    ],
    'one-var': ['off', 'never'],
    'object-shorthand': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true
      }
    ],
    'max-len': [
      'error',
      {
        code: 120
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'dot-location': [2, 'property'],
    'operator-linebreak': [
      2,
      'after',
      {
        overrides: {
          '>': 'before',
          '>=': 'before',
          '<': 'before',
          '<=': 'before',
          '||': 'before',
          '&&': 'before',
          '+': 'before',
          '-': 'before'
        }
      }
    ],
    'max-statements': [
      2,
      15,
      {
        ignoreTopLevelFunctions: true
      }
    ],
    'max-depth': [1, 2],
    complexity: [
      'error',
      {
        max: 15
      }
    ],
    'max-params': [1, 3],
    'max-nested-callbacks': [2, 3],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never'
      }
    ],
    semi: ['error', 'always'],
    'prefer-const': 'error',
    'no-param-reassign': [
      1,
      {
        props: false
      }
    ],
    'dot-notation': [
      'off',
      {
        allowKeywords: true,
        allowPattern: ''
      }
    ],
    'no-console': 'off',
    curly: ['error', 'multi-line'],
    'comma-dangle': [
      'error',
      {
        objects: 'never',
        arrays: 'never',
        functions: 'never'
      }
    ],
    'func-style': [
      2,
      'declaration',
      {
        allowArrowFunctions: true
      }
    ],
    'newline-after-var': [2, 'always'],
    'new-cap': [
      2,
      {
        capIsNewExceptions: ['When', 'Then', 'Given', 'Nothing', 'T', 'F'],
        newIsCap: false,
        capIsNew: false,
        properties: true
      }
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: false
      }
    ],
    'no-underscore-dangle': [
      0,
      {
        allowAfterThis: true,
        allow: [
          '__REDUX_DEVTOOLS_EXTENSION__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '__DEV__',
          '__DEV_PATH__',
          '__NODE_ENV__',
          '__INITIAL_STATE__',
          '_exception',
          '__html'
        ]
      }
    ],
    'arrow-parens': ['off', 'as-needed'],
    'jsx-quotes': [2, 'prefer-single'],
    'jsx-a11y/img-has-alt': [0],
    'jsx-a11y/aria-role': [
      1,
      {
        ignoreNonDom: false,
        ignoreNonDOM: false
      }
    ],
    'jsx-a11y/label-has-for': [
      0,
      {
        components: [],
        required: {
          every: ['nesting', 'id']
        },
        allowChildren: false
      }
    ],
    'jsx-a11y/label-has-associated-control': [
      0,
      {
        labelComponents: ['CustomLabel'],
        labelAttributes: ['inputLabel'],
        controlComponents: ['CustomInput'],
        assert: 'both',
        depth: 3
      }
    ],
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/html-has-lang': [1],
    'jsx-a11y/no-static-element-interactions': [
      1,
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
      }
    ],
    'jsx-a11y/anchor-has-content': [
      1,
      {
        components: []
      }
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      1,
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']
      }
    ],
    'jsx-a11y/alt-text': [
      1,
      {
        elements: ['img', 'object', 'area', 'input[type="image"]'],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': []
      }
    ],
    'jsx-a11y/iframe-has-title': [1],
    'jsx-a11y/no-autofocus': [
      1,
      {
        ignoreNonDOM: true
      }
    ],
    'jsx-a11y/media-has-caption': [
      1,
      {
        audio: [],
        video: [],
        track: []
      }
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      1,
      {
        tags: [],
        roles: ['tabpanel']
      }
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      1,
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell']
      }
    ],
    'jsx-a11y/interactive-supports-focus': [1],
    'react/jsx-indent': [1, 2],
    'react/jsx-props-no-spreading': [0],
    'react/jsx-fragments': [0, 'syntax'],
    'react/static-property-placement': [0],
    'react/no-array-index-key': [1],
    'react/no-will-update-set-state': [1],
    'react/jsx-boolean-value': [
      0,
      'never',
      {
        always: []
      }
    ],
    'react/require-default-props': [
      1,
      {
        forbidDefaultForRequired: true
      }
    ],
    'react/style-prop-object': [0],
    'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child'
      }
    ],
    'react/prefer-stateless-function': [
      0,
      {
        ignorePureComponents: true
      }
    ],
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true
      }
    ],
    'react/no-direct-mutation-state': [2],
    'react/jsx-key': [2],
    'react/no-find-dom-node': [1],
    'react/require-optimization': [
      0,
      {
        allowDecorators: ['pureRender', 'connect']
      }
    ],
    'react/jsx-filename-extension': [
      0,
      {
        extensions: ['.jsx']
      }
    ],
    'react/jsx-no-target-blank': [
      2,
      {
        enforceDynamicLinks: 'always'
      }
    ],
    'react/no-children-prop': [1],
    'react/forbid-prop-types': [
      2,
      {
        forbid: ['any']
      }
    ],
    'quote-props': ['error', 'as-needed'],
    'react/prop-types': [
      2,
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false
      }
    ],
    'react/display-name': [
      0,
      {
        ignoreTranspilerName: false
      }
    ],
    'react/jsx-indent-props': [1, 2],
    'react/no-multi-comp': [
      1,
      {
        ignoreStateless: true
      }
    ],
    'react/jsx-handler-names': [
      1,
      {
        eventHandlerPrefix: '_handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: true
      }
    ],
    'react/jsx-max-props-per-line': [
      1,
      {
        maximum: 2
      }
    ],
    'react/jsx-wrap-multilines': [
      0,
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line'
      }
    ],
    'react/no-unused-prop-types': [
      1,
      {
        customValidators: [],
        skipShapeProps: true
      }
    ],
    'react/sort-comp': [
      2,
      {
        order: [
          'instance-variables',
          'static-methods',
          'mixins',
          'displayName',
          'actions',
          'contextType',
          'contextTypes',
          'childContextTypes',
          'propTypes',
          'defaultProps',
          'pure',
          'statics',
          'state',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'getStoresState',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount',
          '/^component.+$/',
          '/^get.+$/',
          '/^on.+$/',
          '/^handle.+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ],
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
        amd: false,
        caseSensitive: true
      }
    ],
    'import/no-commonjs': [
      0,
      {
        allowPrimitiveModules: true
      }
    ],
    'import/named': [2],
    'import/namespace': [
      2,
      {
        allowComputed: true
      }
    ],
    'import/default': [2],
    'import/prefer-default-export': [1],
    'import/newline-after-import': [0],
    'import/unambiguous': [0],
    'import/no-webpack-loader-syntax': [1],
    'import/first': [1],
    'import/no-dynamic-require': [1],
    'import/no-deprecated': [1],
    'import/no-extraneous-dependencies': [
      0,
      {
        devDependencies: [
          'test/**',
          'tests/**',
          'spec/**',
          '**/__tests__/**',
          '**/__mocks__/**',
          'test.{js,jsx}',
          'test-*.{js,jsx}',
          '**/*{.,_}{test,spec}.{js,jsx}',
          '**/jest.config.js',
          '**/jest.setup.js',
          '**/vue.config.js',
          '**/webpack.config.js',
          '**/webpack.config.*.js',
          '**/rollup.config.js',
          '**/rollup.config.*.js',
          '**/gulpfile.js',
          '**/gulpfile.*.js',
          '**/Gruntfile{,.js}',
          '**/protractor.conf.js',
          '**/protractor.conf.*.js'
        ],
        optionalDependencies: false
      }
    ],
    'jest/no-disabled-tests': ['warn'],
    'jest/no-focused-tests': ['error'],
    'jest/no-identical-title': ['error'],
    'jest/valid-expect': ['error'],
    'no-multiple-empty-lines': 'error',
    'jsx-a11y/aria-props': ['error'],
    'jsx-a11y/aria-proptypes': ['error'],
    'jsx-a11y/aria-unsupported-elements': ['error'],
    'jsx-a11y/img-redundant-alt': ['error'],
    'jsx-a11y/mouse-events-have-key-events': ['error'],
    'jsx-a11y/no-access-key': ['error'],
    'jsx-a11y/no-onchange': ['off'],
    'jsx-a11y/role-has-required-aria-props': ['error'],
    'jsx-a11y/role-supports-aria-props': ['error'],
    'jsx-a11y/tabindex-no-positive': ['error'],
    'jsx-a11y/heading-has-content': [
      'error',
      {
        components: ['']
      }
    ],
    'jsx-a11y/lang': ['error'],
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: ['marquee', 'blink']
      }
    ],
    'jsx-a11y/scope': ['error'],
    'jsx-a11y/click-events-have-key-events': ['error'],
    'jsx-a11y/accessible-emoji': ['error'],
    'jsx-a11y/aria-activedescendant-has-tabindex': ['error'],
    'jsx-a11y/no-redundant-roles': ['error'],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation']
      }
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton']
      }
    ],
    'react/forbid-dom-props': [
      'off',
      {
        forbid: []
      }
    ],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true
      }
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-no-literals': [
      'off',
      {
        noStrings: true
      }
    ],
    'react/jsx-no-undef': ['error'],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true
      }
    ],
    'react/jsx-sort-prop-types': ['off'],
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true
      }
    ],
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-uses-react': ['error'],
    'react/jsx-uses-vars': ['error'],
    'react/no-danger': ['warn'],
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['off'],
    'react/no-did-update-set-state': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-set-state': ['off'],
    'react/no-string-refs': ['error'],
    'react/no-unknown-property': ['error'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/react-in-jsx-scope': ['error'],
    'react/require-render-return': ['error'],
    'react/self-closing-comp': ['error'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/no-render-return-value': ['error'],
    'react/forbid-component-props': [
      'off',
      {
        forbid: []
      }
    ],
    'react/forbid-elements': [
      'off',
      {
        forbid: []
      }
    ],
    'react/no-danger-with-children': ['error'],
    'react/no-unescaped-entities': ['error'],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-space-before-closing': ['off', 'always'],
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true
      }
    ],
    'react/void-dom-elements-no-children': ['error'],
    'react/default-props-match-prop-types': [
      'error',
      {
        allowRequiredDefaults: false
      }
    ],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-unused-state': ['error'],
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: ''
      }
    ],
    'react/no-typos': ['error'],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never'
      }
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-access-state-in-setstate': ['error'],
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false
      }
    ],
    'react/jsx-child-element-spacing': ['off'],
    'react/no-this-in-sfc': ['error'],
    'react/jsx-max-depth': ['off'],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/no-unsafe': ['off'],
    strict: ['error', 'never'],
    'import/export': ['error'],
    'import/no-named-as-default-member': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-amd': ['error'],
    'import/no-nodejs-modules': ['off'],
    'import/imports-first': ['off'],
    'import/no-duplicates': ['error'],
    'import/no-namespace': ['off'],
    'import/order': 'error',
    'import/no-restricted-paths': ['off'],
    'import/max-dependencies': [
      'off',
      {
        max: 10
      }
    ],
    'import/no-absolute-path': ['error'],
    'import/no-internal-modules': 'off',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.cssmodule.scss', '**/*.scss'] // this allows, for example: `import 'meteor/meteorhacks:unblock'` and `import './some-template.html'`
      }
    ],
    'import/no-named-default': ['error'],
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false
      }
    ],
    'import/exports-last': ['off'],
    'import/group-exports': ['off'],
    'import/no-default-export': ['off'],
    'import/no-named-export': ['off'],
    'import/no-self-import': ['error'],
    'import/no-cycle': [
      'error',
      {
        maxDepth: 1
      }
    ],
    'import/no-useless-path-segments': ['error'],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+'
      }
    ],
    'import/no-relative-parent-imports': ['off'],
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true
      }
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'constructor-super': ['error'],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'no-class-assign': ['error'],
    'no-const-assign': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': 'error',
    'no-new-symbol': ['error'],
    'no-this-before-super': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: true
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    'prefer-numeric-literals': ['error'],
    'prefer-reflect': ['off'],
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'require-yield': ['error'],
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
      }
    ],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error'],
    'yield-star-spacing': ['error', 'after'],
    'init-declarations': ['off'],
    'no-catch-shadow': ['off'],
    'no-delete-var': ['error'],
    'no-label-var': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': ['off'],
    'array-bracket-newline': ['off', 'consistent'],
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3
      }
    ],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 'error',
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false
        }
      }
    ],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['off'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-names': ['warn'],
    'function-paren-newline': ['error', 'consistent'],
    'id-blacklist': ['error', 'any', 'string', 'Boolean', 'Undefined'],
    'id-length': ['off'],
    'id-match': 'error',
    'implicit-arrow-linebreak': ['error', 'beside'],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true
          },
          throw: {
            after: true
          },
          case: {
            after: true
          }
        }
      }
    ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true
      }
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true
      }
    ],
    'lines-around-comment': ['off'],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    'max-statements-per-line': [
      'off',
      {
        max: 1
      }
    ],
    'multiline-comment-style': ['off', 'starred-block'],
    'multiline-ternary': ['off', 'never'],
    'newline-before-return': ['off'],
    'no-array-constructor': ['error'],
    'no-bitwise': ['error'],
    'no-inline-comments': ['off'],
    'no-lonely-if': ['error'],
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-assign': ['error'],
    'no-negated-condition': ['off'],
    'no-nested-ternary': ['error'],
    'no-new-object': ['error'],
    'no-spaced-func': ['error'],
    'no-tabs': ['error'],
    'no-ternary': ['off'],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false
      }
    ],
    'no-whitespace-before-property': ['error'],
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {}
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false
      }
    ],
    'operator-assignment': ['error', 'always'],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never'
      }
    ],
    'padding-line-between-statements': [
      'off',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'prefer-object-spread': ['off'],
    'require-jsdoc': ['off'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': ['error', 'last'],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true
      }
    ],
    'sort-vars': ['off'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': ['error'],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {}
      }
    ],
    'spaced-comment': 'error',
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'wrap-regex': ['off'],
    'callback-return': ['off'],
    'global-require': ['error'],
    'handle-callback-err': ['off'],
    'no-buffer-constructor': ['error'],
    'no-mixed-requires': ['off', false],
    'no-new-require': ['error'],
    'no-path-concat': ['error'],
    'no-process-env': ['off'],
    'no-process-exit': ['off'],
    'no-restricted-modules': ['off'],
    'no-sync': ['off'],
    'for-direction': ['error'],
    'getter-return': [
      'error',
      {
        allowImplicit: true
      }
    ],
    'no-async-promise-executor': ['off'],
    'no-await-in-loop': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-constant-condition': ['warn'],
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-ex-assign': ['error'],
    'no-extra-boolean-cast': ['error'],
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false
      }
    ],
    'no-extra-semi': ['error'],
    'no-func-assign': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-misleading-character-class': ['off'],
    'no-obj-calls': ['error'],
    'no-prototype-builtins': ['error'],
    'no-regex-spaces': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-negated-in-lhs': ['off'],
    'require-atomic-updates': ['off'],
    'use-isnan': ['error'],
    'valid-jsdoc': ['off'],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true
      }
    ],
    'accessor-pairs': ['off'],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true
      }
    ],
    'block-scoped-var': ['error'],
    eqeqeq: ['error', 'smart'],
    'max-classes-per-file': ['off', 1],
    'no-alert': ['warn'],
    'no-caller': ['error'],
    'no-div-regex': ['off'],
    'no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions', 'functions', 'methods']
      }
    ],
    'no-empty-pattern': ['error'],
    'no-eq-null': ['off'],
    'no-eval': 'error',
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-floating-decimal': ['error'],
    'no-global-assign': [
      'error',
      {
        exceptions: []
      }
    ],
    'no-native-reassign': ['off'],
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: []
      }
    ],
    'no-implicit-globals': ['off'],
    'no-implied-eval': ['error'],
    // "no-invalid-this": "error",
    'no-iterator': ['error'],
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false
      }
    ],
    'no-lone-blocks': ['error'],
    'no-loop-func': ['error'],
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false
      }
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false
      }
    ],
    'no-multi-str': ['error'],
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-wrappers': 'error',
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-proto': ['error'],
    'no-redeclare': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': [
      'error',
      {
        props: false
      }
    ],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-throw-literal': ['error'],
    'no-unmodified-loop-condition': ['off'],
    'no-unused-labels': ['error'],
    'no-useless-call': ['off'],
    'no-useless-catch': ['off'],
    'no-useless-concat': ['error'],
    'no-useless-return': ['error'],
    'no-void': ['error'],
    'no-warning-comments': [
      'off',
      {
        terms: ['todo', 'fixme', 'xxx'],
        location: 'start'
      }
    ],
    'no-with': ['error'],
    'prefer-named-capture-group': ['off'],
    radix: 'error',
    'require-await': ['off'],
    'require-unicode-regexp': ['off'],
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false
      }
    ],
    yoda: ['error'],
    // "@typescript-eslint/no-invalid-this": "error",
    // "@typescript-eslint/class-name-casing": "error",
    '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit'
      }
    ],
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        CallExpression: {
          arguments: 'first'
        },
        FunctionDeclaration: {
          parameters: 'first'
        },
        FunctionExpression: {
          parameters: 'first'
        }
      }
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        filter: { regex: '__', match: false }
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        filter: { regex: '__', match: false }
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'property',
        format: ['camelCase'],
        modifiers: ['private'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'method',
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase'],
        modifiers: ['private', 'protected', 'public', 'readonly'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'memberLike',
        modifiers: ['private', 'protected'],
        format: ['camelCase'],
        leadingUnderscore: 'require'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        prefix: ['T']
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        prefix: ['T']
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
        filter: { regex: '^(Window)', match: false }
      }
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false
        }
      }
    ],
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'signature',

          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',

          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',

          'public-field',
          'protected-field',
          'private-field',

          'static-field',
          'instance-field',
          'abstract-field',

          'field',

          'public-static-field',
          'protected-static-field',
          'private-static-field',

          'constructor',

          'public-static-method',
          'protected-static-method',
          'private-static-method',

          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',

          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',

          'public-method',
          'protected-method',
          'private-method',

          'static-method',
          'instance-method',
          'abstract-method',

          'method'
        ]
      }
    ],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/semi': ['error', 'always'],
    'no-null/no-null': 'off',
    'prefer-arrow/prefer-arrow-functions': 'warn',
    '@typescript-eslint/tslint/config': [
      // this block is added just for porting some of the useful rules from TSLint to ESLint
      'error',
      {
        lintFile: './tslint.json',
        rulesDirectory: ['node_modules/tslint-react/rules'],
        rules: {
          'jsx-no-multiline-js': true
        }
      }
    ]
  }
}
