import { palette } from 'styled-theme';


const ButtonModifiers = {
  default: (props) => `
    background-color: ${palette('default', 0)(props)};
    color: ${palette('default', 1)(props)};
  `,
  primary: (props) => `
    background-color: ${palette('primary', 0)(props)};
    color: ${palette('primary', 1)(props)};
  `,
};

export const defaultModifier = 'default';


export default ButtonModifiers;
