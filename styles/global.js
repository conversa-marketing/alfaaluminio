
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poller One', sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
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

