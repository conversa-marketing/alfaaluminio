
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', sans-serif;
    font-weight: 800;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --red-primary: #f02d26;
    --red-primary-hover: #d52f29;
    --blue-primary: #00447d;
    --blue-primary-hover: #0A599B;
    --white: #fff;
    --gray-light: #f6f6f6;
    --black: #222;
  }
 `

export default GlobalStyles;

