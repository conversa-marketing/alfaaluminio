
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
    font-family: 'DM Sans', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    --red-primary: #f02d26;
    --red-primary-hover: #d52f29;
    --blue-primary: #00447d;
    --white: #fff;
    --black: #222;
  }
 `

export default GlobalStyles;

