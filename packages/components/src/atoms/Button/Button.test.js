import React from 'react';
import { render, shallow } from 'enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import Themes from '@react-components-lib-boilerplate/themes';
import Button from './Button';


describe('Atoms/Button', () => {
  it('Render default Button', () => {
    const wrapper = render(
      <ThemeProvider theme={Themes.main}>
        <Button>
          Default Button
        </Button>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Render primary Button', () => {
    const wrapper = render(
      <ThemeProvider theme={Themes.main}>
        <Button modifiers="primary">
          Primary Button
        </Button>
      </ThemeProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('Button text are correct', () => {
    const buttonText = 'Hello World';
    const wrapper = render(
      <ThemeProvider theme={Themes.main}>
        <Button>
          {buttonText}
        </Button>
      </ThemeProvider>
    );
    const textInsideButton = wrapper.text();
    expect(textInsideButton).toBe(buttonText);
  });

  it('Button are clickable', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <Button onClick={onClick}>
        Primary Button
      </Button>
    );
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
