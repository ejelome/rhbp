import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./components/nav-bar/NavBar";
import { Context } from "./ContextProvider";

const Router = () => {
  const { state } = useContext(Context);
  const routes = Object.values(state)
    .map(({ routes }) => routes)
    .flat();

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        {routes.map((props, i) => (
          <Route key={i} {...props} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
