import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';


storiesOf('Button', module)
  .add('Button Default', () => (
    <Button>Default Button</Button>
  ))
  .add('Button Primary', () => (
    <Button modifiers="primary">Button Primary</Button>
  ));
