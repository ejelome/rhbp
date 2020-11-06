import HelloWorld from "./HelloWorld";

const initialState = {
  title: "hello, world",
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
