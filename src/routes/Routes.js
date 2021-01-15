import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ROUTES from "./RouteNames";
import CounterContainer from "../pages/counterPage/containers/CounterContainer";
import HomePage from "../pages/homePage/HomePage";
import NadContainer from "../pages/it-kamasutra/containers/NadContainer";
import TodoListContainer from "../pages/todoList/containers/TodoListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.COUNTER_PAGE} component={CounterContainer} />
      <Route exact path={ROUTES.NAD_PAGE} component={NadContainer} />
      <Route exact path={ROUTES.TO_DO} component={TodoListContainer} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
export default Routes;
