import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundView from "../views/NotFound";
import WelcomeView from "../views/Welcome";
import HomeView from "../views/Home";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact={true} path="/" component={WelcomeView} />
        <Route path="/home" component={HomeView} />
        <Route path="*" component={NotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
