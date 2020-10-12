import React from "react";
import { Switch, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

/* Style */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import theme from "./styles/theme";

/* Component */
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Books from "./components/Books/Books";
import DetailBook from "./components/DetailBook/DetailBook";
import Mypage from "./components/Mypage/Mypage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path={["/category/:id", "/search"]} component={Books} />
          <Route path="/books/:id" component={DetailBook} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
