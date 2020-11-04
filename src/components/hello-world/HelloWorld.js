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
    fetch("http://localhost:3001/hello-world/1")
      .then((response) => response.json())
      .then(({ attributes: { title } }) => dispatch(setTitle(title)));
  }, []);

  return <h1>{title}</h1>;
};

export default HelloWorld;
