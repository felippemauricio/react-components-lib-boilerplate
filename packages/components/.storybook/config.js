import React, { Fragment } from 'react';
import { addDecorator, configure } from '@storybook/react';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import Themes, { GlobalStyle } from '@react-components-lib-boilerplate/themes';


addDecorator(withThemesProvider(Object.values(Themes)));
addDecorator(withBackgrounds([
  { name: 'Light', value: '#fff', default: true },
  { name: 'Dark', value: '#000' },
]));
addDecorator((story) => (
  <Fragment>
    <GlobalStyle />
    { story() }
  </Fragment>
));

const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
