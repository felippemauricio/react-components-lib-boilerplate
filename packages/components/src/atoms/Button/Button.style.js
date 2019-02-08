import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { font, palette } from 'styled-theme';
import ButtonModifiers from './Button.modifiers';


const Button = styled.button`
  border: 2px solid ${palette('default', 0)};
  border-radius: 3px;
  font-family: '${font('default')}';
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;

  ${applyStyleModifiers(ButtonModifiers)}
`;


export {
  Button,
};
