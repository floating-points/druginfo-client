import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Home from "./screens/Home";
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
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
