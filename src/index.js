import React from "react";
import ReactDOM from "react-dom";
import MainLayout from "./commonComponents/layouts/MainLayout";
import ClassComponent from "./commonComponents/homeComponent/ClassComponent";

import NadContainer from "./pages/it-kamasutra/containers/NadContainer";
import HomePage from "./pages/homePage/HomePage";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    {/* <HomePage />
    <MainLayout name="Nadia Y" age={20} friends={["alex", "petr"]} />

    <ClassComponent /> */}
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

    {/* <NadContainer /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
