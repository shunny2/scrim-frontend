import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #182707;
        font-family: 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;