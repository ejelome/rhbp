import { Typography } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useContext, useEffect } from "react";

import { Context } from "../../ContextProvider";
import { setTitle } from "./actions";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: grey[900], // near-black: #212121
    "& h1": { color: grey[50] }, // near-white: #fafafa
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
