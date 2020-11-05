import React, { useContext, useEffect } from "react";

import { Context } from "../../context";
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

  return <h1>{title}</h1>;
};

export default HelloWorld;
