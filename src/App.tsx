import React from "react";
import { Router, Switch } from "react-router";
import Login from "./screens/Login";
import { GlobalStyles } from "./styles"

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Login />
    </>
  )
}

export default App;
