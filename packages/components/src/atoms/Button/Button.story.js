import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';
import Button from './Button';


storiesOf('Button', module)
  .addDecorator(story => (
    <ThemeProvider theme={Themes.main}>
      {story()}
    </ThemeProvider>
  ))
  .add('Button Default', () => (
    <Button>Default Button</Button>
  ))
  .add('Button Primary', () => (
    <Button modifiers="primary">Button Primary</Button>
  ));
