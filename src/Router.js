import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Context } from "./ContextProvider";

const Router = () => {
  const { state } = useContext(Context);
  const routes = Object.values(state)
    .map(({ routes }) => routes)
    .flat();

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((props, i) => (
          <Route key={i} {...props} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
