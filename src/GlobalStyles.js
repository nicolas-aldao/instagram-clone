import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --primary-color: #FF6E96;
      --primary-color-light: #FFC6D3;
      --secondary-color: #FFAA6F;
      --secondary-color-light: #FFE0BF;
      --background-color: #FAFAFA;
      --text-color: #262626;
      --text-color-white: #FAFAFA;
      --success: #34A853;
      --success-light: #9EE1C0;
      --warning: #FBBC05;
      --warning-light: #FFE8A6;
      --error: #EA4335;
      --error-light: #FF9D9D;

      --grey-1: #FAFAFA;
      --grey-2: #F5F5F5;
      --grey-3: #EDEDED;
      --grey-4: #DBDBDB;
      --grey-5: #BFBFBF;
      --grey-6: #8C8C8C;
      --grey-7: #595959;
      --grey-8: #262626;
      --border-radius-lg: 16px;
    }

    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    *, *::before, *::after {
            box-sizing: inherit;
    }
    ul, li, h1, h2, h3, p, button {
            margin: 0;
    }
    ul {
            list-style: none;
            padding: 0;
    }
    button {
            background: transparent;
            border: 0;
            outline: 0;
    }
    body {
            background: var(--background-color);
            height: 100vh;
            margin: 0 auto;
            max-width: 500px;
            overscroll-behavior: none;
            width: 100%;
    }
    #app {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            overflow-x: hidden;
            min-height: 100vh;
            padding-bottom: 10px;
    }

    p {
      color: var(--grey-8);
    }
`;
