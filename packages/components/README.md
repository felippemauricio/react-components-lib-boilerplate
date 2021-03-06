# @react-components-lib-boilerplate/components
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.org/felippemauricio/react-components-lib-boilerplate.svg?branch=master)](https://travis-ci.org/felippemauricio/react-components-lib-boilerplate)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://storybook.js.org)
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
  import Themes from '@react-components-lib-boilerplate/themes';

  // Other component example
  function MyComponent() {
    return (
      <div>
        <Button>Click Me</Button>
      </div>
    );
  }

  // App.js
  function App() {
    return (
      <ThemeProvider theme={Themes.main}>
        <MyComponent /> // Inside a ThemeProvider
      </ThemeProvider>
    );
  }
```

## How is the component structured?

We recommend that your components have the following structure, like a Button example.

```
  /src
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
- **Button.js**: Component code, with the `PropTypes` and `DefaultProps`. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/Button.js)
- **Button.modifiers.js**: The component modifiers, using `styled-components-modifiers` lib. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/Button.modifiers.js)
- **Button.story.js**: The storybook of component. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/Button.story.js)
- **Button.style.js**: The styled-components. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/Button.style.js)
- **Button.test.js**: The tests of components. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/Button.test.js)
- **index.js**: Export the **Button.js**. [example](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/packages/components/src/atoms/Button/index.js)

## License

Licensed under the MIT License, Copyright © 2019-present Felippe Maurício.
