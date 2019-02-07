import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


storiesOf(`Button`, module)
  .add('Button Default', () => {
    const onClick = action('Clicked');
    return (
      <Button onClick={onClick}>
        Default Button
      </Button>
    );
  })
  .add('Button Primary', () => {
    const onClick = action('Clicked');
    return (
      <Button onClick={onClick} modifiers="primary">
        Button Primary
      </Button>
    );
  });
