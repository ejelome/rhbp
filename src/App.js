import { useEffect, useState } from "react";

const App = () => {
  const initialState = () => ({ title: "" });
  const [resource, setResource] = useState(initialState);

  useEffect(() => {
    const { REACT_APP_BASE_API_URL: baseUrl } = process.env;
    const id = 1;
    const path = "hello-world";
    const endpoint = `${baseUrl}/${path}/${id}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then(({ attributes }) =>
        setResource((prevResource) => ({ prevResource, ...attributes }))
      );
  }, []);

  const { title } = resource;

  return <h1>{title}</h1>;
};

export default App;
