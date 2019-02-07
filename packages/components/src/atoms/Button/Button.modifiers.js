const ButtonModifiers = {
  default: ({ theme }) => `
    background-color: ${theme.palette.default[0]};
    color: ${theme.palette.default[1]};
  `,
  primary: ({ theme }) => `
    background-color: ${theme.palette.default[1]};
    color: ${theme.palette.default[0]};
  `,
};

export const defaultModifier = 'default';


export default ButtonModifiers;
