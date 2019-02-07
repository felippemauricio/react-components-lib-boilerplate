import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';
import Button from './Button';


Object.keys(Themes).forEach(theme => {
  test('Render default Button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={Themes[theme]}>
        <Button>
          Default Button
        </Button>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Render primary Button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={Themes[theme]}>
        <Button modifiers="primary">
          Primary Button
        </Button>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Button text are correct', () => {
    const buttonText = 'Hello World';
    const { root: instance } = renderer.create(
      <ThemeProvider theme={Themes[theme]}>
        <Button>
          {buttonText}
        </Button>
      </ThemeProvider>
    );
    const hasTextInsideButton = instance.find((el) => el.type === 'button'
      && el.children
      && el.children[0] === buttonText
    );
    expect(hasTextInsideButton).toBeTruthy();
  });
});
