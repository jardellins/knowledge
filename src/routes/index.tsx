import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Result from "../pages/Result";
import Finished from "../pages/Finished";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/questions" exact component={Questions} />
      <Route path="/result/:id" exact component={Result} />
      <Route path="/finished" exact component={Finished} />
    </Switch>
  );
};

export default Routes;
