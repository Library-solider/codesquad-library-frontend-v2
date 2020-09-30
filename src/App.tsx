import React from "react";

/* Style */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
