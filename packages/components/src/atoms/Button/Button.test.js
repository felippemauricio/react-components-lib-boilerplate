import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';
import Button from './Button';


describe('Atoms/Button', () => {
  it('Render default Button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={Themes.main}>
        <Button>
          Default Button
        </Button>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Render primary Button', () => {
    const tree = renderer.create(
      <ThemeProvider theme={Themes.main}>
        <Button modifiers="primary">
          Primary Button
        </Button>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button text are correct', () => {
    const buttonText = 'Hello World';
    const { root: instance } = renderer.create(
      <ThemeProvider theme={Themes.main}>
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
