# @react-components-lib-boilerplate/themes
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/LICENSE.md)
[![Build Status](https://travis-ci.org/felippemauricio/promise-fn-retry.svg?branch=master)](https://travis-ci.org/felippemauricio/promise-fn-retry)
[![devDependencies Status](https://david-dm.org/felippemauricio/react-components-lib-boilerplate/tree/master/packages/components/dev-status.svg)](https://david-dm.org/felippemauricio/react-components-lib-boilerplate/tree/master/packages/components?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/felippemauricio/promise-fn-retry/badge.svg?branch=master)](https://coveralls.io/github/felippemauricio/promise-fn-retry?branch=master)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/fd5c63)](https://github.com/airbnb/javascript)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/felippemauricio/react-components-lib-boilerplate/pulls)

A theme lib.

## Installation

Using yarn:
```js
  yarn add \
    react \
    react-dom \
    styled-components \
    @react-components-lib-boilerplate/themes
```

Using npm:
```js
  npm i --save \
    react \
    react-dom \
    styled-components \
    @react-components-lib-boilerplate/themes
```

## Usage

You need to import the **ThemeProvider** of `styled-components` and pass one of Theme on `theme` prop.

App.js example.
```js
  import React from 'react';
  import { ThemeProvider } from 'styled-components';
  import Themes from '@react-components-lib-boilerplate/themes';

  function App() {
    return (
      <ThemeProvider theme={Themes.main}>
        // Your components
      </ThemeProvider>
    );
  }
```

## How to create a theme?

You need to create a file on `src/theme-conf` folder, like the following example. After, export this on `src/theme-conf/index.js` file.

```js
const theme = {
  palette = {
    primary: coolorsToHex('https://coolors.co/1976d2-2196f3-71bcf7-97cef9-c2e2fb'),
    secondary: coolorsToHex('https://coolors.co/c2185b-e91e63-f06292-f48caf-f8bbd0'),
  },
  fonts = {
    primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
    quote: 'Georgia, serif'
  },
  sizes = {
    maxWidth: '1100px'
  },
};
```

## License

Licensed under the MIT License, Copyright © 2019-present Felippe Maurício.

