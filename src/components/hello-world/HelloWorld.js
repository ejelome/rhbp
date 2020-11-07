import { Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";

import { Context } from "../../ContextProvider";
import { setTitle } from "./actions";

const HelloWorld = () => {
  const {
    state: {
      helloWorld: { title },
    },
    dispatch,
  } = useContext(Context);

  useEffect(() => {
    const { REACT_APP_API_BASE_URL: apiBaseUrl } = process.env;
    const endpoint = `${apiBaseUrl}/hello-world/1`;

    fetch(endpoint)
      .then((response) => response.json())
      .then(({ attributes: { title } }) => dispatch(setTitle(title)));
  }, []);

  return <Typography variant="h1">{title}</Typography>;
};

export default HelloWorld;
