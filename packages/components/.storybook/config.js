import { addDecorator, configure } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';


addDecorator(withThemesProvider(Object.values(Themes)));


const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
