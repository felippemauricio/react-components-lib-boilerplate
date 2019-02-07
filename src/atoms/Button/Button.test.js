import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Button from './Button';


test('Render default Button', () => {
  const tree = renderer.create(
    <Button>
      Default Button
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Render primary Button', () => {
  const tree = renderer.create(
    <Button modifiers="primary">
      Primary Button
    </Button>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button text are correct', () => {
  const buttonText = 'Hello World';
  const { root: instance } = renderer.create(
    <Button>
      {buttonText}
    </Button>
  );
  const hasTextInsideButton = instance.find((el) => el.type === 'button'
    && el.children
    && el.children[0] === buttonText
  );
  expect(hasTextInsideButton).toBeTruthy();
});

