import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';
import Button from './Button';


storiesOf('Button', module)
  .add('Button Default', () => (
    <ThemeProvider theme={Themes.main}>
      <Button>Default Button</Button>
    </ThemeProvider>
  ))
  .add('Button Primary', () => (
    <ThemeProvider theme={Themes.main}>
      <Button modifiers="primary">Button Primary</Button>
    </ThemeProvider>
  ));
