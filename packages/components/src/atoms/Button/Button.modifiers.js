const ButtonModifiers = {
  default: ({ theme }) => `
    background-color: ${theme.palette.default[0]};
    color: ${theme.palette.default[1]};
  `,
  primary: ({ theme }) => `
    background-color: ${theme.palette.primary[0]};
    color: ${theme.palette.primary[1]};
  `,
};

export const defaultModifier = 'default';


export default ButtonModifiers;
