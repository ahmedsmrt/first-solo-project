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
    padding: 0;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
  width: 100vw;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

.content {
    width: 100vw;
    border-radius: 10px;

}

main {
    width: 317px;
    min-height: 780px;
    border-radius: 10px;
    background: #1A1B21;
    margin: 0 auto;
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
