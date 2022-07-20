import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {};

const GlobalStyles = createGlobalStyle`
  * {
    font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  background-color: #23252C;
  }

  
body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}


main {
    max-width: 317px;
    border: 1px solid #fff;
    min-height: 780px;
    margin: 0 auto;
    border-radius: 10px;
}



`;
export default function Layout( {children}) {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
    <div className="content">
      <main>{children}</main>
    </div>
  </ThemeProvider>
  )
}
