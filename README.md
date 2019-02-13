<p align="center">
  <img alt="react-components-lib" src="https://raw.githubusercontent.com/felippemauricio/react-components-lib-boilerplate/master/docs/images/tools.jpg" width="546" />
</p>

<p align="center">
  A boilerplate to build a React component library.
</p>

<p align="center">
  <a href="https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/LICENSE.md">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="GitHub license" />
  </a>
  <a href="https://github.com/felippemauricio/react-components-lib-boilerplate/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome" />
  </a>
</p>
<p align="center">
  <a href="https://travis-ci.org/felippemauricio/react-components-lib-boilerplate">
    <img src="https://travis-ci.org/felippemauricio/react-components-lib-boilerplate.svg?branch=master" alt="Build Status" />
  </a>
  <a href="https://david-dm.org/felippemauricio/react-components-lib-boilerplate?type=dev">
    <img src="https://david-dm.org/felippemauricio/react-components-lib-boilerplate/dev-status.svg" alt="devDependencies Status" />
  </a>
  <a href="https://github.com/airbnb/javascript">
    <img src="https://badgen.net/badge/code%20style/airbnb/fd5c63" alt="Code Style" />
  </a>
  <a href="https://github.com/facebook/jest">
    <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="Tested with jest" />
  </a>
  <a href="https://storybook.js.org/">
    <img src="https://github.com/storybooks/press/blob/master/badges/storybook.svg" alt="Storybook" />
  </a>
</p>

## Motivation

To finish with reworking when working with micro front ends, it is necessary to share components between different projects. So I created this project to don\`t repeat confs  on new libs and facilitate the work of new developers.

## How to create a project using this boilerplate?

1. Clone this repository.
2. Run the `script-name-replace` to change project name([more](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/docs/script-name-replace.md)).
3. Modify and create themes on theme package.
4. Modify and create components on components package.

## How is the repo structured?

This repo is managed as a [monorepo](https://github.com/felippemauricio/react-components-lib-boilerplate/blob/master/docs/monorepo.md) that is composed of two packages: [**themes**](https://github.com/felippemauricio/react-components-lib-boilerplate/tree/master/packages/themes) and [**components**](https://github.com/felippemauricio/react-components-lib-boilerplate/tree/master/packages/components).

## Commands

You need to run this command before the `storybook`, `lint` or `test` commands, becouse it is necessary to create links.

### How to build project?

```sh
  yarn build
```

### How to build storybook?

```sh
  yarn storybook:build
```

### How to show storybook?

```sh
  yarn storybook:start
```

### How to run lint?

```sh
  yarn lint
```

### How to run tests?

```sh
  yarn test
```

## Libs that project depends

This libs are Peer Dependencies of this project.

- [Polished](https://github.com/styled-components/polished)
- [React](https://github.com/facebook/react)
- [React-Dom](https://github.com/facebook/react/tree/master/packages/react-dom)
- [Styled-Components](https://github.com/styled-components/styled-components)
- [Styled-Components-Modifiers](https://github.com/Decisiv/styled-components-modifiers)
- [Styled-Theme](https://github.com/diegohaz/styled-theme)
- [Styled-Tools](https://github.com/diegohaz/styled-tools)

## License

Licensed under the MIT License, Copyright © 2019-present Felippe Maurício.

