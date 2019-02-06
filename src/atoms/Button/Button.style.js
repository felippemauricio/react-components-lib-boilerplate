import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import ButtonModifiers from './Button.modifiers';


const Button = styled.button`
  border: 2px solid palevioletred;
  border-radius: 3px;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  ${applyStyleModifiers(ButtonModifiers)}
`;


export {
  Button,
};
