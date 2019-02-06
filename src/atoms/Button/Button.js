import React from 'react';
import { string } from 'prop-types';
import { styleModifierPropTypes } from 'styled-components-modifiers';
import ButtonModifiers, { defaultModifier } from './Button.modifiers'; 
import { Button as Btn } from './Button.style';


function Button({ children, ...props }) {
  return (
    <Btn {...props}>
      {children}
    </Btn>
  );  
}

Button.propTypes = {
  children: string.isRequired,
  modifiers: styleModifierPropTypes(ButtonModifiers),
};

Button.defaultProps = {
  modifiers: defaultModifier,
};


export default Button;
