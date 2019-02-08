import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';
import IndieFlowerFont from 'Fonts/IndieFlower/IndieFlower.ttf';


const ThemeGlobalStyle = createGlobalStyle`
  ${resetCss}

  @font-face {
    font-family: 'Indie Flower';
    src: url('${IndieFlowerFont}');
    font-weight: 400;
  }
`;


export default ThemeGlobalStyle;
