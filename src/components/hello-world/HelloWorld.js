import { Grid, Paper, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";

import { Context } from "../../ContextProvider";
import { setTitle } from "./actions";
import styles from "./styles";

const HelloWorld = () => {
  const {
    state: {
      helloWorld: { title },
    },
    dispatch,
  } = useContext(Context);

  const { root } = styles();

  useEffect(() => {
    const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env;
    const endpoint = `${apiBaseUrl}/hello-world/1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then(({ attributes: { title } }) => dispatch(setTitle(`${title}`)));
  }, [dispatch]);

  return (
    <Grid
      component={Paper}
      elevation={0}
      container
      direction="column"
      alignItems="center"
      spacing={4}
      className={root}
    >
      <Grid item>
        <Typography variant="h1">{title}</Typography>
      </Grid>
    </Grid>
  );
};

export default HelloWorld;
