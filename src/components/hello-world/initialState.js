import HelloWorld from "./HelloWorld";

const initialState = {
  title: "",
  routes: [
    {
      name: "Hello World!",
      path: "/",
      component: HelloWorld,
      exact: true,
    },
  ],
};

export default initialState;
