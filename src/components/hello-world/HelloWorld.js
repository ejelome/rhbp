import { Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";

import { Context } from "../../ContextProvider";
import { setTitle } from "./actions";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    backgroundColor: palette.common.black,
    "& h1": { color: palette.common.white },
  },
}));

const HelloWorld = () => {
  const {
    state: {
      helloWorld: { title },
    },
    dispatch,
  } = useContext(Context);
  const { root } = useStyles();
  const {
    palette: { type },
  } = useTheme();

  useEffect(() => {
    const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env;
    const endpoint = `${apiBaseUrl}/hello-world/1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then(({ attributes: { title } }) =>
        dispatch(setTitle(`${type} ${title}`))
      );
  }, []);

  return (
    <div className={root}>
      <Typography variant="h1">{title}</Typography>
    </div>
  );
};

export default HelloWorld;
