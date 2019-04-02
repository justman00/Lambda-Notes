import React, { useState } from "react";

export const Context = React.createContext();

const Provider = props => {
  const [store, setStore] = useState({ value: "hello" });

  return <Context.Provider value={store}>{props.children}</Context.Provider>;
};

export const Consumer = Context.Consumer;

export default Provider;
