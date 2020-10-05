import React from "react";

/* Style */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Header from "./components/Header/Header";
import RecommendCarousel from "./components/RecommendCarousel/RecommendCarousel";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <RecommendCarousel />
      </ThemeProvider>
    </div>
  );
}

export default App;
