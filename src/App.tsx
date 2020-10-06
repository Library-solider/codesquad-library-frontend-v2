import React from "react";
import { Switch, Route } from "react-router-dom";

/* Style */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
