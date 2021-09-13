import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import MainPage from "./MainPage/Mainpage";
import Home from "./screens/Home";
import Info from "./screens/Info";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import SearchPage from "./SearchPage/SearchPage";
import { GlobalStyles } from "./styles"


const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/search" component={SearchPage} />
          <Route path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
