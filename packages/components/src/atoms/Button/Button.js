import { string } from 'prop-types';
import { styleModifierPropTypes } from 'styled-components-modifiers';
import ButtonModifiers, { defaultModifier } from './Button.modifiers';
import { Button } from './Button.style';


Button.propTypes = {
  children: string.isRequired,
  modifiers: styleModifierPropTypes(ButtonModifiers),
};

Button.defaultProps = {
  modifiers: defaultModifier,
};


export default Button;
