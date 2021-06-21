import React from "react";
import { RouteProps, Switch, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CountryDetails from "../pages/CountryDetails/CountryDetails";
export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}
export interface AppRoute extends RouteProps {
  type?: RouteType;
}
export const AppRoutes: AppRoute[] = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/details/:name",
    exact: true,
    component: CountryDetails,
  },
];
const Routes = () => {
  return (
    <Switch>
      {AppRoutes.map((route) => {
        const { path, ...rest } = route;
        return <Route key={`${path}`} {...rest} path={`${path}`} />;
      })}
    </Switch>
  );
};

export default Routes;
