# @react-components-lib-boilerplate/components
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.org/felippemauricio/promise-fn-retry.svg?branch=master)](https://travis-ci.org/felippemauricio/promise-fn-retry)
[![devDependencies Status](https://david-dm.org/felippemauricio/react-components-lib-boilerplate/tree/master/packages/components/dev-status.svg)](https://david-dm.org/felippemauricio/react-components-lib-boilerplate/tree/master/packages/components?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/felippemauricio/promise-fn-retry/badge.svg?branch=master)](https://coveralls.io/github/felippemauricio/promise-fn-retry?branch=master)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/fd5c63)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/felippemauricio/react-components-lib-boilerplate/pulls)

A components lib.

## Installation

Using yarn:
```js
  yarn add \
    polished \
    react \
    react-dom \
    styled-components \
    styled-components-modifiers \
    styled-theme \
    styled-tools \
    @react-components-lib-boilerplate/themes \
    @react-components-lib-boilerplate/components
```

Using npm:
```js
  npm i --save \
    polished \
    react \
    react-dom \
    styled-components \
    styled-components-modifiers \
    styled-theme \
    styled-tools \
    @react-components-lib-boilerplate/themes \
    @react-components-lib-boilerplate/components
```

## Usage

You need to import the **Theme** of `@react-components-lib-boilerplate/themes` and use these with **ThemeProvider**. After, import the components.

```js
  import React from 'react';
  import { ThemeProvider } from 'styled-components';
  import { Button } from '@react-components-lib-boilerplate/components';
  import Theme from '@react-components-lib-boilerplate/themes';

  function MyComponent() {
    return (
      <ThemeProvider theme={Theme.main}>
        <Button>Click Me</Button>
      </ThemeProvider>
    );
  }
```

## How is the component structured?

We recommend that your components have the following structure, like Button.

```
  /components
    /atoms
      /Button
        Button.js
        Button.modifiers.js
        Button.story.js
        Button.style.js
        Button.test.js
        index.js
    /molecules
```

Where:
- Component.js: Component code, with the `PropTypes` and `DefaultProps`
- Component.modifiers.js: Add the component modifiers, using `styled-components-modifiers` lib

## License

Licensed under the MIT License, Copyright © 2019-present Felippe Maurício.
