import { createGlobalStyle } from 'styled-components';
import resetCss from 'styled-reset';


const ThemeGlobalStyle = createGlobalStyle`
  ${resetCss}

  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
`;


export default ThemeGlobalStyle;
