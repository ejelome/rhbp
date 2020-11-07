import { Link } from "@material-ui/core";
import { useContext } from "react";
import { Link as RouterLink } from "react-router-dom";

import { Context } from "../../ContextProvider";

const NavBar = () => {
  const { state } = useContext(Context);
  const routes = Object.values(state)
    .map(({ routes }) => routes)
    .flat();

  return (
    <nav>
      <ul>
        {routes.map(
          ({ name, path }, i) =>
            name && (
              <li key={i}>
                <Link component={RouterLink} to={path}>
                  {name}
                </Link>
              </li>
            )
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
